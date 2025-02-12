import { IBodyTypeElement } from "../../../configs/BodyType";
import { GameConfig } from "../../../configs/GameConfig";
import { IOutfitElement } from "../../../configs/Outfit";
import Utils from "../../../tools/Utils";
import MallItem_Big_Generate from "../../../ui-generate/module/MallModule/MallItem_Big_generate";
import { Tab2Type, TabType } from "../MallData";
import MallModuleC from "../MallModuleC";

export default class MallItem_Big extends MallItem_Big_Generate {
	private mallModuleC: MallModuleC = null;
	private get getMallModuleC(): MallModuleC {
		if (!this.mallModuleC) {
			this.mallModuleC = ModuleService.getModule(MallModuleC);
		}
		return this.mallModuleC;
	}

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.initUI();
		this.bindButton();
		this.bindAction();
	}

	private initUI(): void {
		this.mIconImage.imageGuid = `32115`;
		this.updateSelectStateUI();
	}

	private bindButton(): void {
		this.mSelectButton.onClicked.add(this.addItemButton.bind(this));
	}

	private bindAction(): void {
		this.getMallModuleC.onSelectItemAction.add(this.addSelectItemAction.bind(this));
	}

	private addItemButton(): void {
		this.getMallModuleC.onSelectItemAction.call(this.tabType, this.tabId, this.assetId);
	}

	private tabType: TabType = TabType.None;
	private tabId: number = 0;
	private assetId: string = null;
	public initItem(tabType: TabType, tabId: number, assetId: string): void {
		this.tabType = tabType;
		this.tabId = tabId;
		this.assetId = assetId;
		switch (tabId) {
			case Tab2Type.Tab2_BodyType:
				let bodyTypeElement: IBodyTypeElement = GameConfig.BodyType.getElement(assetId);
				this.mIconImage.imageGuid = bodyTypeElement.Icon;
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.Collapsed);
				this.mPriceTextBlock.text = StringUtil.format(GameConfig.Language.Text_BodyTypeDescribe.Value, bodyTypeElement.Scale);
				break;
			case Tab2Type.Tab2_Outfit:
				let outfitElement: IOutfitElement = GameConfig.Outfit.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(outfitElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			default:
				this.mIconImage.imageInfo.setByAssetIcon(assetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
		}
		this.updateSelectState(false);
	}

	private addSelectItemAction(tabType: TabType, tabId: number, assetId: string): void {
		if (this.tabType != tabType || this.tabId != tabId) return;
		this.updateSelectState(this.assetId == assetId);
	}

	private isSelect: boolean = false;
	public updateSelectState(isSelect: boolean): void {
		if (this.isSelect == isSelect) return;
		this.isSelect = isSelect;
		this.updateSelectStateUI();
	}

	public updateSelectStateUI(): void {
		this.mSelectButton.renderOpacity = this.isSelect ? 1 : 0;
	}
}
