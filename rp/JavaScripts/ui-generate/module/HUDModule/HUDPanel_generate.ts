/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/HUDModule/HUDPanel.ui
 * TIME: 2025.02.12-22.24.04
 */
 
@UIBind('UI/module/HUDModule/HUDPanel.ui')
export default class HUDPanel_Generate extends UIScript {
		private mVirtualJoystickPanel_Internal: mw.VirtualJoystickPanel
	public get mVirtualJoystickPanel(): mw.VirtualJoystickPanel {
		if(!this.mVirtualJoystickPanel_Internal&&this.uiWidgetBase) {
			this.mVirtualJoystickPanel_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mVirtualJoystickPanel') as mw.VirtualJoystickPanel
		}
		return this.mVirtualJoystickPanel_Internal
	}
	private mOpenShareImage_Internal: mw.Image
	public get mOpenShareImage(): mw.Image {
		if(!this.mOpenShareImage_Internal&&this.uiWidgetBase) {
			this.mOpenShareImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenShareImage') as mw.Image
		}
		return this.mOpenShareImage_Internal
	}
	private mOpenShareButton_Internal: mw.StaleButton
	public get mOpenShareButton(): mw.StaleButton {
		if(!this.mOpenShareButton_Internal&&this.uiWidgetBase) {
			this.mOpenShareButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenShareImage/mOpenShareButton') as mw.StaleButton
		}
		return this.mOpenShareButton_Internal
	}
	private mOpenSetImage_Internal: mw.Image
	public get mOpenSetImage(): mw.Image {
		if(!this.mOpenSetImage_Internal&&this.uiWidgetBase) {
			this.mOpenSetImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSetImage') as mw.Image
		}
		return this.mOpenSetImage_Internal
	}
	private mOpenSetButton_Internal: mw.StaleButton
	public get mOpenSetButton(): mw.StaleButton {
		if(!this.mOpenSetButton_Internal&&this.uiWidgetBase) {
			this.mOpenSetButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSetImage/mOpenSetButton') as mw.StaleButton
		}
		return this.mOpenSetButton_Internal
	}
	private mOpenMusicImage_Internal: mw.Image
	public get mOpenMusicImage(): mw.Image {
		if(!this.mOpenMusicImage_Internal&&this.uiWidgetBase) {
			this.mOpenMusicImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMusicImage') as mw.Image
		}
		return this.mOpenMusicImage_Internal
	}
	private mOpenMusicButton_Internal: mw.StaleButton
	public get mOpenMusicButton(): mw.StaleButton {
		if(!this.mOpenMusicButton_Internal&&this.uiWidgetBase) {
			this.mOpenMusicButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMusicImage/mOpenMusicButton') as mw.StaleButton
		}
		return this.mOpenMusicButton_Internal
	}
	private mOpenRankImage_Internal: mw.Image
	public get mOpenRankImage(): mw.Image {
		if(!this.mOpenRankImage_Internal&&this.uiWidgetBase) {
			this.mOpenRankImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenRankImage') as mw.Image
		}
		return this.mOpenRankImage_Internal
	}
	private mOpenRankButton_Internal: mw.StaleButton
	public get mOpenRankButton(): mw.StaleButton {
		if(!this.mOpenRankButton_Internal&&this.uiWidgetBase) {
			this.mOpenRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenRankImage/mOpenRankButton') as mw.StaleButton
		}
		return this.mOpenRankButton_Internal
	}
	private mOpenClothImage_Internal: mw.Image
	public get mOpenClothImage(): mw.Image {
		if(!this.mOpenClothImage_Internal&&this.uiWidgetBase) {
			this.mOpenClothImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage') as mw.Image
		}
		return this.mOpenClothImage_Internal
	}
	private mOpenClothButton_Internal: mw.StaleButton
	public get mOpenClothButton(): mw.StaleButton {
		if(!this.mOpenClothButton_Internal&&this.uiWidgetBase) {
			this.mOpenClothButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage/mOpenClothButton') as mw.StaleButton
		}
		return this.mOpenClothButton_Internal
	}
	private mOpenClothTextBlock_Internal: mw.TextBlock
	public get mOpenClothTextBlock(): mw.TextBlock {
		if(!this.mOpenClothTextBlock_Internal&&this.uiWidgetBase) {
			this.mOpenClothTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage/mOpenClothTextBlock') as mw.TextBlock
		}
		return this.mOpenClothTextBlock_Internal
	}
	private mFreeTextBlock_Internal: mw.TextBlock
	public get mFreeTextBlock(): mw.TextBlock {
		if(!this.mFreeTextBlock_Internal&&this.uiWidgetBase) {
			this.mFreeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenClothImage/mFreeTextBlock') as mw.TextBlock
		}
		return this.mFreeTextBlock_Internal
	}
	private mOpenMallImage_Internal: mw.Image
	public get mOpenMallImage(): mw.Image {
		if(!this.mOpenMallImage_Internal&&this.uiWidgetBase) {
			this.mOpenMallImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMallImage') as mw.Image
		}
		return this.mOpenMallImage_Internal
	}
	private mOpenMallButton_Internal: mw.StaleButton
	public get mOpenMallButton(): mw.StaleButton {
		if(!this.mOpenMallButton_Internal&&this.uiWidgetBase) {
			this.mOpenMallButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMallImage/mOpenMallButton') as mw.StaleButton
		}
		return this.mOpenMallButton_Internal
	}
	private mOpenMallTextBlock_Internal: mw.TextBlock
	public get mOpenMallTextBlock(): mw.TextBlock {
		if(!this.mOpenMallTextBlock_Internal&&this.uiWidgetBase) {
			this.mOpenMallTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenMallImage/mOpenMallTextBlock') as mw.TextBlock
		}
		return this.mOpenMallTextBlock_Internal
	}
	private mOpenSignInImage_Internal: mw.Image
	public get mOpenSignInImage(): mw.Image {
		if(!this.mOpenSignInImage_Internal&&this.uiWidgetBase) {
			this.mOpenSignInImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSignInImage') as mw.Image
		}
		return this.mOpenSignInImage_Internal
	}
	private mOpenSignInButton_Internal: mw.StaleButton
	public get mOpenSignInButton(): mw.StaleButton {
		if(!this.mOpenSignInButton_Internal&&this.uiWidgetBase) {
			this.mOpenSignInButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSignInImage/mOpenSignInButton') as mw.StaleButton
		}
		return this.mOpenSignInButton_Internal
	}
	private mOpenSignInTextBlock_Internal: mw.TextBlock
	public get mOpenSignInTextBlock(): mw.TextBlock {
		if(!this.mOpenSignInTextBlock_Internal&&this.uiWidgetBase) {
			this.mOpenSignInTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/UpperRightCanvas/mOpenSignInImage/mOpenSignInTextBlock') as mw.TextBlock
		}
		return this.mOpenSignInTextBlock_Internal
	}
	private mJumpBgImage_Internal: mw.Image
	public get mJumpBgImage(): mw.Image {
		if(!this.mJumpBgImage_Internal&&this.uiWidgetBase) {
			this.mJumpBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mJumpBgImage') as mw.Image
		}
		return this.mJumpBgImage_Internal
	}
	private mJumpButton_Internal: mw.Button
	public get mJumpButton(): mw.Button {
		if(!this.mJumpButton_Internal&&this.uiWidgetBase) {
			this.mJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mJumpBgImage/mJumpButton') as mw.Button
		}
		return this.mJumpButton_Internal
	}
	private mCrouchBgImage_Internal: mw.Image
	public get mCrouchBgImage(): mw.Image {
		if(!this.mCrouchBgImage_Internal&&this.uiWidgetBase) {
			this.mCrouchBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mCrouchBgImage') as mw.Image
		}
		return this.mCrouchBgImage_Internal
	}
	private mCrouchButton_Internal: mw.Button
	public get mCrouchButton(): mw.Button {
		if(!this.mCrouchButton_Internal&&this.uiWidgetBase) {
			this.mCrouchButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mCrouchBgImage/mCrouchButton') as mw.Button
		}
		return this.mCrouchButton_Internal
	}
	private mBagBgImage_Internal: mw.Image
	public get mBagBgImage(): mw.Image {
		if(!this.mBagBgImage_Internal&&this.uiWidgetBase) {
			this.mBagBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mBagBgImage') as mw.Image
		}
		return this.mBagBgImage_Internal
	}
	private mBagButton_Internal: mw.Button
	public get mBagButton(): mw.Button {
		if(!this.mBagButton_Internal&&this.uiWidgetBase) {
			this.mBagButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mBagBgImage/mBagButton') as mw.Button
		}
		return this.mBagButton_Internal
	}
	private mExitBgImage_Internal: mw.Image
	public get mExitBgImage(): mw.Image {
		if(!this.mExitBgImage_Internal&&this.uiWidgetBase) {
			this.mExitBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mExitBgImage') as mw.Image
		}
		return this.mExitBgImage_Internal
	}
	private mExitButton_Internal: mw.Button
	public get mExitButton(): mw.Button {
		if(!this.mExitButton_Internal&&this.uiWidgetBase) {
			this.mExitButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mExitBgImage/mExitButton') as mw.Button
		}
		return this.mExitButton_Internal
	}
	private mActionBgImage_Internal: mw.Image
	public get mActionBgImage(): mw.Image {
		if(!this.mActionBgImage_Internal&&this.uiWidgetBase) {
			this.mActionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mActionBgImage') as mw.Image
		}
		return this.mActionBgImage_Internal
	}
	private mActionButton_Internal: mw.Button
	public get mActionButton(): mw.Button {
		if(!this.mActionButton_Internal&&this.uiWidgetBase) {
			this.mActionButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/LowRightCanvas/mActionBgImage/mActionButton') as mw.Button
		}
		return this.mActionButton_Internal
	}
	private mGoodsCanvas_Internal: mw.Canvas
	public get mGoodsCanvas(): mw.Canvas {
		if(!this.mGoodsCanvas_Internal&&this.uiWidgetBase) {
			this.mGoodsCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas') as mw.Canvas
		}
		return this.mGoodsCanvas_Internal
	}
	private mGoodsContentCanvas_Internal: mw.Canvas
	public get mGoodsContentCanvas(): mw.Canvas {
		if(!this.mGoodsContentCanvas_Internal&&this.uiWidgetBase) {
			this.mGoodsContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas') as mw.Canvas
		}
		return this.mGoodsContentCanvas_Internal
	}
	private mGoodsListCanvas_Internal: mw.Canvas
	public get mGoodsListCanvas(): mw.Canvas {
		if(!this.mGoodsListCanvas_Internal&&this.uiWidgetBase) {
			this.mGoodsListCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas/mGoodsListCanvas') as mw.Canvas
		}
		return this.mGoodsListCanvas_Internal
	}
	private mDeleteAllGoodsButton_Internal: mw.StaleButton
	public get mDeleteAllGoodsButton(): mw.StaleButton {
		if(!this.mDeleteAllGoodsButton_Internal&&this.uiWidgetBase) {
			this.mDeleteAllGoodsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas/mDeleteAllGoodsButton') as mw.StaleButton
		}
		return this.mDeleteAllGoodsButton_Internal
	}
	private mDeleteAllGoodsImage_Internal: mw.Image
	public get mDeleteAllGoodsImage(): mw.Image {
		if(!this.mDeleteAllGoodsImage_Internal&&this.uiWidgetBase) {
			this.mDeleteAllGoodsImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mGoodsContentCanvas/mDeleteAllGoodsButton/mDeleteAllGoodsImage') as mw.Image
		}
		return this.mDeleteAllGoodsImage_Internal
	}
	private mShowHideGoodsButton_Internal: mw.Button
	public get mShowHideGoodsButton(): mw.Button {
		if(!this.mShowHideGoodsButton_Internal&&this.uiWidgetBase) {
			this.mShowHideGoodsButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mGoodsCanvas/mShowHideGoodsButton') as mw.Button
		}
		return this.mShowHideGoodsButton_Internal
	}
	private mMusicCanvas_Internal: mw.Canvas
	public get mMusicCanvas(): mw.Canvas {
		if(!this.mMusicCanvas_Internal&&this.uiWidgetBase) {
			this.mMusicCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas') as mw.Canvas
		}
		return this.mMusicCanvas_Internal
	}
	private mCloseMusicBtn_Internal: mw.Button
	public get mCloseMusicBtn(): mw.Button {
		if(!this.mCloseMusicBtn_Internal&&this.uiWidgetBase) {
			this.mCloseMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/mCloseMusicBtn') as mw.Button
		}
		return this.mCloseMusicBtn_Internal
	}
	private mMusicText_Internal: mw.TextBlock
	public get mMusicText(): mw.TextBlock {
		if(!this.mMusicText_Internal&&this.uiWidgetBase) {
			this.mMusicText_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mMusicText') as mw.TextBlock
		}
		return this.mMusicText_Internal
	}
	private mLeftMusicBtn_Internal: mw.Button
	public get mLeftMusicBtn(): mw.Button {
		if(!this.mLeftMusicBtn_Internal&&this.uiWidgetBase) {
			this.mLeftMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mLeftMusicBtn') as mw.Button
		}
		return this.mLeftMusicBtn_Internal
	}
	private mOnOffMusicBtn_Internal: mw.Button
	public get mOnOffMusicBtn(): mw.Button {
		if(!this.mOnOffMusicBtn_Internal&&this.uiWidgetBase) {
			this.mOnOffMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mOnOffMusicBtn') as mw.Button
		}
		return this.mOnOffMusicBtn_Internal
	}
	private mRightMusicBtn_Internal: mw.Button
	public get mRightMusicBtn(): mw.Button {
		if(!this.mRightMusicBtn_Internal&&this.uiWidgetBase) {
			this.mRightMusicBtn_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMusicCanvas/Canvas/mRightMusicBtn') as mw.Button
		}
		return this.mRightMusicBtn_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		this.mOpenShareButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenShareButton");
		});
		this.initLanguage(this.mOpenShareButton);
		this.mOpenShareButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOpenSetButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenSetButton");
		});
		this.initLanguage(this.mOpenSetButton);
		this.mOpenSetButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOpenMusicButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenMusicButton");
		});
		this.initLanguage(this.mOpenMusicButton);
		this.mOpenMusicButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOpenRankButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenRankButton");
		});
		this.initLanguage(this.mOpenRankButton);
		this.mOpenRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOpenClothButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenClothButton");
		});
		this.initLanguage(this.mOpenClothButton);
		this.mOpenClothButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOpenMallButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenMallButton");
		});
		this.initLanguage(this.mOpenMallButton);
		this.mOpenMallButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOpenSignInButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenSignInButton");
		});
		this.initLanguage(this.mOpenSignInButton);
		this.mOpenSignInButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mDeleteAllGoodsButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mDeleteAllGoodsButton");
		});
		this.initLanguage(this.mDeleteAllGoodsButton);
		this.mDeleteAllGoodsButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮添加点击
		
		this.mJumpButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mJumpButton");
		});
		this.mJumpButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCrouchButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCrouchButton");
		});
		this.mCrouchButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mBagButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mBagButton");
		});
		this.mBagButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mExitButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mExitButton");
		});
		this.mExitButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mActionButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mActionButton");
		});
		this.mActionButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mShowHideGoodsButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mShowHideGoodsButton");
		});
		this.mShowHideGoodsButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseMusicBtn.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseMusicBtn");
		});
		this.mCloseMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mLeftMusicBtn.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mLeftMusicBtn");
		});
		this.mLeftMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mOnOffMusicBtn.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOnOffMusicBtn");
		});
		this.mOnOffMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mRightMusicBtn.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mRightMusicBtn");
		});
		this.mRightMusicBtn.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mOpenClothTextBlock)
		
	
		this.initLanguage(this.mFreeTextBlock)
		
	
		this.initLanguage(this.mOpenMallTextBlock)
		
	
		this.initLanguage(this.mOpenSignInTextBlock)
		
	
		this.initLanguage(this.mMusicText)
		
	
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
 