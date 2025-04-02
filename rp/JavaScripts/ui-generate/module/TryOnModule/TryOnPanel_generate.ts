/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/TryOnModule/TryOnPanel.ui
 * TIME: 2025.04.02-19.18.57
 */
 
@UIBind('UI/module/TryOnModule/TryOnPanel.ui')
export default class TryOnPanel_Generate extends UIScript {
		private mLeftCanvas_Internal: mw.Canvas
	public get mLeftCanvas(): mw.Canvas {
		if(!this.mLeftCanvas_Internal&&this.uiWidgetBase) {
			this.mLeftCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLeftCanvas') as mw.Canvas
		}
		return this.mLeftCanvas_Internal
	}
	private mTouchImage_Internal: mw.Image
	public get mTouchImage(): mw.Image {
		if(!this.mTouchImage_Internal&&this.uiWidgetBase) {
			this.mTouchImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLeftCanvas/mTouchImage') as mw.Image
		}
		return this.mTouchImage_Internal
	}
	private mSaveButton_Internal: mw.Button
	public get mSaveButton(): mw.Button {
		if(!this.mSaveButton_Internal&&this.uiWidgetBase) {
			this.mSaveButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLeftCanvas/mSaveButton') as mw.Button
		}
		return this.mSaveButton_Internal
	}
	private mSaveTextBlock_Internal: mw.TextBlock
	public get mSaveTextBlock(): mw.TextBlock {
		if(!this.mSaveTextBlock_Internal&&this.uiWidgetBase) {
			this.mSaveTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mLeftCanvas/mSaveButton/mSaveTextBlock') as mw.TextBlock
		}
		return this.mSaveTextBlock_Internal
	}
	private mListBgImage_Internal: mw.Image
	public get mListBgImage(): mw.Image {
		if(!this.mListBgImage_Internal&&this.uiWidgetBase) {
			this.mListBgImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListBgImage') as mw.Image
		}
		return this.mListBgImage_Internal
	}
	private mListCanvas_Internal: mw.Canvas
	public get mListCanvas(): mw.Canvas {
		if(!this.mListCanvas_Internal&&this.uiWidgetBase) {
			this.mListCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas') as mw.Canvas
		}
		return this.mListCanvas_Internal
	}
	private mTab1Canvas_Internal: mw.Canvas
	public get mTab1Canvas(): mw.Canvas {
		if(!this.mTab1Canvas_Internal&&this.uiWidgetBase) {
			this.mTab1Canvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mTab1Canvas') as mw.Canvas
		}
		return this.mTab1Canvas_Internal
	}
	private mTitleTextBlock_Internal: mw.TextBlock
	public get mTitleTextBlock(): mw.TextBlock {
		if(!this.mTitleTextBlock_Internal&&this.uiWidgetBase) {
			this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mTab1Canvas/mTitleTextBlock') as mw.TextBlock
		}
		return this.mTitleTextBlock_Internal
	}
	private mTab2Canvas_Internal: mw.Canvas
	public get mTab2Canvas(): mw.Canvas {
		if(!this.mTab2Canvas_Internal&&this.uiWidgetBase) {
			this.mTab2Canvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mTab2Canvas') as mw.Canvas
		}
		return this.mTab2Canvas_Internal
	}
	private mRankTextBlock_Internal: mw.TextBlock
	public get mRankTextBlock(): mw.TextBlock {
		if(!this.mRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mRankTextBlock') as mw.TextBlock
		}
		return this.mRankTextBlock_Internal
	}
	private mNameTextBlock_Internal: mw.TextBlock
	public get mNameTextBlock(): mw.TextBlock {
		if(!this.mNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mNameTextBlock') as mw.TextBlock
		}
		return this.mNameTextBlock_Internal
	}
	private mTryOnTextBlock_Internal: mw.TextBlock
	public get mTryOnTextBlock(): mw.TextBlock {
		if(!this.mTryOnTextBlock_Internal&&this.uiWidgetBase) {
			this.mTryOnTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mTab2Canvas/mTryOnTextBlock') as mw.TextBlock
		}
		return this.mTryOnTextBlock_Internal
	}
	private mItemScrollBox_Internal: mw.ScrollBox
	public get mItemScrollBox(): mw.ScrollBox {
		if(!this.mItemScrollBox_Internal&&this.uiWidgetBase) {
			this.mItemScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mItemScrollBox') as mw.ScrollBox
		}
		return this.mItemScrollBox_Internal
	}
	private mItemContentCanvas_Internal: mw.Canvas
	public get mItemContentCanvas(): mw.Canvas {
		if(!this.mItemContentCanvas_Internal&&this.uiWidgetBase) {
			this.mItemContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mListCanvas/mItemScrollBox/mItemContentCanvas') as mw.Canvas
		}
		return this.mItemContentCanvas_Internal
	}
	private mCloseButton_Internal: mw.Button
	public get mCloseButton(): mw.Button {
		if(!this.mCloseButton_Internal&&this.uiWidgetBase) {
			this.mCloseButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mCloseButton') as mw.Button
		}
		return this.mCloseButton_Internal
	}
	private mCloseImage_Internal: mw.Image
	public get mCloseImage(): mw.Image {
		if(!this.mCloseImage_Internal&&this.uiWidgetBase) {
			this.mCloseImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/ListCanvas/mCloseButton/mCloseImage') as mw.Image
		}
		return this.mCloseImage_Internal
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
		
		this.mSaveButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mSaveButton");
		});
		this.mSaveButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseButton");
		});
		this.mCloseButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mSaveTextBlock)
		
	
		this.initLanguage(this.mTitleTextBlock)
		
	
		this.initLanguage(this.mRankTextBlock)
		
	
		this.initLanguage(this.mNameTextBlock)
		
	
		this.initLanguage(this.mTryOnTextBlock)
		
	
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
 