/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/RankModule/RankPanel.ui
 * TIME: 2025.10.01-13.35.43
 */
 
@UIBind('UI/module/RankModule/RankPanel.ui')
export default class RankPanel_Generate extends UIScript {
		private mOpenRoomRankImage_Internal: mw.Image
	public get mOpenRoomRankImage(): mw.Image {
		if(!this.mOpenRoomRankImage_Internal&&this.uiWidgetBase) {
			this.mOpenRoomRankImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenRoomRankImage') as mw.Image
		}
		return this.mOpenRoomRankImage_Internal
	}
	private mOpenRoomRankButton_Internal: mw.StaleButton
	public get mOpenRoomRankButton(): mw.StaleButton {
		if(!this.mOpenRoomRankButton_Internal&&this.uiWidgetBase) {
			this.mOpenRoomRankButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mOpenRoomRankImage/mOpenRoomRankButton') as mw.StaleButton
		}
		return this.mOpenRoomRankButton_Internal
	}
	private mRoomCanvas_Internal: mw.Canvas
	public get mRoomCanvas(): mw.Canvas {
		if(!this.mRoomCanvas_Internal&&this.uiWidgetBase) {
			this.mRoomCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas') as mw.Canvas
		}
		return this.mRoomCanvas_Internal
	}
	private mCloseRoomButton_Internal: mw.Button
	public get mCloseRoomButton(): mw.Button {
		if(!this.mCloseRoomButton_Internal&&this.uiWidgetBase) {
			this.mCloseRoomButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mCloseRoomButton') as mw.Button
		}
		return this.mCloseRoomButton_Internal
	}
	private mRoomRankTextBlock_Internal: mw.TextBlock
	public get mRoomRankTextBlock(): mw.TextBlock {
		if(!this.mRoomRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mRoomRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomRankTextBlock') as mw.TextBlock
		}
		return this.mRoomRankTextBlock_Internal
	}
	private mRoomNameTextBlock_Internal: mw.TextBlock
	public get mRoomNameTextBlock(): mw.TextBlock {
		if(!this.mRoomNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mRoomNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomNameTextBlock') as mw.TextBlock
		}
		return this.mRoomNameTextBlock_Internal
	}
	private mRoomScoreTextBlock_Internal: mw.TextBlock
	public get mRoomScoreTextBlock(): mw.TextBlock {
		if(!this.mRoomScoreTextBlock_Internal&&this.uiWidgetBase) {
			this.mRoomScoreTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomScoreTextBlock') as mw.TextBlock
		}
		return this.mRoomScoreTextBlock_Internal
	}
	private mRoomMoneyTextBlock_Internal: mw.TextBlock
	public get mRoomMoneyTextBlock(): mw.TextBlock {
		if(!this.mRoomMoneyTextBlock_Internal&&this.uiWidgetBase) {
			this.mRoomMoneyTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/TitleRoomCanvas/mRoomMoneyTextBlock') as mw.TextBlock
		}
		return this.mRoomMoneyTextBlock_Internal
	}
	private mRoomScrollBox_Internal: mw.ScrollBox
	public get mRoomScrollBox(): mw.ScrollBox {
		if(!this.mRoomScrollBox_Internal&&this.uiWidgetBase) {
			this.mRoomScrollBox_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mRoomScrollBox') as mw.ScrollBox
		}
		return this.mRoomScrollBox_Internal
	}
	private mRoomContentCanvas_Internal: mw.Canvas
	public get mRoomContentCanvas(): mw.Canvas {
		if(!this.mRoomContentCanvas_Internal&&this.uiWidgetBase) {
			this.mRoomContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mRoomCanvas/mRoomScrollBox/mRoomContentCanvas') as mw.Canvas
		}
		return this.mRoomContentCanvas_Internal
	}
	private mWorldCanvas_Internal: mw.Canvas
	public get mWorldCanvas(): mw.Canvas {
		if(!this.mWorldCanvas_Internal&&this.uiWidgetBase) {
			this.mWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas') as mw.Canvas
		}
		return this.mWorldCanvas_Internal
	}
	private mTitleTextBlock_Internal: mw.TextBlock
	public get mTitleTextBlock(): mw.TextBlock {
		if(!this.mTitleTextBlock_Internal&&this.uiWidgetBase) {
			this.mTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/MainWorldCanvas/TitleWorldCanvas/mTitleTextBlock') as mw.TextBlock
		}
		return this.mTitleTextBlock_Internal
	}
	private mWorldRankTextBlock_Internal: mw.TextBlock
	public get mWorldRankTextBlock(): mw.TextBlock {
		if(!this.mWorldRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldRankTextBlock') as mw.TextBlock
		}
		return this.mWorldRankTextBlock_Internal
	}
	private mWorldNameTextBlock_Internal: mw.TextBlock
	public get mWorldNameTextBlock(): mw.TextBlock {
		if(!this.mWorldNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldNameTextBlock') as mw.TextBlock
		}
		return this.mWorldNameTextBlock_Internal
	}
	private mWorldTimeTextBlock_Internal: mw.TextBlock
	public get mWorldTimeTextBlock(): mw.TextBlock {
		if(!this.mWorldTimeTextBlock_Internal&&this.uiWidgetBase) {
			this.mWorldTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/WorldCanvas/mWorldTimeTextBlock') as mw.TextBlock
		}
		return this.mWorldTimeTextBlock_Internal
	}
	private mWorldContentCanvas_Internal: mw.Canvas
	public get mWorldContentCanvas(): mw.Canvas {
		if(!this.mWorldContentCanvas_Internal&&this.uiWidgetBase) {
			this.mWorldContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/ScrollBox/mWorldContentCanvas') as mw.Canvas
		}
		return this.mWorldContentCanvas_Internal
	}
	private mSelfWorldCanvas_Internal: mw.Canvas
	public get mSelfWorldCanvas(): mw.Canvas {
		if(!this.mSelfWorldCanvas_Internal&&this.uiWidgetBase) {
			this.mSelfWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas') as mw.Canvas
		}
		return this.mSelfWorldCanvas_Internal
	}
	private mSelfWorldRankTextBlock_Internal: mw.TextBlock
	public get mSelfWorldRankTextBlock(): mw.TextBlock {
		if(!this.mSelfWorldRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mSelfWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas/mSelfWorldRankTextBlock') as mw.TextBlock
		}
		return this.mSelfWorldRankTextBlock_Internal
	}
	private mSelfWorldNameTextBlock_Internal: mw.TextBlock
	public get mSelfWorldNameTextBlock(): mw.TextBlock {
		if(!this.mSelfWorldNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mSelfWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas/mSelfWorldNameTextBlock') as mw.TextBlock
		}
		return this.mSelfWorldNameTextBlock_Internal
	}
	private mSelfWorldTimeTextBlock_Internal: mw.TextBlock
	public get mSelfWorldTimeTextBlock(): mw.TextBlock {
		if(!this.mSelfWorldTimeTextBlock_Internal&&this.uiWidgetBase) {
			this.mSelfWorldTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mWorldCanvas/mSelfWorldCanvas/mSelfWorldTimeTextBlock') as mw.TextBlock
		}
		return this.mSelfWorldTimeTextBlock_Internal
	}
	private mCloseWorldButton_Internal: mw.Button
	public get mCloseWorldButton(): mw.Button {
		if(!this.mCloseWorldButton_Internal&&this.uiWidgetBase) {
			this.mCloseWorldButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseWorldButton') as mw.Button
		}
		return this.mCloseWorldButton_Internal
	}
	private mMoneyWorldCanvas_Internal: mw.Canvas
	public get mMoneyWorldCanvas(): mw.Canvas {
		if(!this.mMoneyWorldCanvas_Internal&&this.uiWidgetBase) {
			this.mMoneyWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas') as mw.Canvas
		}
		return this.mMoneyWorldCanvas_Internal
	}
	private mMoneyTitleTextBlock_Internal: mw.TextBlock
	public get mMoneyTitleTextBlock(): mw.TextBlock {
		if(!this.mMoneyTitleTextBlock_Internal&&this.uiWidgetBase) {
			this.mMoneyTitleTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/MainMoneyWorldCanvas/TitleMoneyWorldCanvas/mMoneyTitleTextBlock') as mw.TextBlock
		}
		return this.mMoneyTitleTextBlock_Internal
	}
	private mMoneyWorldRankTextBlock_Internal: mw.TextBlock
	public get mMoneyWorldRankTextBlock(): mw.TextBlock {
		if(!this.mMoneyWorldRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mMoneyWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/MoneyWorldCanvas/mMoneyWorldRankTextBlock') as mw.TextBlock
		}
		return this.mMoneyWorldRankTextBlock_Internal
	}
	private mMoneyWorldNameTextBlock_Internal: mw.TextBlock
	public get mMoneyWorldNameTextBlock(): mw.TextBlock {
		if(!this.mMoneyWorldNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mMoneyWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/MoneyWorldCanvas/mMoneyWorldNameTextBlock') as mw.TextBlock
		}
		return this.mMoneyWorldNameTextBlock_Internal
	}
	private mMoneyWorldTimeTextBlock_Internal: mw.TextBlock
	public get mMoneyWorldTimeTextBlock(): mw.TextBlock {
		if(!this.mMoneyWorldTimeTextBlock_Internal&&this.uiWidgetBase) {
			this.mMoneyWorldTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/MoneyWorldCanvas/mMoneyWorldTimeTextBlock') as mw.TextBlock
		}
		return this.mMoneyWorldTimeTextBlock_Internal
	}
	private mMoneyWorldContentCanvas_Internal: mw.Canvas
	public get mMoneyWorldContentCanvas(): mw.Canvas {
		if(!this.mMoneyWorldContentCanvas_Internal&&this.uiWidgetBase) {
			this.mMoneyWorldContentCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/MoneyScrollBox/mMoneyWorldContentCanvas') as mw.Canvas
		}
		return this.mMoneyWorldContentCanvas_Internal
	}
	private mSelfMoneyWorldCanvas_Internal: mw.Canvas
	public get mSelfMoneyWorldCanvas(): mw.Canvas {
		if(!this.mSelfMoneyWorldCanvas_Internal&&this.uiWidgetBase) {
			this.mSelfMoneyWorldCanvas_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/mSelfMoneyWorldCanvas') as mw.Canvas
		}
		return this.mSelfMoneyWorldCanvas_Internal
	}
	private mSelfMoneyWorldRankTextBlock_Internal: mw.TextBlock
	public get mSelfMoneyWorldRankTextBlock(): mw.TextBlock {
		if(!this.mSelfMoneyWorldRankTextBlock_Internal&&this.uiWidgetBase) {
			this.mSelfMoneyWorldRankTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/mSelfMoneyWorldCanvas/mSelfMoneyWorldRankTextBlock') as mw.TextBlock
		}
		return this.mSelfMoneyWorldRankTextBlock_Internal
	}
	private mSelfMoneyWorldNameTextBlock_Internal: mw.TextBlock
	public get mSelfMoneyWorldNameTextBlock(): mw.TextBlock {
		if(!this.mSelfMoneyWorldNameTextBlock_Internal&&this.uiWidgetBase) {
			this.mSelfMoneyWorldNameTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/mSelfMoneyWorldCanvas/mSelfMoneyWorldNameTextBlock') as mw.TextBlock
		}
		return this.mSelfMoneyWorldNameTextBlock_Internal
	}
	private mSelfMoneyWorldTimeTextBlock_Internal: mw.TextBlock
	public get mSelfMoneyWorldTimeTextBlock(): mw.TextBlock {
		if(!this.mSelfMoneyWorldTimeTextBlock_Internal&&this.uiWidgetBase) {
			this.mSelfMoneyWorldTimeTextBlock_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mMoneyWorldCanvas/mSelfMoneyWorldCanvas/mSelfMoneyWorldTimeTextBlock') as mw.TextBlock
		}
		return this.mSelfMoneyWorldTimeTextBlock_Internal
	}
	private mCloseMoneyWorldButton_Internal: mw.Button
	public get mCloseMoneyWorldButton(): mw.Button {
		if(!this.mCloseMoneyWorldButton_Internal&&this.uiWidgetBase) {
			this.mCloseMoneyWorldButton_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/mCloseMoneyWorldButton') as mw.Button
		}
		return this.mCloseMoneyWorldButton_Internal
	}


