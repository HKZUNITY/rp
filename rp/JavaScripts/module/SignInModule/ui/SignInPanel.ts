import { GameConfig } from "../../../configs/GameConfig";
import SignInPanel_Generate from "../../../ui-generate/module/SignInModule/SignInPanel_generate";
import { SignInConfigData } from "../SignInData";
import SignInItem from "./SignInItem";

export default class SignInPanel extends SignInPanel_Generate {

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerDialog;
		this.initUI();
		this.bindButton();
	}

	private initUI(): void {
		this.mTitleTextBlock.text = GameConfig.Language.Text_SignIn_4.Value;
	}

	private bindButton(): void {
		this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
	}

	private addCloseButton(): void {
		this.hide();
	}

	private signInItems: SignInItem[] = [];
	private signInConfigData: SignInConfigData = null;
	private day: number = 0;
	public initPanel(signInConfigData: SignInConfigData, day: number): void {
		this.signInConfigData = signInConfigData;
		this.day = day;
		this.mTotalDayTextBlock.text = StringUtil.format(GameConfig.Language.Text_SignIn_5.Value, this.day);
		let totalDay = this.signInConfigData.totalDay;
		let signInUserDatas = this.signInConfigData.signInUserDatas;
		for (let i = 0; i < totalDay; ++i) {
			let signInItem = UIService.create(SignInItem);
			signInItem.initItem(signInUserDatas[i], i + 1, this.day);
			this.mContentCanvas.addChild(signInItem.uiObject);
			this.signInItems.push(signInItem);
		}
	}
}
