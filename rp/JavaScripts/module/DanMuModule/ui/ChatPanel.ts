﻿import { IActionPropElement } from "../../../configs/ActionProp";
import { GameConfig } from "../../../configs/GameConfig";
import GlobalData from "../../../GlobalData";
import Utils from "../../../tools/Utils";
import ChatPanel_Generate from "../../../ui-generate/module/DanMuModule/ChatPanel_generate";
import { ChatData, ActionData } from "../DanMuData";
import DanMuModuleC from "../DanMuModuleC";
import ActionItem from "./ActionItem";
import ActionTabItem from "./ActionTabItem";
import BagItem from "./BagItem";
import BagTabItem from "./BagTabItem";
import ChatItem1 from "./ChatItem1";
import ChatItem2 from "./ChatItem2";
import ExpressionItem from "./ExpressionItem";

export default class ChatPanel extends ChatPanel_Generate {
	private danMuModuleC: DanMuModuleC = null;
	private get getDanMuModuleC(): DanMuModuleC {
		if (!this.danMuModuleC) {
			this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
		}
		return this.danMuModuleC;
	}

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		this.initUI();
		this.bindButton();
	}

	protected onShow(...params: any[]): void {

	}

	protected onHide(): void {
		this.initUI();
	}

	private initUI(): void {
		this.closeChatList1List2();
		this.closeExpressionList(false);
		this.closeActionList(false);
		this.closeBagCanvas(false);
		this.updateBagIcon(0);
	}

	private bindButton(): void {
		this.mOpenChatButton.onClicked.add(this.addOpenChatButton.bind(this));
		this.mCloseChatList1Button.onClicked.add(this.addCloseChatList1Button.bind(this));
		this.mCloseChatList2Button.onClicked.add(this.addCloseChatList2Button.bind(this));

		this.mOpenExpressionButton.onClicked.add(this.addOpenExpressionButton.bind(this));
		this.mCloseExpressionListButton.onClicked.add(this.addCloseExpressionButton.bind(this));

		this.mOpenActionButton.onClicked.add(this.addOpenActionButton.bind(this));
		this.mCloseActionListButton.onClicked.add(this.addCloseActionListButton.bind(this));
		// this.mStopActionButton.onClicked.add(this.addStopActionButton.bind(this));

		this.mOpenBagButton.onClicked.add(this.addOpenBagButton.bind(this));
		this.mCloseBagButton.onClicked.add(this.addCloseBagButton.bind(this));
		this.mBackBagButton.onClicked.add(this.addCloseBagButton.bind(this));
		this.mUnloadButton.onClicked.add(this.addUnloadButton.bind(this));
	}

	private addOpenChatButton(): void {
		if (!this.mChatList1Canvas.visible) {
			this.getDanMuModuleC.onOpenChatAction.call();
		} else {
			this.closeChatList1List2();
		}
	}

	private addCloseChatList1Button(): void {
		this.closeChatList1List2();
	}

	private addCloseChatList2Button(): void {
		this.closeChatList2(false);
	}

	private addOpenExpressionButton(): void {
		if (!this.mExpressionListCanvas.visible) {
			this.getDanMuModuleC.onOpenExpressionAction.call();
		} else {
			this.closeExpressionList(false);
		}
	}

	private addCloseExpressionButton(): void {
		this.closeExpressionList(false);
	}

	private addOpenActionButton(): void {
		if (!this.mActionListCanvas.visible) {
			this.getDanMuModuleC.onOpenActionAction.call();
		} else {
			this.closeActionList(false);
		}
	}

	private addCloseActionListButton(): void {
		this.closeActionList(false);
	}

	private addStopActionButton(): void {
		this.getDanMuModuleC.onStopActionButton.call();
	}

	private addOpenBagButton(): void {
		if (!this.mBagCanvas.visible) {
			this.getDanMuModuleC.onOpenBagAction.call();
		} else {
			this.closeBagCanvas(false);
		}
	}

	private addCloseBagButton(): void {
		this.closeBagCanvas(false);
	}

	private addUnloadButton(): void {
		this.getDanMuModuleC.onClickUnloadBagItemAction.call();
	}

	//#region 聊天列表
	private chatDatas: ChatData[] = [];//聊天列表
	public showChatList1(chatDatas: ChatData[], isAlreadyInitChatDatas: boolean): void {
		this.closeChatList1(true);
		this.closeExpressionList(false);
		this.closeActionList(false);
		if (isAlreadyInitChatDatas) return;
		if (!chatDatas || chatDatas.length == 0) {
			this.closeChatList1(false);
			return;
		}
		this.chatDatas = chatDatas;
		for (let i = 0; i < chatDatas.length; ++i) {
			let chatData = chatDatas[i];
			let chatItem1 = mw.UIService.create(ChatItem1);

			let text: string = chatData.chats[GlobalData.languageId];
			if (chatData.chatChilds && chatData.chatChilds.length > 0) {
				let reg = /\{[\d]\}/;
				text = text.replace(reg, "...");
			}

			chatItem1.setData(i, text);
			this.mChatList1ContentCanvas.addChild(chatItem1.uiObject);
		}
	}

	public closeChatList1List2(): void {
		this.closeChatList1(false);
		this.closeChatList2(false);
	}

	public closeChatList1(isOpen: boolean): void {
		Utils.setWidgetVisibility(this.mChatList1Canvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
	}

	public closeChatList2(isOpen: boolean): void {
		Utils.setWidgetVisibility(this.mChatList2Canvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
	}

	private chatItems2: ChatItem2[] = [];//聊天列表
	public showChatList2(index: number, chatChilds: string[][]): void {
		this.closeChatList2(true);
		this.closeExpressionList(false);
		this.closeActionList(false);
		if (!chatChilds || chatChilds.length == 0) {
			this.closeChatList2(false);
			return;
		}
		if (chatChilds.length > this.chatItems2.length) {
			for (let i = 0; i < this.chatItems2.length; ++i) {
				this.chatItems2[i].setData(index, i, chatChilds[i][GlobalData.languageId]);
				this.chatItems2[i].uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
			}
			for (let i = this.chatItems2.length; i < chatChilds.length; ++i) {
				let chatItem2 = mw.UIService.create(ChatItem2);
				chatItem2.setData(index, i, chatChilds[i][GlobalData.languageId]);
				this.mChatList2ContentCanvas.addChild(chatItem2.uiObject);
				this.chatItems2.push(chatItem2);
			}
		} else {
			for (let i = 0; i < chatChilds.length; ++i) {
				this.chatItems2[i].setData(index, i, chatChilds[i][GlobalData.languageId]);
				this.chatItems2[i].uiObject.visibility = mw.SlateVisibility.SelfHitTestInvisible;
			}
			for (let i = chatChilds.length; i < this.chatItems2.length; ++i) {
				this.chatItems2[i].uiObject.visibility = mw.SlateVisibility.Collapsed;
			}
		}
	}
	//#endregion

	//#region 表情列表
	private expressionAssets: string[] = [];//表情列表
	public showExpressionList(expressionAssets: string[], isAlreadyInitExpressionDatas: boolean): void {
		this.closeExpressionList(true);
		this.closeChatList1List2();
		this.closeActionList(false);
		if (isAlreadyInitExpressionDatas) return;
		if (!expressionAssets || expressionAssets.length == 0) {
			this.closeExpressionList(false);
			return;
		}
		this.expressionAssets = expressionAssets;
		for (let i = 0; i < expressionAssets.length; ++i) {
			let expressionItem = mw.UIService.create(ExpressionItem);
			expressionItem.setDatas(i, expressionAssets[i]);
			this.mExpressionListContentCanvas.addChild(expressionItem.uiObject);
		}
	}

	public closeExpressionList(isOpen: boolean): void {
		Utils.setWidgetVisibility(this.mExpressionListCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
	}
	//#endregion

	//#region 动作列表
	private actionDataMap: Map<number, ActionData[]> = new Map<number, ActionData[]>();//动作列表
	public showActionList(actionDataMap: Map<number, ActionData[]>, isAlreadyInitActionDatas: boolean): void {
		this.closeActionList(true);
		this.closeChatList1List2();
		this.closeExpressionList(false);
		if (isAlreadyInitActionDatas) return;
		if (!actionDataMap || actionDataMap.size == 0) {
			this.closeActionList(false);
			return;
		}
		this.actionDataMap = actionDataMap;
		if (!this.actionDataMap.has(0)) {
			this.closeActionList(false);
			return;
		}
		let tabNames: string[] = this.actionDataMap.get(0)[0]?.names;
		for (let i = 0; i < tabNames.length; ++i) {
			let actionTabItem = mw.UIService.create(ActionTabItem);
			actionTabItem.setDatas(i + 1, tabNames[i]);
			this.mActionTabListCanvas.addChild(actionTabItem.uiObject);
		}
		this.getDanMuModuleC.onClickActionTabAction.call(1);
	}

	private actionItems: ActionItem[] = [];
	public showActionItemList(tabIndex: number): void {
		if (!this.actionDataMap.has(tabIndex)) return;
		let actionDatas = this.actionDataMap.get(tabIndex);
		if (!actionDatas || actionDatas.length == 0) return;
		if (actionDatas.length > this.actionItems.length) {
			for (let i = 0; i < this.actionItems.length; ++i) {
				this.actionItems[i].setDatas(tabIndex, i, actionDatas[i]);
				Utils.setWidgetVisibility(this.actionItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.actionItems.length; i < actionDatas.length; ++i) {
				let actionItem = mw.UIService.create(ActionItem);
				actionItem.setDatas(tabIndex, i, actionDatas[i]);
				this.mActionListContentCanvas.addChild(actionItem.uiObject);
				this.actionItems.push(actionItem);
			}
		} else {
			for (let i = 0; i < actionDatas.length; ++i) {
				this.actionItems[i].setDatas(tabIndex, i, actionDatas[i]);
				Utils.setWidgetVisibility(this.actionItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = actionDatas.length; i < this.actionItems.length; ++i) {
				Utils.setWidgetVisibility(this.actionItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	public closeActionList(isOpen: boolean): void {
		Utils.setWidgetVisibility(this.mActionListCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
	}
	//#endregion

	//#region 动作道具
	public updateBagIcon(bagId: number): void {
		if (bagId == 0) {
			this.mUnloadButton.visibility = mw.SlateVisibility.Collapsed;
			this.mOpenBagButton.normalImageGuid = `153892`;
			this.mOpenBagButton.pressedImageGuid = `153892`;
			this.mOpenBagButton.disableImageGuid = `153892`;
		} else {
			this.mUnloadButton.visibility = mw.SlateVisibility.Visible;
			let bagIcon = GameConfig.ActionProp.getElement(bagId).ButtonIconId;
			this.mOpenBagButton.normalImageGuid = bagIcon;
			this.mOpenBagButton.pressedImageGuid = bagIcon;
			this.mOpenBagButton.disableImageGuid = bagIcon;
			this.closeBagCanvas(false);
		}
	}
	private bagTabTexts: string[] = [
		`Hot-热门`,
		`Wing-翅膀`,
		`Prop-道具`,
		`Food-食品`,
		`Firework-烟花`,
		`Vehicles-载具`,
	];//背包标签
	private bagTabItems: BagTabItem[] = [];
	private isInitBagUI: boolean = false;
	public showBagCanvas(): void {
		if (!this.isInitBagUI) {
			this.isInitBagUI = true;
			for (let i = 0; i < this.bagTabTexts.length; ++i) {
				let bagTabItem = mw.UIService.create(BagTabItem);
				bagTabItem.setDatas(i + 1, this.bagTabTexts[i]);
				this.mBagTabCanvas.addChild(bagTabItem.uiObject);
				this.bagTabItems.push(bagTabItem);
			}
			this.getDanMuModuleC.onClickBagTabAction.call(1);
			// this.bagTabItems[4].uiObject.visibility = mw.SlateVisibility.Collapsed;
		}
		this.closeBagCanvas(true);
	}

	private bagItems: BagItem[] = [];
	public showBagItemList(index: number): void {
		switch (index) {
			case 1:
				this.updatePropList(1);
				break;
			case 2:
				this.updatePropList(2);
				break;
			case 3:
				this.updatePropList(3);
				break;
			case 4:
				this.updatePropList(4);
				break;
			case 5:
				this.updatePropList(5);
				break;
			case 6:
				this.updatePropList(6);
				break;
		}
	}

	private updatePropList(tabIndex: number): void {
		let actionPropElement: IActionPropElement[] = GameConfig.ActionProp.getAllElement();
		actionPropElement = actionPropElement.filter((value: IActionPropElement) => { return value.AssetId && value.AssetId != "" && value.Tab == tabIndex; });
		actionPropElement.sort((a: IActionPropElement, b: IActionPropElement) => { return a.Sort - b.Sort; });
		// if (!actionPropElement || actionPropElement.length == 0) return;
		if (actionPropElement.length > this.bagItems.length) {
			for (let i = 0; i < this.bagItems.length; ++i) {
				this.bagItems[i].setDatas(actionPropElement[i].ID);
				Utils.setWidgetVisibility(this.bagItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.bagItems.length; i < actionPropElement.length; ++i) {
				let bagItem = mw.UIService.create(BagItem);
				bagItem.setDatas(actionPropElement[i].ID);
				this.mBagContentCanvas.addChild(bagItem.uiObject);
				this.bagItems.push(bagItem);
			}
		} else {
			for (let i = 0; i < actionPropElement.length; ++i) {
				this.bagItems[i].setDatas(actionPropElement[i].ID);
				Utils.setWidgetVisibility(this.bagItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = actionPropElement.length; i < this.bagItems.length; ++i) {
				Utils.setWidgetVisibility(this.bagItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	public closeBagCanvas(isOpen: boolean): void {
		Utils.setWidgetVisibility(this.mBagCanvas, isOpen ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
	}
	//#endregion
}