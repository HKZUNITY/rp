import { GameConfig } from "../../configs/GameConfig";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import { HUDModuleC } from "../HUDModule/HUDModule";
import MallData, { TabType, Tab2Type, Tab3Type } from "./MallData";
import MallModuleS from "./MallModuleS";
import MallPanel from "./ui/MallPanel";

export default class MallModuleC extends ModuleC<MallModuleS, MallData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private mallPanel: MallPanel = null;
    private get getMallPanel(): MallPanel {
        if (!this.mallPanel) {
            this.mallPanel = UIService.getUI(MallPanel);
        }
        return this.mallPanel;
    }

    public onSelectTab1Action: Action1<number> = new Action1<number>();
    public onSelectTab2Action: Action1<number> = new Action1<number>();
    public onSelectTab3Action: Action1<number> = new Action1<number>();
    public onSelectItemAction: Action3<number, number, string> = new Action3<number, number, string>();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
        this.bindEvent();
    }

    protected onEnterScene(sceneType: number): void {
        this.initShopCamera();
    }

    private bindAction(): void {
        this.getHUDModuleC?.onOpenMallAction.add(this.addOpenMallAction.bind(this));
        this.onSelectItemAction.add(this.addSelectItemAction.bind(this));
    }

    private bindEvent(): void {
        InputUtil.onKeyDown(mw.Keys.O, () => {
            this.addOpenMallAction();
        });
        InputUtil.onKeyDown(mw.Keys.P, () => {
            this.getMallPanel.hide();
            this.onSwitchCameraAction.call(0);
        });
    }

    private addOpenMallAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            this.onSwitchCameraAction.call(1);
            if (!mw.UIService.getUI(MallPanel, false)?.visible) {
                this.mallPanel = UIService.getUI(MallPanel);
                this.getMallPanel.initMallPanel();
            }
            this.getMallPanel.show();
        });
    }

    private addSelectItemAction(tabType: TabType, tabId: number, assetId: string): void {
        if (tabType == TabType.None) return;
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.changeCharacter(tabId, assetId);
        });
    }

    private async changeCharacter(tabId: number, assetId: string): Promise<void> {
        await Utils.asyncDownloadAsset(assetId);
        switch (tabId) {
            case Tab2Type.Tab2_BodyType:
                let scale: number = Number(assetId);
                if (typeof scale != `number` || isNaN(scale)) return;
                this.localPlayer.character.description.advance.bodyFeatures.body.height = scale;
                break;
            case Tab2Type.Tab2_Outfit:
                this.localPlayer.character.setDescription([assetId]);
                break;
            case Tab2Type.Tab2_Top:
                this.localPlayer.character.description.advance.clothing.upperCloth.style = assetId;
                break;
            case Tab3Type.Tab3_FullHair:
                this.localPlayer.character.description.advance.hair.backHair.style = assetId;
                break;
            case Tab3Type.Tab3_FrontHair:
                this.localPlayer.character.description.advance.hair.frontHair.style = assetId;
                break;
            case Tab3Type.Tab3_BackHair:
                this.localPlayer.character.description.advance.hair.backHair.style = assetId;
                break;
            default:
                break;
        }
        await this.localPlayer.character.asyncReady();
        this.localPlayer.character.syncDescription();
    }

    public getCharacterAssetId(configId: number): string {
        switch (configId) {
            case Tab2Type.Tab2_BodyType:
                let heightRatio: number = this.localPlayer.character.description.advance.bodyFeatures.body.height;
                let scale: string = (heightRatio * 10).toFixed(1);
                let bodyTypeElement = GameConfig.BodyType.findElement(`Scale`, scale);
                if (!bodyTypeElement) return null;
                return scale;
            case Tab2Type.Tab2_Outfit:
                return null;
            case Tab2Type.Tab2_Top:
                return this.localPlayer.character.description.advance.clothing.upperCloth.style;
            case Tab3Type.Tab3_FullHair:
                return this.localPlayer.character.description.advance.hair.backHair.style;
            case Tab3Type.Tab3_FrontHair:
                return this.localPlayer.character.description.advance.hair.frontHair.style;
            case Tab3Type.Tab3_BackHair:
                return this.localPlayer.character.description.advance.hair.backHair.style;
            default:
                return null;
        }
    }

    public onSwitchCameraAction: Action1<number> = new Action1<number>();
    private async initShopCamera(): Promise<void> {
        let myCamera = Camera.currentCamera;
        let shopCamera: mw.Camera = await GameObject.asyncSpawn<mw.Camera>(`Camera`);
        shopCamera.parent = Player.localPlayer.character;
        shopCamera.localTransform.position = new mw.Vector(200, -10, 30);
        shopCamera.localTransform.rotation = new mw.Rotation(0, -5, 200);
        this.onSwitchCameraAction.add((cameraType: number) => {
            if (cameraType == 0) {
                Camera.switch(myCamera);
            } else {
                Camera.switch(shopCamera, 0.5, mw.CameraSwitchBlendFunction.Linear);
            }
        });
    }
}