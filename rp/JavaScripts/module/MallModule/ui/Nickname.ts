import { GameConfig } from "../../../configs/GameConfig";
import Utils from "../../../tools/Utils";
import Nickname_Generate from "../../../ui-generate/module/MallModule/Nickname_generate";

@Component
export default class Nickname extends Script {
    @mw.Property({ replicated: true, onChanged: "onVipCountChange" })
    public vipCount: number = 0;
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        if (!SystemUtil.isClient()) return;
        this.initNickname();
    }

    private character: mw.Character = null;
    private nickname: Nickname_Generate = null;
    private nicknameWidget: mw.UIWidget = null;
    private isInit: boolean = false;
    private async initNickname(): Promise<void> {
        this.nickname = mw.UIService.create(Nickname_Generate);
        this.nicknameWidget = await GameObject.asyncSpawn<mw.UIWidget>(`UIWidget`, { replicates: false });
        this.nicknameWidget.setTargetUIWidget(this.nickname.uiWidgetBase);
        this.nicknameWidget.widgetSpace = mw.WidgetSpaceMode.OverheadUI;
        this.character = this.gameObject as mw.Character;
        this.nicknameWidget.parent = this.character.overheadUI;
        this.nicknameWidget.localTransform.position = Vector.down.multiply(10);
        this.isInit = true;

        this.onVipCountChange();
    }

    private onVipCountChange(): void {
        if (!this.isInit) return;

        if (this.vipCount <= 0) {
            Utils.setWidgetVisibility(this.nickname.mIdleFlipBook, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.nickname.mVipIconImage, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.nickname.mEnterFlipBook, mw.SlateVisibility.Collapsed);
        } else {
            Utils.setWidgetVisibility(this.nickname.mIdleFlipBook, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.nickname.mVipIconImage, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.nickname.mEnterFlipBook, mw.SlateVisibility.Visible);
            this.nickname.mVipCountText.text = StringUtil.format(GameConfig.Language.Text_Remaining.Value, this.vipCount);

            this.nickname.mEnterFlipBook.isLoop = false;
            this.nickname.mEnterFlipBook.play();
            this.nickname.mEnterFlipBook.onFinish.add(() => {
                Utils.setWidgetVisibility(this.nickname.mEnterFlipBook, mw.SlateVisibility.Collapsed);
                Utils.setWidgetVisibility(this.nickname.mIdleFlipBook, mw.SlateVisibility.Visible);
                Utils.setWidgetVisibility(this.nickname.mVipIconImage, mw.SlateVisibility.SelfHitTestInvisible);
                this.nickname.mIdleFlipBook.isLoop = true;
                this.nickname.mIdleFlipBook.play();
            });
        }
    }
}