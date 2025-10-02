import GetWishPanel_Generate from "../../../ui-generate/module/WishModule/GetWishPanel_generate";
import { HUDModuleC } from "../../HUDModule/HUDModule";
import { WishDataV0 } from "../WishData";
import WishTools from "../WishTools";

export default class GetWishPanel extends GetWishPanel_Generate {
	private hudModuleC: HUDModuleC = null;
	private get getHudModuleC(): HUDModuleC {
		if (!this.hudModuleC) {
			this.hudModuleC = ModuleService.getModule(HUDModuleC);
		}
		return this.hudModuleC;
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
	}

	private initUI(): void {
		this.mItemIconImage.imageGuid = `32115`;
	}

	private bindButton(): void {
		this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
		this.mOpenAvatarButton.onClicked.add(this.addOpenAvatarButton.bind(this));
	}

	private addOpenAvatarButton(): void {
		this.hide();
		this.getHudModuleC.onOpenClothAction.call();
	}

	private addCloseButton(): void {
		this.hide();
	}

	public showGetWishPanel(wishDataV0: WishDataV0): void {
		let icon = wishDataV0.iconGuid;
		if (WishTools.pendantItemTypes.includes(wishDataV0.itemType)) {
			this.mItemIconImage.imageInfo.setByAssetIcon(wishDataV0.prefabGuid, mw.AssetIconSize.Icon_128px);
		} else {
			this.mItemIconImage.imageGuid = icon;
		}
		this.mTipsTextBlock.text = `恭喜你获得玩家《${wishDataV0.nickName}》帮你购买的心愿单`;
		if (!this.visible) this.show();
	}
}
