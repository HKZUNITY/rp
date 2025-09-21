import WishItem_Generate from "../../../ui-generate/module/WishModule/WishItem_generate";
import { WishDataV0 } from "../WishData";
import WishModuleC from "../WishModuleC";
import WishTools from "../WishTools";

export default class WishItem extends WishItem_Generate {
	private wishModuleC: WishModuleC = null;
	private get getWishModuleC(): WishModuleC {
		if (!this.wishModuleC) {
			this.wishModuleC = ModuleService.getModule(WishModuleC);
		}
		return this.wishModuleC;
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
		this.getWishModuleC.onSelectItemAction.add(this.addSelectItemAction.bind(this));
	}

	private addItemButton(): void {
		this.getWishModuleC.onSelectItemAction.call(this.wishDataV0);
	}

	private wishDataV0: WishDataV0 = null;
	public initItem(wishDataV0: WishDataV0): void {
		this.wishDataV0 = wishDataV0;

		let icon = wishDataV0.iconGuid;
		if (WishTools.pendantItemTypes.includes(wishDataV0.itemType)) {
			this.mIconImage.imageInfo.setByAssetIcon(wishDataV0.prefabGuid, mw.AssetIconSize.Icon_128px);
		} else {
			this.mIconImage.imageGuid = icon;
		}

		this.mPriceTextBlock.text = wishDataV0.price.toString();

		this.updateSelectState(false);
	}

	private addSelectItemAction(wishDataV0: WishDataV0): void {
		this.updateSelectState(this.wishDataV0.itemId == wishDataV0.itemId);
	}

	private isSelect: boolean = false;
	public updateSelectState(isSelect: boolean): void {
		if (this.isSelect == isSelect) return;
		this.isSelect = isSelect;
		this.updateSelectStateUI();
	}

	public updateSelectStateUI(): void {
		if (this.isSelect) {
			this.mSelectButton.renderOpacity = 1;
		} else {
			this.mSelectButton.renderOpacity = 0;
		}
	}
}
