import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../configs/GameConfig";
import AdPanel_Generate from "../../../ui-generate/module/AdModule/AdPanel_generate";
import TipsPanel_Generate from "../../../ui-generate/module/AdModule/TipsPanel_generate";

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
    public showRewardAd(callback: () => void, contentText: string, noText: string, yesText: string, openType: number = 0): void {
        this.callback = callback;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        setTimeout(() => {
            if (openType == 1) {
                this.mCanvas.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mCanvas.size.x, this.rootCanvas.size.y / 2 - this.mCanvas.size.y / 2);
            } else {
                this.mCanvas.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mCanvas.size.x / 2, this.rootCanvas.size.y / 2 - this.mCanvas.size.y / 2);
            }
        }, 1);
        this.show();
    }
}

export class TipsPanel extends TipsPanel_Generate {
    protected onStart(): void {
        this.canUpdate = false;
        this.layer = mw.UILayerDialog;
        this.bindButtons();
    }

    private bindButtons(): void {
        this.mYesBtn.onClicked.add(this.onClickYesButton.bind(this));
        this.mNoBtn.onClicked.add(this.onClickNoButton.bind(this));
    }

    private onClickYesButton(): void {
        if (this.callback) this.callback();
        this.hide();
    }

    private onClickNoButton(): void {
        this.hide();
    }

    private callback: () => void = null;
    public showTips(callback: () => void, titleText: string, contentText: string, noText: string, yesText: string): void {
        this.callback = callback;
        this.mTitleTxt.text = titleText;
        this.mContentTxt.text = contentText;
        this.mNoBtn.text = noText;
        this.mYesBtn.text = yesText;
        this.show();
    }
}