import MallItem_Self_Generate from "../../../ui-generate/module/MallModule/MallItem_Self_generate";
import MallModuleC from "../MallModuleC";

export default class MallItem_Self extends MallItem_Self_Generate {
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
	}

	private initUI(): void {
		this.mIconImage.imageGuid = `32115`;
	}

	private bindButton(): void {
		this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
	}

	private addCloseButton(): void {
		this.getMallModuleC.onCloseMallItemSelfAction.call(this.assetType, this.assetId);
	}

	private assetType: number = 0;
	private assetId: string = null;
	public initItem(assetType: number, assetId: string): void {
		this.assetType = assetType;
		this.assetId = assetId;
		this.mIconImage.imageInfo.setByAssetIcon(assetId, mw.AssetIconSize.Icon_128px);
	}
}
