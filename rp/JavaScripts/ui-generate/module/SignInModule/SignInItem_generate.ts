/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/SignInModule/SignInItem.ui
 * TIME: 2025.03.08-12.30.16
 */
 
@UIBind('UI/module/SignInModule/SignInItem.ui')
export default class SignInItem_Generate extends UIScript {
		private mIconImage_Internal: mw.Image
	public get mIconImage(): mw.Image {
		if(!this.mIconImage_Internal&&this.uiWidgetBase) {
			this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage') as mw.Image
		}
		return this.mIconImage_Internal
	}
	private mHasTextBlock_Internal: mw.TextBlock
	public get mHasTextBlock(): mw.TextBlock {
		if(!this.mHasTextBlock_Internal&&this.uiWidgetBase) {
			this.mHasTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mIconImage/mHasTextBlock') as mw.TextBlock
		}
		return this.mHasTextBlock_Internal
	}
	private mDayTextBlock_Internal: mw.TextBlock
	public get mDayTextBlock(): mw.TextBlock {
		if(!this.mDayTextBlock_Internal&&this.uiWidgetBase) {
			this.mDayTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mDayTextBlock') as mw.TextBlock
		}
		return this.mDayTextBlock_Internal
	}
	private mSignInButton_Internal: mw.Button
	public get mSignInButton(): mw.Button {
		if(!this.mSignInButton_Internal&&this.uiWidgetBase) {
			this.mSignInButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSignInButton') as mw.Button
		}
		return this.mSignInButton_Internal
	}
	private mSignInTextBlock_Internal: mw.TextBlock
	public get mSignInTextBlock(): mw.TextBlock {
		if(!this.mSignInTextBlock_Internal&&this.uiWidgetBase) {
			this.mSignInTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mSignInButton/mSignInTextBlock') as mw.TextBlock
		}
		return this.mSignInTextBlock_Internal
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
		
		this.mSignInButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSignInButton");
		});
		this.mSignInButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mHasTextBlock)
		
	
		this.initLanguage(this.mDayTextBlock)
		
	
		this.initLanguage(this.mSignInTextBlock)
		
	
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
 