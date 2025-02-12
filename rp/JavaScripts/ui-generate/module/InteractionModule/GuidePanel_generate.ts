/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/InteractionModule/GuidePanel.ui
 * TIME: 2025.02.12-22.24.04
 */
 
@UIBind('UI/module/InteractionModule/GuidePanel.ui')
export default class GuidePanel_Generate extends UIScript {
		private mMainBgImage_0_Internal: mw.Image
	public get mMainBgImage_0(): mw.Image {
		if(!this.mMainBgImage_0_Internal&&this.uiWidgetBase) {
			this.mMainBgImage_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0') as mw.Image
		}
		return this.mMainBgImage_0_Internal
	}
	private mItemCanvas_Internal: mw.Canvas
	public get mItemCanvas(): mw.Canvas {
		if(!this.mItemCanvas_Internal&&this.uiWidgetBase) {
			this.mItemCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mItemCanvas') as mw.Canvas
		}
		return this.mItemCanvas_Internal
	}
	private mIconImage_Internal: mw.Image
	public get mIconImage(): mw.Image {
		if(!this.mIconImage_Internal&&this.uiWidgetBase) {
			this.mIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mItemCanvas/mIconImage') as mw.Image
		}
		return this.mIconImage_Internal
	}
	private mTitleImage_0_Internal: mw.Image
	public get mTitleImage_0(): mw.Image {
		if(!this.mTitleImage_0_Internal&&this.uiWidgetBase) {
			this.mTitleImage_0_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mTitleImage_0') as mw.Image
		}
		return this.mTitleImage_0_Internal
	}
	private mTitleImage_1_Internal: mw.Image
	public get mTitleImage_1(): mw.Image {
		if(!this.mTitleImage_1_Internal&&this.uiWidgetBase) {
			this.mTitleImage_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mTitleImage_1') as mw.Image
		}
		return this.mTitleImage_1_Internal
	}
	private mClickNextStepButton_Internal: mw.Button
	public get mClickNextStepButton(): mw.Button {
		if(!this.mClickNextStepButton_Internal&&this.uiWidgetBase) {
			this.mClickNextStepButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mClickNextStepButton') as mw.Button
		}
		return this.mClickNextStepButton_Internal
	}
	private mClickNextStepTextBlock_Internal: mw.TextBlock
	public get mClickNextStepTextBlock(): mw.TextBlock {
		if(!this.mClickNextStepTextBlock_Internal&&this.uiWidgetBase) {
			this.mClickNextStepTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_0/mClickNextStepButton/mClickNextStepTextBlock') as mw.TextBlock
		}
		return this.mClickNextStepTextBlock_Internal
	}
	private mMainBgImage_1_Internal: mw.Image
	public get mMainBgImage_1(): mw.Image {
		if(!this.mMainBgImage_1_Internal&&this.uiWidgetBase) {
			this.mMainBgImage_1_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1') as mw.Image
		}
		return this.mMainBgImage_1_Internal
	}
	private mTitleImage_2_Internal: mw.Image
	public get mTitleImage_2(): mw.Image {
		if(!this.mTitleImage_2_Internal&&this.uiWidgetBase) {
			this.mTitleImage_2_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mTitleImage_2') as mw.Image
		}
		return this.mTitleImage_2_Internal
	}
	private mTitleImage_3_Internal: mw.Image
	public get mTitleImage_3(): mw.Image {
		if(!this.mTitleImage_3_Internal&&this.uiWidgetBase) {
			this.mTitleImage_3_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mTitleImage_3') as mw.Image
		}
		return this.mTitleImage_3_Internal
	}
	private mContentTextBlock_Internal: mw.TextBlock
	public get mContentTextBlock(): mw.TextBlock {
		if(!this.mContentTextBlock_Internal&&this.uiWidgetBase) {
			this.mContentTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mContentTextBlock') as mw.TextBlock
		}
		return this.mContentTextBlock_Internal
	}
	private mClickStartButton_Internal: mw.Button
	public get mClickStartButton(): mw.Button {
		if(!this.mClickStartButton_Internal&&this.uiWidgetBase) {
			this.mClickStartButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mClickStartButton') as mw.Button
		}
		return this.mClickStartButton_Internal
	}
	private mClickStartTextBlock_Internal: mw.TextBlock
	public get mClickStartTextBlock(): mw.TextBlock {
		if(!this.mClickStartTextBlock_Internal&&this.uiWidgetBase) {
			this.mClickStartTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMainBgImage_1/mClickStartButton/mClickStartTextBlock') as mw.TextBlock
		}
		return this.mClickStartTextBlock_Internal
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
		
		this.mClickNextStepButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mClickNextStepButton");
		});
		this.mClickNextStepButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mClickStartButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mClickStartButton");
		});
		this.mClickStartButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mClickNextStepTextBlock)
		
	
		this.initLanguage(this.mContentTextBlock)
		
	
		this.initLanguage(this.mClickStartTextBlock)
		
	
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
 