	protected onAwake() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = mw.UILayerBottom;
		this.initButtons();
	}
	protected initButtons() {
		//按钮添加点击
		
		this.mOpenRoomRankButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mOpenRoomRankButton");
		});
		this.initLanguage(this.mOpenRoomRankButton);
		this.mOpenRoomRankButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮添加点击
		
		this.mCloseRoomButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseRoomButton");
		});
		this.mCloseRoomButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseWorldButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseWorldButton");
		});
		this.mCloseWorldButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		this.mCloseMoneyWorldButton.onClicked.add(()=>{
			Event.dispatchToLocal("PlayButtonClick", "mCloseMoneyWorldButton");
		});
		this.mCloseMoneyWorldButton.touchMethod = (mw.ButtonTouchMethod.PreciseTap);
		
	
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mRoomRankTextBlock)
		
	
		this.initLanguage(this.mRoomNameTextBlock)
		
	
		this.initLanguage(this.mRoomScoreTextBlock)
		
	
		this.initLanguage(this.mRoomMoneyTextBlock)
		
	
		this.initLanguage(this.mTitleTextBlock)
		
	
		this.initLanguage(this.mWorldRankTextBlock)
		
	
		this.initLanguage(this.mWorldNameTextBlock)
		
	
		this.initLanguage(this.mWorldTimeTextBlock)
		
	
		this.initLanguage(this.mSelfWorldRankTextBlock)
		
	
		this.initLanguage(this.mSelfWorldNameTextBlock)
		
	
		this.initLanguage(this.mSelfWorldTimeTextBlock)
		
	
		this.initLanguage(this.mMoneyTitleTextBlock)
		
	
		this.initLanguage(this.mMoneyWorldRankTextBlock)
		
	
		this.initLanguage(this.mMoneyWorldNameTextBlock)
		
	
		this.initLanguage(this.mMoneyWorldTimeTextBlock)
		
	
		this.initLanguage(this.mSelfMoneyWorldRankTextBlock)
		
	
		this.initLanguage(this.mSelfMoneyWorldNameTextBlock)
		
	
		this.initLanguage(this.mSelfMoneyWorldTimeTextBlock)
		
	
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
 