/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/SetModule/SetPanel.ui
 * TIME: 2024.12.18-21.10.40
 */
 
@UIBind('UI/module/SetModule/SetPanel.ui')
export default class SetPanel_Generate extends UIScript {
		private mBgImage_Internal: mw.Image
	public get mBgImage(): mw.Image {
		if(!this.mBgImage_Internal&&this.uiWidgetBase) {
			this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage') as mw.Image
		}
		return this.mBgImage_Internal
	}
	private mSet1Button_Internal: mw.Button
	public get mSet1Button(): mw.Button {
		if(!this.mSet1Button_Internal&&this.uiWidgetBase) {
			this.mSet1Button_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mSet1Button') as mw.Button
		}
		return this.mSet1Button_Internal
	}
	private mSet1TextBlock_Internal: mw.TextBlock
	public get mSet1TextBlock(): mw.TextBlock {
		if(!this.mSet1TextBlock_Internal&&this.uiWidgetBase) {
			this.mSet1TextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mSet1Button/mSet1TextBlock') as mw.TextBlock
		}
		return this.mSet1TextBlock_Internal
	}
	private mContentCanvas_Internal: mw.Canvas
	public get mContentCanvas(): mw.Canvas {
		if(!this.mContentCanvas_Internal&&this.uiWidgetBase) {
			this.mContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas') as mw.Canvas
		}
		return this.mContentCanvas_Internal
	}
	private mQualityImage_Internal: mw.Image
	public get mQualityImage(): mw.Image {
		if(!this.mQualityImage_Internal&&this.uiWidgetBase) {
			this.mQualityImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mQualityImage') as mw.Image
		}
		return this.mQualityImage_Internal
	}
	private mQualityTextBlock_Internal: mw.TextBlock
	public get mQualityTextBlock(): mw.TextBlock {
		if(!this.mQualityTextBlock_Internal&&this.uiWidgetBase) {
			this.mQualityTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mQualityImage/mQualityTextBlock') as mw.TextBlock
		}
		return this.mQualityTextBlock_Internal
	}
	private mQualityProgressBar_Internal: mw.ProgressBar
	public get mQualityProgressBar(): mw.ProgressBar {
		if(!this.mQualityProgressBar_Internal&&this.uiWidgetBase) {
			this.mQualityProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mQualityImage/mQualityProgressBar') as mw.ProgressBar
		}
		return this.mQualityProgressBar_Internal
	}
	private mSoundImage_Internal: mw.Image
	public get mSoundImage(): mw.Image {
		if(!this.mSoundImage_Internal&&this.uiWidgetBase) {
			this.mSoundImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mSoundImage') as mw.Image
		}
		return this.mSoundImage_Internal
	}
	private mSoundTextBlock_Internal: mw.TextBlock
	public get mSoundTextBlock(): mw.TextBlock {
		if(!this.mSoundTextBlock_Internal&&this.uiWidgetBase) {
			this.mSoundTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mSoundImage/mSoundTextBlock') as mw.TextBlock
		}
		return this.mSoundTextBlock_Internal
	}
	private mSoundProgressBar_Internal: mw.ProgressBar
	public get mSoundProgressBar(): mw.ProgressBar {
		if(!this.mSoundProgressBar_Internal&&this.uiWidgetBase) {
			this.mSoundProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mSoundImage/mSoundProgressBar') as mw.ProgressBar
		}
		return this.mSoundProgressBar_Internal
	}
	private mBgMusicImage_Internal: mw.Image
	public get mBgMusicImage(): mw.Image {
		if(!this.mBgMusicImage_Internal&&this.uiWidgetBase) {
			this.mBgMusicImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mBgMusicImage') as mw.Image
		}
		return this.mBgMusicImage_Internal
	}
	private mBgMusicTextBlock_Internal: mw.TextBlock
	public get mBgMusicTextBlock(): mw.TextBlock {
		if(!this.mBgMusicTextBlock_Internal&&this.uiWidgetBase) {
			this.mBgMusicTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mBgMusicImage/mBgMusicTextBlock') as mw.TextBlock
		}
		return this.mBgMusicTextBlock_Internal
	}
	private mBgMusicmProgressBar_Internal: mw.ProgressBar
	public get mBgMusicmProgressBar(): mw.ProgressBar {
		if(!this.mBgMusicmProgressBar_Internal&&this.uiWidgetBase) {
			this.mBgMusicmProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mBgMusicImage/mBgMusicmProgressBar') as mw.ProgressBar
		}
		return this.mBgMusicmProgressBar_Internal
	}
	private mViewAngleImage_Internal: mw.Image
	public get mViewAngleImage(): mw.Image {
		if(!this.mViewAngleImage_Internal&&this.uiWidgetBase) {
			this.mViewAngleImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mViewAngleImage') as mw.Image
		}
		return this.mViewAngleImage_Internal
	}
	private mViewAngleTextBlock_Internal: mw.TextBlock
	public get mViewAngleTextBlock(): mw.TextBlock {
		if(!this.mViewAngleTextBlock_Internal&&this.uiWidgetBase) {
			this.mViewAngleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mViewAngleImage/mViewAngleTextBlock') as mw.TextBlock
		}
		return this.mViewAngleTextBlock_Internal
	}
	private mViewAngleProgressBar_Internal: mw.ProgressBar
	public get mViewAngleProgressBar(): mw.ProgressBar {
		if(!this.mViewAngleProgressBar_Internal&&this.uiWidgetBase) {
			this.mViewAngleProgressBar_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mViewAngleImage/mViewAngleProgressBar') as mw.ProgressBar
		}
		return this.mViewAngleProgressBar_Internal
	}
	private mShowNickNameImage_Internal: mw.Image
	public get mShowNickNameImage(): mw.Image {
		if(!this.mShowNickNameImage_Internal&&this.uiWidgetBase) {
			this.mShowNickNameImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage') as mw.Image
		}
		return this.mShowNickNameImage_Internal
	}
	private mShowNickNameTextBlock_Internal: mw.TextBlock
	public get mShowNickNameTextBlock(): mw.TextBlock {
		if(!this.mShowNickNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mShowNickNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameTextBlock') as mw.TextBlock
		}
		return this.mShowNickNameTextBlock_Internal
	}
	private mShowNickNameCanvas_Internal: mw.Canvas
	public get mShowNickNameCanvas(): mw.Canvas {
		if(!this.mShowNickNameCanvas_Internal&&this.uiWidgetBase) {
			this.mShowNickNameCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas') as mw.Canvas
		}
		return this.mShowNickNameCanvas_Internal
	}
	private mShowNickNameButton_Internal: mw.Button
	public get mShowNickNameButton(): mw.Button {
		if(!this.mShowNickNameButton_Internal&&this.uiWidgetBase) {
			this.mShowNickNameButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mShowNickNameButton') as mw.Button
		}
		return this.mShowNickNameButton_Internal
	}
	private mHideNickNameBgImage_Internal: mw.Image
	public get mHideNickNameBgImage(): mw.Image {
		if(!this.mHideNickNameBgImage_Internal&&this.uiWidgetBase) {
			this.mHideNickNameBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mHideNickNameBgImage') as mw.Image
		}
		return this.mHideNickNameBgImage_Internal
	}
	private mShowNickNameBgImage_Internal: mw.Image
	public get mShowNickNameBgImage(): mw.Image {
		if(!this.mShowNickNameBgImage_Internal&&this.uiWidgetBase) {
			this.mShowNickNameBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mShowNickNameBgImage') as mw.Image
		}
		return this.mShowNickNameBgImage_Internal
	}
	private mOnOffNickNameCanvas_Internal: mw.Canvas
	public get mOnOffNickNameCanvas(): mw.Canvas {
		if(!this.mOnOffNickNameCanvas_Internal&&this.uiWidgetBase) {
			this.mOnOffNickNameCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mOnOffNickNameCanvas') as mw.Canvas
		}
		return this.mOnOffNickNameCanvas_Internal
	}
	private mOnOffNickNameBgImage_Internal: mw.Image
	public get mOnOffNickNameBgImage(): mw.Image {
		if(!this.mOnOffNickNameBgImage_Internal&&this.uiWidgetBase) {
			this.mOnOffNickNameBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mOnOffNickNameCanvas/mOnOffNickNameBgImage') as mw.Image
		}
		return this.mOnOffNickNameBgImage_Internal
	}
	private mOnOffNickNameTextBlock_Internal: mw.TextBlock
	public get mOnOffNickNameTextBlock(): mw.TextBlock {
		if(!this.mOnOffNickNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mOnOffNickNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mShowNickNameImage/mShowNickNameCanvas/mOnOffNickNameCanvas/mOnOffNickNameTextBlock') as mw.TextBlock
		}
		return this.mOnOffNickNameTextBlock_Internal
	}
	private mResetButton_Internal: mw.Button
	public get mResetButton(): mw.Button {
		if(!this.mResetButton_Internal&&this.uiWidgetBase) {
			this.mResetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetButton') as mw.Button
		}
		return this.mResetButton_Internal
	}
	private mResetTextBlock_Internal: mw.TextBlock
	public get mResetTextBlock(): mw.TextBlock {
		if(!this.mResetTextBlock_Internal&&this.uiWidgetBase) {
			this.mResetTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetButton/mResetTextBlock') as mw.TextBlock
		}
		return this.mResetTextBlock_Internal
	}
	private mResetPosButton_Internal: mw.Button
	public get mResetPosButton(): mw.Button {
		if(!this.mResetPosButton_Internal&&this.uiWidgetBase) {
			this.mResetPosButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetPosButton') as mw.Button
		}
		return this.mResetPosButton_Internal
	}
	private mResetPosTextBlock_Internal: mw.TextBlock
	public get mResetPosTextBlock(): mw.TextBlock {
		if(!this.mResetPosTextBlock_Internal&&this.uiWidgetBase) {
			this.mResetPosTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mContentCanvas/mResetPosButton/mResetPosTextBlock') as mw.TextBlock
		}
		return this.mResetPosTextBlock_Internal
	}
	private mCloseButton_Internal: mw.Button
	public get mCloseButton(): mw.Button {
		if(!this.mCloseButton_Internal&&this.uiWidgetBase) {
			this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/BgImage/mBgImage/mCloseButton') as mw.Button
		}
		return this.mCloseButton_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		//按钮添加点击
		
		this.mSet1Button.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSet1Button");
		});
		this.mSet1Button.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mShowNickNameButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mShowNickNameButton");
		});
		this.mShowNickNameButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mResetButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mResetButton");
		});
		this.mResetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mResetPosButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mResetPosButton");
		});
		this.mResetPosButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mSet1TextBlock)
		
	
		this.initLanguage(this.mQualityTextBlock)
		
	
		this.initLanguage(this.mSoundTextBlock)
		
	
		this.initLanguage(this.mBgMusicTextBlock)
		
	
		this.initLanguage(this.mViewAngleTextBlock)
		
	
		this.initLanguage(this.mShowNickNameTextBlock)
		
	
		this.initLanguage(this.mOnOffNickNameTextBlock)
		
	
		this.initLanguage(this.mResetTextBlock)
		
	
		this.initLanguage(this.mResetPosTextBlock)
		
	
		//文本多语言
		
	}
	
	/*初始化多语言*/
	private initLanguage(ui: mw.StaleButton | mw.TextBlock) {
        let call = mw.UIScript.getBehavior("lan");
        if (call && ui) {
            call(ui);
        }
    }

	protected onShow(...params: any[]): void {};

	/*显示panel*/
    public show(...param): void {
		mw.UIService.showUI(this, this.layer, ...param);
	}

	/*隐藏panel*/
    public hide(): void {
		mw.UIService.hideUI(this);
	}
 }
 