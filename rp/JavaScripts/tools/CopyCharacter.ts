
@Component
export default class CopyCharacter extends Script {

    private isCanTrigger: boolean = true;
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (mw.SystemUtil.isServer()) return;
        (this.gameObject as mw.Trigger).onEnter.add((character: mw.Character) => {
            if (Player.localPlayer.character.gameObjectId != character.gameObjectId) return;

            if (!this.isCanTrigger) return;
            this.isCanTrigger = false;
            TimeUtil.delaySecond(60).then(() => { this.isCanTrigger = true; });
            console.error(`aaaaaaa2`);

            character.setDescription((this.gameObject.parent as mw.Character).getDescription());
            character.asyncReady().then(() => {
                character.syncDescription();
            });
        });
    }

}