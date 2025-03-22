import Utils from "../../tools/Utils";

export class NavigationConfig {
    public modelId: string;
    public interactionObjId: string;
    public npcId: string;
    public pathId: string;
    public speed: number = 10;
}
export class NavigationModel {
    public model: GameObject = null;
    public interactor: mw.Interactor = null;
    public npc: mw.Character = null;
    public pathVecs: mw.Vector[] = [];
    public speed: number = 10;
    public isInitComplete: boolean = false;

    private pathIndex: number = 0;
    private currentLocation: mw.Vector = new mw.Vector();
    private startDirection: mw.Vector = new mw.Vector();

    public prepareMove(): void {
        if (!this.model) return;
        if (!this.pathVecs || this.pathVecs.length <= 1) return;
        this.pathIndex = 0;

        this.currentLocation = this.pathVecs[this.pathIndex];
        this.model.worldTransform.position = this.currentLocation;

        mw.Vector.subtract(this.pathVecs[this.pathIndex + 1], this.currentLocation, this.startDirection);
        this.startDirection = this.startDirection.normalized;

        mw.Vector.multiply(this.startDirection, this.speed, this.stride);

        this.model.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
        let modelRot = this.model.worldTransform.rotation;
        this.model.worldTransform.rotation = new mw.Rotation(modelRot.x, modelRot.y, modelRot.z + 90);

        this.pathIndex++;
        if (this.pathIndex == this.pathVecs.length) this.pathIndex = 0;

        this.isInitComplete = true;

        this.copyOtherPlayerDescription();
        TimeUtil.setInterval(() => {
            this.copyOtherPlayerDescription();
        }, 300);
    }

    private copyOtherPlayerDescription(): void {
        let players = Player.getAllPlayers();
        if (!players || players.length == 0) return;
        let player = players[Utils.randomInt(0, players.length - 1)];
        this.npc.setDescription(player.character.getDescription());
    }

    private stride: mw.Vector = mw.Vector.zero;
    public updateMove(): void {
        if (!this.model || !this.pathVecs || this.pathVecs.length <= 1 || !this.isInitComplete) return;

        if (mw.Vector.distance(this.currentLocation, this.pathVecs[this.pathIndex]) <= 10) {
            this.currentLocation = this.pathVecs[this.pathIndex];
            this.model.worldTransform.position = this.currentLocation;

            if (this.pathIndex + 1 == this.pathVecs.length) {
                mw.Vector.subtract(this.pathVecs[0], this.currentLocation, this.startDirection);
            } else {
                mw.Vector.subtract(this.pathVecs[this.pathIndex + 1], this.currentLocation, this.startDirection);
            }
            this.startDirection = this.startDirection.normalized;

            mw.Vector.multiply(this.startDirection, this.speed, this.stride);

            this.model.worldTransform.rotation = new mw.Rotation(this.startDirection, mw.Vector.up);
            let modelRot = this.model.worldTransform.rotation;
            this.model.worldTransform.rotation = new mw.Rotation(modelRot.x, modelRot.y, modelRot.z + 90);

            this.pathIndex++;
            if (this.pathIndex == this.pathVecs.length) this.pathIndex = 0;
        }

        this.currentLocation = this.model.worldTransform.position;
        this.currentLocation.x += this.stride.x;
        this.currentLocation.y += this.stride.y;
        this.currentLocation.z += this.stride.z;
        this.model.worldTransform.position = this.currentLocation;
    }

    public async enterInteractor(): Promise<void> {
        if (!this.interactor || !this.npc) return;
        await this.interactor.asyncReady();
        await this.npc.asyncReady();
        this.interactor.onEnter.clear();
        this.interactor.onEnter.add(() => {
            this.npc.localTransform.position = mw.Vector.zero;
            this.npc.localTransform.rotation = mw.Rotation.zero;
        });
        this.interactor.enter(this.npc, mw.HumanoidSlotType.Root);
    }
}

export class NavigationModuleC extends ModuleC<NavigationModuleS, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

}

const navigationConfigs: NavigationConfig[] = [
    // { modelId: "040055A6", interactionObjId: "0A394447", npcId: "39AB2FB0", pathId: "356DCBF1", speed: 10 },
    // { modelId: "348F4F22", interactionObjId: "048FB28D", npcId: "254A21DD", pathId: "01087776", speed: 10 },
    { modelId: "289E46DE", interactionObjId: "09295629", npcId: "31DE1825", pathId: "340AFE18", speed: 10 },
    { modelId: "2963B95A", interactionObjId: "1CEC6972", npcId: "0A031A75", pathId: "1D44FD67", speed: 10 },
];

export class NavigationModuleS extends ModuleS<NavigationModuleC, null> {
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initNavigation();
    }

    private initNavigation(): void {
        TimeUtil.delaySecond(15).then(() => {
            this.initNavigationModels();
        });
    }

    private navigationModels: NavigationModel[] = [];
    private initNavigationModels(): void {
        navigationConfigs.forEach((navigationConfig: NavigationConfig) => {
            let navigationModel = new NavigationModel();
            navigationModel.speed = navigationConfig.speed;
            GameObject.asyncFindGameObjectById(navigationConfig.modelId).then((model: GameObject) => {
                navigationModel.model = model;
                GameObject.asyncFindGameObjectById(navigationConfig.npcId).then(async (npcModel: GameObject) => {
                    navigationModel.npc = npcModel as mw.Character;
                    GameObject.asyncFindGameObjectById(navigationConfig.interactionObjId).then(async (interactorModel: GameObject) => {
                        navigationModel.interactor = interactorModel as mw.Interactor;
                        navigationModel.enterInteractor();
                        GameObject.asyncFindGameObjectById(navigationConfig.pathId).then((pathModel: GameObject) => {
                            let path = pathModel.getChildren();
                            path.forEach((pathNode: GameObject) => {
                                navigationModel.pathVecs.push(pathNode.worldTransform.position);
                            });
                            navigationModel.prepareMove();
                            this.navigationModels.push(navigationModel);
                        });
                    });
                });
            });
        });
    }

    protected onUpdate(dt: number): void {
        if (!this.navigationModels || this.navigationModels.length == 0) return;
        this.navigationModels.forEach((navigationModel: NavigationModel) => {
            navigationModel.updateMove();
        });
    }
}