import { GameConfig } from "../../configs/GameConfig";
import Utils from "../../tools/Utils";
import HUDItem_Generate from "../../ui-generate/module/HUDModule/HUDItem_generate";
import HUDPanel_Generate from "../../ui-generate/module/HUDModule/HUDPanel_generate";
import DanMuModuleC from "../DanMuModule/DanMuModuleC";

export class HUDItem extends HUDItem_Generate {
    private hudPanel: HUDPanel = null;
    private get getHUDPanel(): HUDPanel {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel;
    }
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    protected onStart(): void {
        this.initUI();
        this.bindButton();
    }

    private initUI(): void {
        this.useState(false);
    }

    private bindButton(): void {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
    }

    private addClickButton(): void {
        let nextBagId = GameConfig.ActionProp.getElement(this.bagId).NextId;
        if (!nextBagId || nextBagId <= 0) return;
        this.getHUDModuleC.clickGoodItemAction.call(this.bagId);
    }

    private addCloseButton(): void {
        this.getHUDModuleC.clickCloseGoodItemAction.call(this.bagId);
    }

    private bagId: number = 0;
    private isUse: boolean = false;
    public setDatas(bagId: number): void {
        this.bagId = bagId;
        let actionPropElement = GameConfig.ActionProp.getElement(this.bagId);
        if (actionPropElement.Tab == 2 || actionPropElement.Tab == 6) {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
                this.useState(false);
            } else {
                this.useState(true);
            }
        } else {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
                this.useState(true);
            } else {
                this.useState(false);
            }
        }
        if (actionPropElement.VehiclesIcon) {
            this.mIconImage.imageGuid = actionPropElement.VehiclesIcon;
        } else if (actionPropElement.Icon) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.Icon);
        } else if (actionPropElement.AssetId) {
            Utils.setImageByAssetIconData(this.mIconImage, actionPropElement.AssetId);
        } else if (bagId == actionPropElement.NextId) {
            let nextActionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId - 1);
            if (nextActionPropElement.VehiclesIcon) {
                this.mIconImage.imageGuid = nextActionPropElement.VehiclesIcon;
            } else if (nextActionPropElement.Icon) {
                Utils.setImageByAssetIconData(this.mIconImage, nextActionPropElement.Icon);
            } else if (nextActionPropElement.AssetId) {
                Utils.setImageByAssetIconData(this.mIconImage, nextActionPropElement.AssetId);
            }
        }
    }

    public useState(isUse: boolean): void {
        this.isUse = isUse;
        Utils.setWidgetVisibility(this.mSelectImage, this.isUse ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }
}

export class HUDPanel extends HUDPanel_Generate {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    protected onStart(): void {
        this.initUI();
        this.bindButton();
    }

    private initUI(): void {
        this.controllerExitUIVisible(false);
        this.controllerBagUIVisible(false);
        this.controllerActionUIVisible(false);
        this.constollerGoodsCanvasVisible(false);
    }

    private bindButton(): void {
        this.mJumpButton.onClicked.add(this.addJumpButton.bind(this));
        this.mCrouchButton.onClicked.add(this.addCrouchButton.bind(this));
        this.mExitButton.onClicked.add(this.addFlyButton.bind(this));
        this.mActionButton.onClicked.add(this.addActionButton.bind(this));
        this.mBagButton.onClicked.add(this.addBagButton.bind(this));
        this.mShowHideGoodsButton.onClicked.add(this.showHideGoodsButton.bind(this));
        this.mDeleteAllGoodsButton.onClicked.add(this.addDeleteAllGoods.bind(this));
    }

    private addJumpButton(): void {
        this.getHUDModuleC.onJumpAction.call();
    }

    private addCrouchButton(): void {
        this.getHUDModuleC.onCrouchAction.call();
    }

    private addFlyButton(): void {
        this.getHUDModuleC.onExitAction.call();
    }

    private addActionButton(): void {
        this.getHUDModuleC.onActionButton.call();
    }

    private addBagButton(): void {
        this.getHUDModuleC.onBagButton.call();
    }

    private showHideGoodsButton(): void {
        this.constollerGoodsContentCanvasVisible(!this.mGoodsContentCanvas.visible, false);
    }

    private addDeleteAllGoods(): void {
        this.constollerGoodsContentCanvasVisible(false, true);
        this.getHUDModuleC.deleteAllGoodsAction.call();
    }

