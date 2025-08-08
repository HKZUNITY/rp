
/** 
 * AUTHOR: 爱玩游戏的小胖子
 * TIME: 2025.02.16-23.59.15
 * ATTENTION: onStart 等UI脚本自带函数不可改写为异步执行，有需求的异步逻辑请使用函数封装，通过函数接口在内部使用
 */

import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../configs/GameConfig";
import Utils from "../../../tools/Utils";
import MallVipTipsPanel_Generate from "../../../ui-generate/module/MallModule/MallVipTipsPanel_generate";

export default class MallVipTipsPanel extends MallVipTipsPanel_Generate {

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initUI();
		this.bindButtons();
	}

	private initUI(): void {
		Utils.setWidgetVisibility(this.mAdsButton, mw.SystemUtil.currentPlatform == mw.RuntimePlatform.Android
			? mw.SlateVisibility.Visible : mw.SlateVisibility.Collapsed);
	}

	private bindButtons(): void {
		this.mCoinButton.onClicked.add(this.addCoinButton.bind(this));
		this.mVipButton.onClicked.add(this.addVipButton.bind(this));
		this.mAdsButton.onClose.add(this.addAdsButton.bind(this));
		this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
	}

	private addCloseButton(): void {
		this.hide();
	}

	private addCoinButton(): void {
		if (this.coinCallback) this.coinCallback();
		this.hide();
	}

	private addVipButton(): void {
		if (this.adsCallback) this.adsCallback();
		this.hide();
	}

	private addAdsButton(isSuccess: boolean): void {
		if (!isSuccess) {
			Notice.showDownNotice(GameConfig.Language.Text_Vip1.Value);
			return;
		}
		if (this.adsCallback) this.adsCallback();
		this.hide();
	}

	private coinCallback: () => void = null;
	private adsCallback: () => void = null;
	public showTips(coinCallback: () => void, adsCallback: () => void, titleText: string, contentText: string, coinText: string, adsText: string): void {
		this.coinCallback = coinCallback;
		this.adsCallback = adsCallback;
		this.mTipsTextBlock.text = titleText;
		this.mContentTextBlock.text = contentText;
		this.mCoinTextBlock.text = coinText;
		this.mAdsButton.text = adsText;
		this.show();
	}
}
