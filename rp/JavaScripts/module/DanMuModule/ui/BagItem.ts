import { GameConfig } from "../../../configs/GameConfig";
import Utils from "../../../tools/Utils";
import BagItem_Generate from "../../../ui-generate/module/DanMuModule/BagItem_generate";
import { InteractionModuleC } from "../../InteractionModule/InteractionModule";
import DanMuModuleC from "../DanMuModuleC";

export default class BagItem extends BagItem_Generate {
	private danMuModuleC: DanMuModuleC = null;
	private get getDanMuModuleC(): DanMuModuleC {
		if (!this.danMuModuleC) {
			this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
		}
		return this.danMuModuleC;
	}
	private interactionModuleC: InteractionModuleC = null;
	private get getInteractionModuleC(): InteractionModuleC {
		if (!this.interactionModuleC) {
			this.interactionModuleC = ModuleService.getModule(InteractionModuleC);
		}
		return this.interactionModuleC;
	}

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerMiddle;
		this.bindButton();
	}

	private bindButton(): void {
		this.mClickButton.onClicked.add(this.addClickButton.bind(this));
	}

	private addClickButton(): void {
		if (this.isHas) {
			this.getDanMuModuleC.onClickBagItemAction.call(this.bagId);
		} else {
			this.getInteractionModuleC.onClickBagItemAction.call(this.bagId);
		}
	}

	private bagId: number = 0;
	private isHas: boolean = false;
	public setDatas(bagId: number, isHas: boolean): void {
		this.bagId = bagId;
		let actionPropElement = GameConfig.ActionProp.getElement(this.bagId);
		if (actionPropElement.VehiclesIcon) {
			this.mIconImage.imageGuid = actionPropElement.VehiclesIcon;
		} else if (actionPropElement.Icon) {
			Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.Icon);
		} else if (actionPropElement.AssetId) {
			Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.AssetId);
		}
		this.isHas = isHas;
		this.updateState();
	}

	private updateState(): void {
		if (this.isHas) {
			Utils.setWidgetVisibility(this.mLockImage, mw.SlateVisibility.Collapsed);
			this.mIconImage.setImageColorByHex("FFFFFFFF");
		} else {
			Utils.setWidgetVisibility(this.mLockImage, mw.SlateVisibility.SelfHitTestInvisible);
			this.mIconImage.setImageColorByHex("646464FF");
		}
	}
}
