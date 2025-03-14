/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TryOnModule/TryOnItem.ui
 * TIME: 2025.03.14-20.50.34
 */
 
@UIBind('UI/module/TryOnModule/TryOnItem.ui')
export default class TryOnItem_Generate extends UIScript {
		private mBgImage_Internal: mw.Image
	public get mBgImage(): mw.Image {
		if(!this.mBgImage_Internal&&this.uiWidgetBase) {
			this.mBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage') as mw.Image
		}
		return this.mBgImage_Internal
	}
	private mClickButton_Internal: mw.Button
	public get mClickButton(): mw.Button {
		if(!this.mClickButton_Internal&&this.uiWidgetBase) {
			this.mClickButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage/mClickButton') as mw.Button
		}
		return this.mClickButton_Internal
	}
	private mRankTextBlock_Internal: mw.TextBlock
	public get mRankTextBlock(): mw.TextBlock {
		if(!this.mRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage/mRankTextBlock') as mw.TextBlock
		}
		return this.mRankTextBlock_Internal
	}
	private mNameTextBlock_Internal: mw.TextBlock
	public get mNameTextBlock(): mw.TextBlock {
		if(!this.mNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage/mNameTextBlock') as mw.TextBlock
		}
		return this.mNameTextBlock_Internal
	}
	private mTryOnTextBlock_Internal: mw.TextBlock
	public get mTryOnTextBlock(): mw.TextBlock {
		if(!this.mTryOnTextBlock_Internal&&this.uiWidgetBase) {
			this.mTryOnTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage/mTryOnTextBlock') as mw.TextBlock
		}
		return this.mTryOnTextBlock_Internal
	}
	private mTryOnBgImage_Internal: mw.Image
	public get mTryOnBgImage(): mw.Image {
		if(!this.mTryOnBgImage_Internal&&this.uiWidgetBase) {
			this.mTryOnBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage/mTryOnBgImage') as mw.Image
		}
		return this.mTryOnBgImage_Internal
	}
	private mTryOnTipsTextBlock_Internal: mw.TextBlock
	public get mTryOnTipsTextBlock(): mw.TextBlock {
		if(!this.mTryOnTipsTextBlock_Internal&&this.uiWidgetBase) {
			this.mTryOnTipsTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mBgImage/mTryOnBgImage/mTryOnTipsTextBlock') as mw.TextBlock
		}
		return this.mTryOnTipsTextBlock_Internal
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
		
		this.mClickButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mClickButton");
		});
		this.mClickButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRankTextBlock)
		
	
		this.initLanguage(this.mNameTextBlock)
		
	
		this.initLanguage(this.mTryOnTextBlock)
		
	
		this.initLanguage(this.mTryOnTipsTextBlock)
		
	
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
 