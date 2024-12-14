import { GameConfig } from "../../configs/GameConfig";

@Component
export default class Buff extends Script {
    @mw.Property({ replicated: true, onChanged: "onBagIdChange" })
    public bagId: number = 0;
    @mw.Property({ replicated: true, onChanged: "onPlayerIdChange" })
    public playerId: number = 0;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.useUpdate = false;
    }

    private springArmLength: number = 350;
    private startScale: number = 1;
    private targetScale: number = 1;
    private time: number = 0;
    private onBagIdChange(): void {
        if (!this.targetPlayer || !this.localPlayer) return;
        if (this.bagId == 0) {
            this.startScale = this.targetPlayer.character.worldTransform.scale.x;
            this.targetScale = 1;
            if (this.targetPlayer.playerId == this.localPlayer.playerId) {
                Camera.currentCamera.springArm.length = this.springArmLength * this.targetScale;
            }
        } else {
            let actionPropElement = GameConfig.ActionProp.getElement(this.bagId);
            if (actionPropElement.BuffId <= 0) return;
            let buffParams = actionPropElement.BuffParams;
            this.startScale = this.targetPlayer.character.worldTransform.scale.x;
            this.targetScale = buffParams[0];
            if (this.targetPlayer.playerId == this.localPlayer.playerId) {
                Camera.currentCamera.springArm.length = this.springArmLength * this.targetScale;
            }
        }
        this.time = 0;
        this.useUpdate = true;
    }

    private targetPlayer: mw.Player = null;
    private localPlayer: mw.Player = null;
    private async onPlayerIdChange(): Promise<void> {
        this.targetPlayer = await Player.asyncGetPlayer(this.playerId);
        this.localPlayer = await Player.asyncGetLocalPlayer();
    }
    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        if (this.targetPlayer == null || this.time >= 1) return;
        this.time = Math.min(this.time + dt * 5, 1);
        this.startScale = this.startScale + (this.targetScale - this.startScale) * this.time;
        try {
            this.targetPlayer.character.worldTransform.scale = mw.Vector.multiply(mw.Vector.one, this.startScale);
        } catch (error) { }
    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }
}