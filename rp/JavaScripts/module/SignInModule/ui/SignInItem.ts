import { GameConfig } from "../../../configs/GameConfig";
import Utils from "../../../tools/Utils";
import SignInItem_Generate from "../../../ui-generate/module/SignInModule/SignInItem_generate";
import { SignInUserData } from "../SignInData";
import SignInModuleC from "../SignInModuleC";

export default class SignInItem extends SignInItem_Generate {
	private signInModuleC: SignInModuleC = null;
	private get getSignInModuleC(): SignInModuleC {
		if (!this.signInModuleC) {
			this.signInModuleC = ModuleService.getModule(SignInModuleC);
		}
		return this.signInModuleC;
	}
	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initUI();
		this.bindButton();
	}

	private initUI(): void {
		this.mHasTextBlock.text = GameConfig.Language.Text_SignIn_6.Value;
	}

	private bindButton(): void {
		this.mSignInButton.onClicked.add(this.addSignInButton.bind(this));
	}

	private addSignInButton(): void {
		this.getSignInModuleC.signInAction.call(this.day, this.signInUserData.shareId);
	}

	private signInUserData: SignInUserData = null;
	private day: number = 0;
	private totalDay: number = 0;
	public initItem(signInUserData: SignInUserData, day: number, totalDay: number): void {
		this.signInUserData = signInUserData;
		this.day = day;
		this.totalDay = totalDay;
		this.refreshUI();
	}

	private refreshUI(): void {
		this.mDayTextBlock.text = StringUtil.format(GameConfig.Language.Text_SignIn_9.Value, this.day);
		if (this.signInUserData?.icon && this.signInUserData?.icon?.length > 0) this.mIconImage.imageGuid = this.signInUserData.icon;
		if (this.totalDay >= this.day) {
			this.mSignInTextBlock.text = GameConfig.Language.Text_SignIn_7.Value
		} else {
			this.mSignInTextBlock.text = GameConfig.Language.Text_SignIn_8.Value
			Utils.setWidgetVisibility(this.mHasTextBlock, mw.SlateVisibility.Collapsed);
		}
	}
}
