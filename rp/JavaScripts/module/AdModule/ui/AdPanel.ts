import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../configs/GameConfig";
import AdPanel_Generate from "../../../ui-generate/module/AdModule/AdPanel_generate";

export default class AdPanel extends AdPanel_Generate {
    protected onStart(): void {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;

        this.bindButtons();
    }

    private bindButtons(): void {
        this.mYesBtn.onClose.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }

    private onClickYesButton(isSuccess: boolean): void {
        if (!isSuccess) {
            Notice.showDownNotice(GameConfig.Language.Text_Fail.Value);
            return;
        }
        this.hide();
        if (this.callback) this.callback();
    }

    private onClickNoButton(): void {
        this.hide();
    }

    private callback: () => void = null;
    public showRewardAd(callback: () => void, contentText: string, noText: string, yesText: string): void {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.show();
    }
}