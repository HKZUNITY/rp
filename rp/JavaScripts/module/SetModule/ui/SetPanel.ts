import { GameConfig } from "../../../configs/GameConfig";
import Utils from "../../../tools/Utils";
import SetPanel_Generate from "../../../ui-generate/module/SetModule/SetPanel_generate";
import { SetModuleC } from "../SetModule";

export default class SetPanel extends SetPanel_Generate {
	private setModuleC: SetModuleC = null;
	private get getSetModuleC(): SetModuleC {
		if (this.setModuleC == null) {
			this.setModuleC = ModuleService.getModule(SetModuleC);
		}
		return this.setModuleC;
	}

	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;

		this.initUI();
		this.bindButton();
	}

	private initUI(): void {
		this.mSet1TextBlock.text = GameConfig.Language.Text_SetUp1.Value;
		this.mQualityTextBlock.text = GameConfig.Language.Text_PictureQuality.Value;
		this.mSoundTextBlock.text = GameConfig.Language.Text_SoundEffects.Value;
		this.mBgMusicTextBlock.text = GameConfig.Language.Text_BackgroundMusic.Value;
		this.mViewAngleTextBlock.text = GameConfig.Language.Text_ViewAngleScaling.Value;
		this.mShowNickNameTextBlock.text = GameConfig.Language.Text_DisplayNicknames.Value;
		this.mTryOnPermissionTextBlock.text = GameConfig.Language.Text_TryOnTips9.Value;
		this.mResetPosTextBlock.text = GameConfig.Language.Text_ResetLocation.Value;
		this.mResetTextBlock.text = GameConfig.Language.Text_RestoringSettings.Value;
	}

	private bindButton(): void {
		this.mCloseButton.onClicked.add(this.onCloseButtonClick.bind(this));

		this.mQualityProgressBar.onSliderValueChanged.add(this.onQualityChange.bind(this));
		this.mQualityProgressBar.sliderButtonReleaseDelegate.add(this.onSaveQuality.bind(this));

		this.mSoundProgressBar.onSliderValueChanged.add(this.onSoundChange.bind(this));
		this.mSoundProgressBar.sliderButtonReleaseDelegate.add(this.onSaveSound.bind(this));

		this.mBgMusicmProgressBar.onSliderValueChanged.add(this.onBgMusicChange.bind(this));
		this.mBgMusicmProgressBar.sliderButtonReleaseDelegate.add(this.onSaveBgMusic.bind(this));

		this.mViewAngleProgressBar.onSliderValueChanged.add(this.onViewAngleChange.bind(this));
		this.mViewAngleProgressBar.sliderButtonReleaseDelegate.add(this.onSaveViewAngle.bind(this));

		this.mShowNickNameButton.onClicked.add(this.onShowNickNameButtonClick.bind(this));
		this.mTryOnPermissionButton.onClicked.add(this.onTryOnPermissionButtonClick.bind(this));
		this.mResetButton.onClicked.add(this.onResetButtonClick.bind(this));
		this.mResetPosButton.onClicked.add(this.onResetPosButtonClick.bind(this));
	}

	private onCloseButtonClick(): void {
		this.hide();
	}

	private onShowNickNameButtonClick(): void {
		this.getSetModuleC.onShowNickNameAction.call(this.updateNickNameUI.bind(this));
	}

	private onTryOnPermissionButtonClick(): void {
		this.getSetModuleC.onTryOnPermissionAction.call(this.updateTryOnPermissionUI.bind(this));
	}

	private updateNickNameUI(isShowNickName: boolean): void {
		if (isShowNickName) {
			Utils.setWidgetVisibility(this.mShowNickNameBgImage, mw.SlateVisibility.SelfHitTestInvisible);
			Utils.setWidgetVisibility(this.mHideNickNameBgImage, mw.SlateVisibility.Collapsed);
			this.mOnOffNickNameTextBlock.text = GameConfig.Language.Text_On.Value;
			this.mOnOffNickNameCanvas.position = new Vector2(46, -3.5);
		} else {
			Utils.setWidgetVisibility(this.mShowNickNameBgImage, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.mHideNickNameBgImage, mw.SlateVisibility.SelfHitTestInvisible);
			this.mOnOffNickNameTextBlock.text = GameConfig.Language.Text_Off.Value;
			this.mOnOffNickNameCanvas.position = new Vector2(-14, -3.5);
		}
	}

	private updateTryOnPermissionUI(isTryOn: boolean): void {
		if (isTryOn) {
			Utils.setWidgetVisibility(this.mShowTryOnPermissionBgImage, mw.SlateVisibility.SelfHitTestInvisible);
			Utils.setWidgetVisibility(this.mHideTryOnPermissionBgImage, mw.SlateVisibility.Collapsed);
			this.mOnOffTryOnPermissionTextBlock.text = GameConfig.Language.Text_TryOnTips10.Value;
			this.mOnOffTryOnPermissionCanvas.position = new Vector2(75, -3.5);
		} else {
			Utils.setWidgetVisibility(this.mShowTryOnPermissionBgImage, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.mHideTryOnPermissionBgImage, mw.SlateVisibility.SelfHitTestInvisible);
			this.mOnOffTryOnPermissionTextBlock.text = GameConfig.Language.Text_TryOnTips11.Value;
			this.mOnOffTryOnPermissionCanvas.position = new Vector2(-25, -3.5);
		}
	}

	public updateViewAngleUI(value: number): void {
		this.mViewAngleProgressBar.currentValue = value;
	}

	private onResetButtonClick(): void {
		this.getSetModuleC.onResetAction.call();
	}

	private onResetPosButtonClick(): void {
		this.getSetModuleC.onResetPosAction.call();
	}

	private onQualityChange(value: number): void {
		this.getSetModuleC.onQualityChangeAction.call(value);
	}

	private onSaveQuality(value: number): void {
		this.getSetModuleC.onSaveQualityAction.call();
	}

	private onSoundChange(value: number): void {
		this.getSetModuleC.onSoundChangeAction.call(value);
	}

	private onSaveSound(value: number): void {
		this.getSetModuleC.onSaveSoundAction.call();
	}

	private onBgMusicChange(value: number): void {
		this.getSetModuleC.onBgMusicChangeAction.call(value);
	}

	private onSaveBgMusic(value: number): void {
		this.getSetModuleC.onSaveBgMusicAction.call();
	}

	private onViewAngleChange(value: number): void {
		this.getSetModuleC.onViewAngleChangeAction.call(value);
	}

	private onSaveViewAngle(value: number): void {
		this.getSetModuleC.onSaveViewAngleAction.call();
	}

	public setDatas(quality: number, sound: number, bgMusic: number, viewAngle: number, isShowNickName: boolean, isTryOn: boolean): void {
		this.updateNickNameUI(isShowNickName);
		this.updateTryOnPermissionUI(isTryOn);
		this.mQualityProgressBar.currentValue = quality;
		this.mSoundProgressBar.currentValue = sound;
		this.mBgMusicmProgressBar.currentValue = bgMusic;
		this.mViewAngleProgressBar.currentValue = viewAngle;
	}
}