    public controllerBagUIVisible(isVisible: boolean): void {
        Utils.setWidgetVisibility(this.mBagBgImage, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }

    public controllerActionUIVisible(isVisible: boolean): void {
        Utils.setWidgetVisibility(this.mActionBgImage, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }

    public controllerExitUIVisible(isVisible: boolean): void {
        Utils.setWidgetVisibility(this.mExitBgImage, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }

    public updateBagIcon(bagId: number): void {
        if (bagId == 0) {
            this.controllerBagUIVisible(false);
        } else {
            this.controllerBagUIVisible(true);
            let bagIcon = GameConfig.ActionProp.getElement(bagId).ButtonIconId;
            this.mBagButton.normalImageGuid = bagIcon;
            this.mBagButton.pressedImageGuid = bagIcon;
            this.mBagButton.disableImageGuid = bagIcon;
        }
    }

    public constollerGoodsCanvasVisible(isVisible: boolean): void {
        Utils.setWidgetVisibility(this.mGoodsCanvas, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }

    public constollerGoodsContentCanvasVisible(isVisible: boolean, isParent: boolean): void {
        if (isParent) this.constollerGoodsCanvasVisible(isVisible);
        Utils.setWidgetVisibility(this.mGoodsContentCanvas, isVisible ? mw.SlateVisibility.SelfHitTestInvisible : mw.SlateVisibility.Collapsed);
    }

    private hudItems: HUDItem[] = [];
    public updateGoodsListCanvas(bagIds: number[]): void {
        if (this.hudItems.length > bagIds.length) {
            for (let i = 0; i < bagIds.length; ++i) {
                this.hudItems[i].setDatas(bagIds[i]);
                Utils.setWidgetVisibility(this.hudItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = bagIds.length; i < this.hudItems.length; ++i) {
                Utils.setWidgetVisibility(this.hudItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        } else {
            for (let i = 0; i < this.hudItems.length; ++i) {
                this.hudItems[i].setDatas(bagIds[i]);
                Utils.setWidgetVisibility(this.hudItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.hudItems.length; i < bagIds.length; ++i) {
                let hudItem = UIService.create(HUDItem);
                this.mGoodsListCanvas.addChild(hudItem.uiObject);
                hudItem.setDatas(bagIds[i]);
                this.hudItems.push(hudItem);
            }
        }
        this.constollerGoodsContentCanvasVisible(bagIds.length > 0, true);
    }
}

export class HUDModuleC extends ModuleC<HUDModuleS, null> {
    private hudPanel: HUDPanel = null;
    private get getHUDPanel(): HUDPanel {
        if (!this.hudPanel) {
            this.hudPanel = UIService.getUI(HUDPanel);
        }
        return this.hudPanel
    }
    private danMuModuleC: DanMuModuleC = null;
    private get getDanMuModuleC(): DanMuModuleC {
        if (!this.danMuModuleC) {
            this.danMuModuleC = ModuleService.getModule(DanMuModuleC);
        }
        return this.danMuModuleC;
    }

    public onJumpAction: Action = new Action();
    public onCrouchAction: Action = new Action();
    public onExitAction: Action = new Action();
    public onActionButton: Action = new Action();
    public onBagButton: Action = new Action();
    public clickGoodItemAction: Action1<number> = new Action1<number>();
    public clickCloseGoodItemAction: Action1<number> = new Action1<number>();
    public deleteAllGoodsAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initUI();
        this.bindAction();
    }

    protected onEnterScene(sceneType: number): void {
        this.getHUDPanel.show();
    }

    private initUI(): void {
    }

    private bindAction(): void {
        this.onJumpAction.add(this.onJumpActionHandler.bind(this));
        this.onCrouchAction.add(this.onCrouchActionHandler.bind(this));
        this.onActionButton.add(this.onActionButtonHandler.bind(this));
        this.onBagButton.add(this.onBagButtonHandler.bind(this));
    }

    private onJumpActionHandler(): void {
        if (this.localPlayer.character.getCurrentState() != mw.CharacterStateType.Jumping) {
            this.localPlayer.character.changeState(mw.CharacterStateType.Jumping);
        }
    }

    private onCrouchActionHandler(): void {
        if (this.localPlayer.character.getCurrentState() == mw.CharacterStateType.Running) {
            this.localPlayer.character.changeState(mw.CharacterStateType.Crouching);
        } else if (this.localPlayer.character.getCurrentState() == mw.CharacterStateType.Crouching) {
            this.localPlayer.character.changeState(mw.CharacterStateType.Running);
        }
    }

    private onActionButtonHandler(): void {
        this.getDanMuModuleC.onStopActionButton.call();
    }

    private onBagButtonHandler(): void {
        this.getDanMuModuleC.onNextBagAction.call();
    }

    public controllerBagUIVisible(isVisible: boolean): void {
        this.getHUDPanel.controllerBagUIVisible(isVisible);
    }

    public controllerActionUIVisible(isVisible: boolean): void {
        this.getHUDPanel.controllerActionUIVisible(isVisible);
    }

    public controllerExitUIVisible(isVisible: boolean): void {
        this.getHUDPanel.controllerExitUIVisible(isVisible);
    }

    public updateBagIcon(bagId: number): void {
        this.getHUDPanel.updateBagIcon(bagId);
    }

    public updateGoodsListCanvas(bagIds: number[]): void {
        this.getHUDPanel.updateGoodsListCanvas(bagIds);
    }

    public action(bagId: number): void {
        this.getDanMuModuleC.onClickBagItemAction.call(bagId);
    }
}


export class HUDModuleS extends ModuleS<HUDModuleC, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }


}