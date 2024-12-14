/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 携一壶浊酒
 * UI: UI/module/HUDModule/HUDPanel.ui
 * TIME: 2024.12.03-16.17.53
 */
 
@UIBind('UI/module/HUDModule/HUDPanel.ui')
export default class HUDPanel_Generate extends UIScript {
		private mJumpBgImage_Internal: mw.Image
	public get mJumpBgImage(): mw.Image {
		if(!this.mJumpBgImage_Internal&&this.uiWidgetBase) {
			this.mJumpBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mJumpBgImage') as mw.Image
		}
		return this.mJumpBgImage_Internal
	}
	private mJumpButton_Internal: mw.Button
	public get mJumpButton(): mw.Button {
		if(!this.mJumpButton_Internal&&this.uiWidgetBase) {
			this.mJumpButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mJumpBgImage/mJumpButton') as mw.Button
		}
		return this.mJumpButton_Internal
	}
	private mCrouchBgImage_Internal: mw.Image
	public get mCrouchBgImage(): mw.Image {
		if(!this.mCrouchBgImage_Internal&&this.uiWidgetBase) {
			this.mCrouchBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCrouchBgImage') as mw.Image
		}
		return this.mCrouchBgImage_Internal
	}
	private mCrouchButton_Internal: mw.Button
	public get mCrouchButton(): mw.Button {
		if(!this.mCrouchButton_Internal&&this.uiWidgetBase) {
			this.mCrouchButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCrouchBgImage/mCrouchButton') as mw.Button
		}
		return this.mCrouchButton_Internal
	}
	private mBagBgImage_Internal: mw.Image
	public get mBagBgImage(): mw.Image {
		if(!this.mBagBgImage_Internal&&this.uiWidgetBase) {
			this.mBagBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagBgImage') as mw.Image
		}
		return this.mBagBgImage_Internal
	}
	private mBagButton_Internal: mw.Button
	public get mBagButton(): mw.Button {
		if(!this.mBagButton_Internal&&this.uiWidgetBase) {
			this.mBagButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBagBgImage/mBagButton') as mw.Button
		}
		return this.mBagButton_Internal
	}
	private mExitBgImage_Internal: mw.Image
	public get mExitBgImage(): mw.Image {
		if(!this.mExitBgImage_Internal&&this.uiWidgetBase) {
			this.mExitBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExitBgImage') as mw.Image
		}
		return this.mExitBgImage_Internal
	}
	private mExitButton_Internal: mw.Button
	public get mExitButton(): mw.Button {
		if(!this.mExitButton_Internal&&this.uiWidgetBase) {
			this.mExitButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mExitBgImage/mExitButton') as mw.Button
		}
		return this.mExitButton_Internal
	}
	private mActionBgImage_Internal: mw.Image
	public get mActionBgImage(): mw.Image {
		if(!this.mActionBgImage_Internal&&this.uiWidgetBase) {
			this.mActionBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionBgImage') as mw.Image
		}
		return this.mActionBgImage_Internal
	}
	private mActionButton_Internal: mw.Button
	public get mActionButton(): mw.Button {
		if(!this.mActionButton_Internal&&this.uiWidgetBase) {
			this.mActionButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mActionBgImage/mActionButton') as mw.Button
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


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
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
		
	
		//按钮多语言
		
		//文本多语言
		
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
 