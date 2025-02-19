import { IBackElement } from "../../../configs/Back";
import { IEarElement } from "../../../configs/Ear";
import { IEffectsElement } from "../../../configs/Effects";
import { IFaceExpressionElement } from "../../../configs/FaceExpression";
import { IFacingElement } from "../../../configs/Facing";
import { GameConfig } from "../../../configs/GameConfig";
import { IHipElement } from "../../../configs/Hip";
import { IRightHandElement } from "../../../configs/RightHand";
import { IShoulderElement } from "../../../configs/Shoulder";
import { ITrailingElement } from "../../../configs/Trailing";
import Utils from "../../../tools/Utils";
import MallItem_Small_Generate from "../../../ui-generate/module/MallModule/MallItem_Small_generate";
import Mall from "../Mall";
import { Tab2Type, Tab3Type, TabType } from "../MallData";
import MallModuleC from "../MallModuleC";

export default class MallItem_Small extends MallItem_Small_Generate {
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
		this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
		this.updateSelectStateUI();
	}

	private bindButton(): void {
		this.mSelectButton.onClicked.add(this.addItemButton.bind(this));
		this.mColorButton.onClicked.add(this.addColorButton.bind(this));
	}

	private bindAction(): void {
		this.getMallModuleC.onSelectItemAction.add(this.addSelectItemAction.bind(this));
	}

	private addItemButton(): void {
		this.getMallModuleC.onSelectItemAction.call(this.tabType, this.tabId, this.assetId);
	}

	private addColorButton(): void {
		this.getMallModuleC.onOpenColorPickAction.call(this.tabType, this.tabId);
	}

	private tabType: TabType = TabType.None;
	private tabId: number = 0;
	private assetId: string = null;
	private isSupportColor: boolean = false;
	private isRemovableTabId: boolean = false;
	public initItem(tabType: TabType, tabId: number, assetId: string): void {
		this.tabType = tabType;
		this.tabId = tabId;
		this.assetId = assetId;
		this.mIconImage.imageColor = mw.LinearColor.white;
		this.isSupportColor = Mall.isSupportColorPick(tabId);
		this.isRemovableTabId = Mall.isRemovableTabId(tabId);
		switch (tabId) {
			case Tab3Type.Tab3_Lens:
			case Tab3Type.Tab3_UpperHighlight:
			case Tab3Type.Tab3_LowerHighlight:
				this.mIconImage.imageColor = new mw.LinearColor(0.3098, 0.1921, 0.7176);
				this.mIconImage.imageInfo.setByAssetIcon(assetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab2Type.Tab2_Expression:
				let faceExpressionElement: IFaceExpressionElement = GameConfig.FaceExpression.getElement(assetId);
				this.mIconImage.imageColor = new mw.LinearColor(0.3098, 0.1921, 0.7176);
				this.mIconImage.imageGuid = faceExpressionElement.Icon;
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.Collapsed);
				this.mPriceTextBlock.text = faceExpressionElement.Name;
				break;
			case Tab3Type.Tab3_LeftHand:
				let leftHandElement: IEffectsElement = GameConfig.LeftHand.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(leftHandElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_RightHand:
				let rightHandElement: IRightHandElement = GameConfig.RightHand.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(rightHandElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Back:
				let backElement: IBackElement = GameConfig.Back.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(backElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Ear:
				let earElement: IEarElement = GameConfig.Ear.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(earElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Face:
				let facingElement: IFacingElement = GameConfig.Facing.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(facingElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Hip:
				let hipElement: IHipElement = GameConfig.Hip.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(hipElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Shoulder:
				let shoulderElement: IShoulderElement = GameConfig.Shoulder.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(shoulderElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Effects:
				let effectsElement: IEffectsElement = GameConfig.Effects.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(effectsElement.AssetId, mw.AssetIconSize.Icon_128px);
				Utils.setWidgetVisibility(this.mCoinIconImage, mw.SlateVisibility.SelfHitTestInvisible);
				this.mPriceTextBlock.text = GameConfig.Language.Text_MallItem_Free.Value;
				break;
			case Tab3Type.Tab3_Trailing:
				let trailingElement: ITrailingElement = GameConfig.Trailing.getElement(assetId);
				this.mIconImage.imageInfo.setByAssetIcon(trailingElement.AssetId, mw.AssetIconSize.Icon_128px);
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
		this.updateSelectState(this.assetId == assetId, false);
	}

	private isSelect: boolean = false;
	public updateSelectState(isSelect: boolean, isDriectUpdate: boolean = true): void {
		if (isDriectUpdate) {
			if (this.isSelect == isSelect) return;
			this.isSelect = isSelect;
		} else {
			if (this.isRemovableTabId) {
				if (!this.isSelect && this.isSelect == isSelect) {
					return;
				} else if (!this.isSelect && this.isSelect != isSelect) {
					this.isSelect = isSelect;
				} else if (this.isSelect && this.isSelect == isSelect) {
					this.isSelect = false;
				} else if (this.isSelect && this.isSelect != isSelect) {
					this.isSelect = isSelect;
				}
			} else {
				if (this.isSelect == isSelect) return;
			}
		}
		this.updateSelectStateUI();
	}

	public updateSelectStateUI(): void {
		if (this.isSelect) {
			this.mSelectButton.renderOpacity = 1;
			if (this.isSupportColor) {
				Utils.setWidgetVisibility(this.mColorButton, mw.SlateVisibility.Visible);
			} else {
				Utils.setWidgetVisibility(this.mColorButton, mw.SlateVisibility.Collapsed);
			}
		} else {
			this.mSelectButton.renderOpacity = 0;
			Utils.setWidgetVisibility(this.mColorButton, mw.SlateVisibility.Collapsed);
		}
	}
}
