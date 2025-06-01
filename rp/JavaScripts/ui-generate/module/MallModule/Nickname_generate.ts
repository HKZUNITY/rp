/**
 * AUTO GENERATE BY UI EDITOR.
 * WARNING: DO NOT MODIFY THIS FILE,MAY CAUSE CODE LOST.
 * AUTHOR: 爱玩游戏的小胖子
 * UI: UI/module/MallModule/Nickname.ui
 * TIME: 2025.06.01-15.48.31
 */
 
@UIBind('UI/module/MallModule/Nickname.ui')
export default class Nickname_Generate extends UIScript {
		private mEnterFlipBook_Internal: mw.FlipBook
	public get mEnterFlipBook(): mw.FlipBook {
		if(!this.mEnterFlipBook_Internal&&this.uiWidgetBase) {
			this.mEnterFlipBook_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/NicknameCanvas/mEnterFlipBook') as mw.FlipBook
		}
		return this.mEnterFlipBook_Internal
	}
	private mIdleFlipBook_Internal: mw.FlipBook
	public get mIdleFlipBook(): mw.FlipBook {
		if(!this.mIdleFlipBook_Internal&&this.uiWidgetBase) {
			this.mIdleFlipBook_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/NicknameCanvas/mIdleFlipBook') as mw.FlipBook
		}
		return this.mIdleFlipBook_Internal
	}
	private mVipIconImage_Internal: mw.Image
	public get mVipIconImage(): mw.Image {
		if(!this.mVipIconImage_Internal&&this.uiWidgetBase) {
			this.mVipIconImage_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/NicknameCanvas/mVipIconImage') as mw.Image
		}
		return this.mVipIconImage_Internal
	}
	private mVipCountText_Internal: mw.TextBlock
	public get mVipCountText(): mw.TextBlock {
		if(!this.mVipCountText_Internal&&this.uiWidgetBase) {
			this.mVipCountText_Internal = this.uiWidgetBase.findChildByPath('RootCanvas/NicknameCanvas/mVipIconImage/mVipCountText') as mw.TextBlock
		}
		return this.mVipCountText_Internal
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
		
		//按钮多语言
		
		//文本多语言
		
		this.initLanguage(this.mVipCountText)
		
	
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
 