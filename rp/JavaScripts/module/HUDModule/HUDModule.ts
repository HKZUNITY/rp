import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import { IMusicElement } from "../../configs/Music";
import GlobalData from "../../GlobalData";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import HUDItem_Generate from "../../ui-generate/module/HUDModule/HUDItem_generate";
import HUDPanel_Generate from "../../ui-generate/module/HUDModule/HUDPanel_generate";
import SavePanel_Generate from "../../ui-generate/module/ShareModule/SavePanel_generate";
import SharePanel_Generate from "../../ui-generate/module/ShareModule/SharePanel_generate";
import AdPanel from "../AdModule/ui/AdPanel";
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
        Utils.setWidgetVisibility(this.mMusicCanvas, mw.SlateVisibility.Collapsed);

        this.mOpenSignInTextBlock.text = GameConfig.Language.Text_SignIn_10.Value;
        this.mOpenClothTextBlock.text = GameConfig.Language.Text_OpenClothTextBlock.Value;
        this.mOpenMallTextBlock.text = GameConfig.Language.Text_OpenMallTextBlock.Value;
        this.mFreeTextBlock.text = StringUtil.format(GameConfig.Language.Text_FreeChangeOfClothes2.Value, GlobalData.freeTime);
        Utils.setWidgetVisibility(this.mFreeTextBlock, mw.SlateVisibility.Collapsed);
        if (GlobalData.languageId == 0) {
            Utils.setWidgetVisibility(this.mOpenClothImage, mw.SlateVisibility.Collapsed);
        }
    }

    public updateFreeTime(): void {
        console.error(`wfz - freeTime:${GlobalData.freeTime}`);
        if (GlobalData.freeTime <= 0 || GlobalData.freeTime >= 999) {
            Utils.setWidgetVisibility(this.mFreeTextBlock, mw.SlateVisibility.Collapsed);
        } else {
            Utils.setWidgetVisibility(this.mFreeTextBlock, mw.SlateVisibility.SelfHitTestInvisible);
            this.mFreeTextBlock.text = StringUtil.format(GameConfig.Language.Text_FreeChangeOfClothes2.Value, GlobalData.freeTime);
        }
    }

    private bindButton(): void {
        this.mJumpButton.onClicked.add(this.addJumpButton.bind(this));
        this.mCrouchButton.onClicked.add(this.addCrouchButton.bind(this));
        this.mExitButton.onClicked.add(this.addFlyButton.bind(this));
        this.mActionButton.onClicked.add(this.addActionButton.bind(this));
        this.mBagButton.onClicked.add(this.addBagButton.bind(this));
        this.mShowHideGoodsButton.onClicked.add(this.showHideGoodsButton.bind(this));
        this.mDeleteAllGoodsButton.onClicked.add(this.addDeleteAllGoods.bind(this));
        this.mOpenSetButton.onClicked.add(this.addSetButton.bind(this));
        this.mOpenClothButton.onClicked.add(this.addClothButton.bind(this));
        this.mOpenRankButton.onClicked.add(this.addOpenRankButton.bind(this));
        this.mOpenShareButton.onClicked.add(this.addOpenShareButton.bind(this));
        this.mOpenSignInButton.onClicked.add(this.addOpenSignInButton.bind(this));
        this.mOpenMusicButton.onClicked.add(this.addOpenMusicButton.bind(this));
        this.mOnOffMusicBtn.onClicked.add(this.addOnOffMusicButton.bind(this));
        this.mLeftMusicBtn.onClicked.add(this.addPreMusicButton.bind(this));
        this.mRightMusicBtn.onClicked.add(this.addNextMusicButton.bind(this));
        this.mCloseMusicBtn.onClicked.add(this.addCloseMusicButton.bind(this));
        this.mOpenMallButton.onClicked.add(this.addOpenMallButton.bind(this));
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

    private addOpenRankButton(): void {
        this.getHUDModuleC.onOpenRankAction.call();
    }

    private addOpenShareButton(): void {
        this.getHUDModuleC.onOpenShareAction.call(1);
    }

    private addOpenSignInButton(): void {
        this.getHUDModuleC.onOpenSignInAction.call();
    }

    private addOpenMusicButton(): void {
        Utils.setWidgetVisibility(this.mMusicCanvas, mw.SlateVisibility.SelfHitTestInvisible);
    }

    private isOpenBGM: boolean = true;
    private addOnOffMusicButton(): void {
        this.isOpenBGM = !this.isOpenBGM;
        this.getHUDModuleC.onOnOffMusicAction.call(this.isOpenBGM);
        let offOnIcon = (this.isOpenBGM) ? GlobalData.onMusicIconGuid : GlobalData.offMusicIconGuid;
        this.mOnOffMusicBtn.normalImageGuid = offOnIcon;
        this.mOnOffMusicBtn.pressedImageGuid = offOnIcon;
        this.mOnOffMusicBtn.disableImageGuid = offOnIcon;
    }

    private addNextMusicButton(): void {
        this.getHUDModuleC.onSwitchBgmAction.call(1);
    }

    private addPreMusicButton(): void {
        this.getHUDModuleC.onSwitchBgmAction.call(-1);
    }

    private addCloseMusicButton(): void {
        Utils.setWidgetVisibility(this.mMusicCanvas, mw.SlateVisibility.Collapsed);
    }

    private addOpenMallButton(): void {
        this.getHUDModuleC.onOpenMallAction.call();
    }

    private showHideGoodsButton(): void {
        this.constollerGoodsContentCanvasVisible(!this.mGoodsContentCanvas.visible, false);
    }

    private addDeleteAllGoods(): void {
        this.constollerGoodsContentCanvasVisible(false, true);
        this.getHUDModuleC.deleteAllGoodsAction.call();
    }

    private addSetButton(): void {
        this.getHUDModuleC.onOpenSetAction.call();
    }

    private addClothButton(): void {
        this.getHUDModuleC.onOpenClothAction.call();
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

    protected onShow(...params: any[]): void {
        this.mVirtualJoystickPanel.resetJoyStick();
    }

    protected onHide(): void {
        this.mVirtualJoystickPanel.resetJoyStick();
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

    private sharePanel: SharePanel = null;
    private get getSharePanel(): SharePanel {
        if (!this.sharePanel) {
            this.sharePanel = UIService.getUI(SharePanel);
        }
        return this.sharePanel;
    }

    private savePanel: SavePanel = null;
    private get getSavePanel(): SavePanel {
        if (!this.savePanel) {
            this.savePanel = UIService.getUI(SavePanel);
        }
        return this.savePanel;
    }

    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (!this.adPanel) {
            this.adPanel = UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }

    public onJumpAction: Action = new Action();
    public onCrouchAction: Action = new Action();
    public onExitAction: Action = new Action();
    public onActionButton: Action = new Action();
    public onBagButton: Action = new Action();
    public clickGoodItemAction: Action1<number> = new Action1<number>();
    public clickCloseGoodItemAction: Action1<number> = new Action1<number>();
    public deleteAllGoodsAction: Action = new Action();
    public onOpenSetAction: Action = new Action();
    public onOpenClothAction: Action = new Action();
    public onOpenRankAction: Action = new Action();
    public onOpenShareAction: Action1<number> = new Action1<number>();
    public onUseShareAction: Action2<string, number> = new Action2<string, number>();
    public onOpenSignInAction: Action = new Action();
    public onFreeTryOnAction: Action = new Action();

    /**背景音乐按钮事件（true-打开|false-关闭） */
    public onOnOffMusicAction: Action1<boolean> = new Action1<boolean>();
    /**切换背景音乐（-1前一首|1下一首） */
    public onSwitchBgmAction: Action1<number> = new Action1<number>();
    public onOpenMallAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initUI();
        this.bindAction();
    }

    private freeNpc: mw.Character = null;
    protected onEnterScene(sceneType: number): void {
        this.getHUDPanel.show();
        this.playBGMusic(0);
        this.registerGlobalClickSound();
        AvatarEditorService.setAvatarEditorButtonVisible(true);// 设置“去装扮”按钮隐藏
        this.initFreeNpc();
    }

    public net_syncFreeTime(freeTime: number): void {
        if (!isNaN(freeTime) && freeTime > 0) GlobalData.freeTime = freeTime;
        if (mw.UIService.getUI(HUDPanel, false)?.visible) {
            this.getHUDPanel.updateFreeTime();
        } else {
            TimeUtil.delaySecond(10).then(() => {
                this.getHUDPanel.updateFreeTime();
            });
        }
    }

    private async initFreeNpc(): Promise<void> {
        // if (!this.freeNpc) this.freeNpc = await mw.GameObject.asyncFindGameObjectById("3CD2E610") as mw.Character;
    }

    private initUI(): void {
    }

    private bindAction(): void {
        this.onJumpAction.add(this.onJumpActionHandler.bind(this));
        this.onCrouchAction.add(this.onCrouchActionHandler.bind(this));
        this.onActionButton.add(this.onActionButtonHandler.bind(this));
        this.onBagButton.add(this.onBagButtonHandler.bind(this));
        this.onOpenSetAction.add(this.onOpenSetActionHandler.bind(this));
        this.onOpenClothAction.add(this.onOpenClothActionHandler.bind(this));
        this.onOpenShareAction.add(this.onOpenShareActionHandler.bind(this));
        this.onUseShareAction.add(this.onUseShareActionHandler.bind(this));
        this.onFreeTryOnAction.add(this.addFreeTryOnAction.bind(this));
        mw.AvatarEditorService.avatarServiceDelegate.add(this.addAvatarServiceDelegate.bind(this));
        Event.addLocalListener(`OnOffMainUI`, this.addOnOffMainUI.bind(this));
        // this.localPlayer.character.onDescriptionChange.add(this.addDescriptionChange.bind(this));
        this.onOnOffMusicAction.add(this.addOnOffMusicAction.bind(this));
        this.onSwitchBgmAction.add(this.playBGMusic.bind(this));
    }

    private addOnOffMusicAction(isOpenBGM: boolean): void {
        isOpenBGM ? this.playBGMusic(0) : SoundService.stopBGM();
    }

    /**当前播放的背景音乐 */
    private currentBgmIndex: number = 1;
    /**背景音乐 */
    private bgmMusics: IMusicElement[] = [];
    /**播放背景音乐 */
    private playBGMusic(bgmIndex: number): void {
        if (!this.bgmMusics || this.bgmMusics?.length == 0) this.bgmMusics = GameConfig.Music.getAllElement();

        this.currentBgmIndex = this.currentBgmIndex + bgmIndex;
        if (this.currentBgmIndex > this.bgmMusics.length) {
            this.currentBgmIndex = 1;
        } else if (this.currentBgmIndex < 1) {
            this.currentBgmIndex = this.bgmMusics.length;
        }
        let bgmId = this.bgmMusics[this.currentBgmIndex - 1].Guid;
        SoundService.playBGM(bgmId);
        this.getHUDPanel.mMusicText.text = this.bgmMusics[this.currentBgmIndex - 1].Annotation;
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

    private onOpenSetActionHandler(): void { }

    private onOpenClothActionHandler(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await AvatarEditorService.asyncOpenAvatarEditorModule();
        });
    }

    private onOpenShareActionHandler(openType: number): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            this.getSharePanel.show();
            let sharedId = await Utils.createSharedId(this.localPlayer.character);
            this.getSharePanel.showPanel(sharedId, openType);
        });
    }

    private onUseShareActionHandler(shareId: string, openType: number): void {
        if (openType == 1) {
            // if (GlobalData.isOpenIAA) {
            //     this.getAdPanel.showRewardAd(() => {
            //         this.useShareId(shareId);
            //     }, GameConfig.Language.Text_TryItOnForFree.Value
            //         , GameConfig.Language.Text_Cancel.Value
            //         , GameConfig.Language.Text_FreeTryOn.Value);
            // } else {
            // }
            this.useShareId(shareId);
        } else if (openType == 2) {
            // if (GlobalData.isOpenIAA) {
            //     this.getAdPanel.showRewardAd(() => {
            //         AvatarEditorService.asyncCloseAvatarEditorModule().then(() => {
            //             ExecutorManager.instance.pushAsyncExecutor(async () => {
            //                 await TimeUtil.delaySecond(5);
            //                 await this.useDescription();
            //             });
            //         });
            //     }, GameConfig.Language.Text_TryItOnForFree.Value
            //         , GameConfig.Language.Text_Cancel.Value
            //         , GameConfig.Language.Text_FreeTryOn.Value
            //         , 1);
            // } else {
            // }
            AvatarEditorService.asyncCloseAvatarEditorModule().then(() => {
                ExecutorManager.instance.pushAsyncExecutor(async () => {
                    await TimeUtil.delaySecond(5);
                    await this.useDescription();
                });
            });
        }
    }

    private changeDescription: mw.CharacterDescription = null;
    private addDescriptionChange(): void {
        this.localPlayer.character.asyncReady().then(() => {
            console.error(`变化`);
            this.changeDescription = this.localPlayer.character.getDescription();
            if (this.isOpenAvatar) {
                if (!UIService.getUI(SavePanel, false)?.visible) this.getSavePanel.show();
            }
        });
    }

    private useShareId(shareId: string): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let isSuccess = await Utils.applySharedId(this.localPlayer.character, shareId);
            if (isSuccess) {
                Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
            } else {
                Notice.showDownNotice(GameConfig.Language.Text_InvalidID.Value);
            }
        });
    }

    private addFreeTryOnAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.initFreeNpc();
            Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
            this.freeNpc.setDescription(this.localPlayer.character.getDescription());
            await this.freeNpc.asyncReady();
            await TimeUtil.delaySecond(1);
            await AvatarEditorService.asyncCloseAvatarEditorModule();
            TimeUtil.delaySecond(2).then(() => {
                Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
                TimeUtil.delaySecond(2).then(() => {
                    Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
                });
            });
            Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes1.Value);
            await TimeUtil.delaySecond(5);
            await this.useDescription();
        });
    }

    private async useDescription(): Promise<void> {
        await this.localPlayer.character.asyncReady();
        this.localPlayer.character.setDescription(this.freeNpc.getDescription());
        await this.localPlayer.character.asyncReady();
        this.localPlayer.character.syncDescription();
        Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
        this.resetDecription();
    }

    private resetDecriptionTimeoutId: any = null;
    private resetDecription(): void {
        this.clearResetDecriptionTimeoutId();
        this.resetDecriptionTimeoutId = setTimeout(() => {
            AccountService.downloadData(this.localPlayer.character, (success: boolean) => {
                if (!success) return;
                Notice.showDownNotice(GameConfig.Language.Text_FreeChangeOfClothes3.Value);
            });
        }, GlobalData.freeTime * 60 * 1000);
    }

    private clearResetDecriptionTimeoutId(): void {
        if (this.resetDecriptionTimeoutId) {
            clearTimeout(this.resetDecriptionTimeoutId);
            this.resetDecriptionTimeoutId = null;
        }
    }

    private isOpenAvatar: boolean = false;
    private addAvatarServiceDelegate(eventName: string, ...params: unknown[]): void {
        console.error(`eventName: ${eventName}`);
        switch (eventName) {
            case "AE_OnQuit":
                Event.dispatchToLocal(`OnOffMainUI`, true);
                // Player.localPlayer.character.setStateEnabled(CharacterStateType.Running, true);
                if (UIService.getUI(SavePanel, false)?.visible) this.getSavePanel.hide();
                this.isOpenAvatar = false;
                break;
            case "AE_OnOpen":
                Event.dispatchToLocal(`OnOffMainUI`, false);
                this.isOpenAvatar = true;
                // if (!UIService.getUI(SavePanel, false)?.visible) this.getSavePanel.show();
                // Player.localPlayer.character.setStateEnabled(CharacterStateType.Running, false);
                break;
        }
    }

    private addOnOffMainUI(isShow: boolean): void {
        console.error(`isShow: ${isShow}`);
        isShow ? this.getHUDPanel.show() : this.getHUDPanel.hide();
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

    /**全局UI点击音效唯一标识 */
    private uiClickSoundId: string = null;
    /**注册全局点击音效 */
    private registerGlobalClickSound(): void {
        /**全局UI点击音效 */
        Event.addLocalListener("PlayButtonClick", (v: string) => {
            // if (v == "mJumpButton") return;
            if (this.uiClickSoundId) {
                SoundService.stopSound(this.uiClickSoundId);
                this.uiClickSoundId = null;
            }
            this.uiClickSoundId = SoundService.playSound(`12723`);
        });
    }
}


export class HUDModuleS extends ModuleS<HUDModuleC, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    protected onPlayerEnterGame(player: mw.Player): void {
        // this.initFreeTime(player);
    }

    private initFreeTime(player: mw.Player): void {
        Utils.getCustomdata(`FreeTime`).then((freeTime: number) => {
            this.getClient(player).net_syncFreeTime(freeTime);
        });
    }
}

export class SharePanel extends SharePanel_Generate {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    protected onStart(): void {
        this.initUI();
        this.bindButton();
    }

    private initUI(): void {
        this.mMyselfTipsTextBlock.text = GameConfig.Language.Text_MyCharacterId.Value;
        this.mOtherTipsTextBlock.text = GameConfig.Language.Text_TryOnYourFriendAvatarForFree.Value;
        this.mInputBox.text = "";
        this.mInputBox.hintString = GameConfig.Language.Text_PleaseEnter.Value;
        this.mCancelTextBlock.text = GameConfig.Language.Text_Cancel.Value;
        this.mUseTextBlock.text = GameConfig.Language.Text_FreeTryOn.Value;
        this.mAdsButton.text = GameConfig.Language.Text_FreeTryOn.Value;

        Utils.setWidgetVisibility(this.mAdsButton, mw.SlateVisibility.Collapsed);
    }

    private bindButton(): void {
        this.mCopyButton.onClicked.add(this.addCopyButton.bind(this));
        this.mCancelButton.onClicked.add(this.addCancelButton.bind(this));
        this.mUseButton.onClicked.add(this.addUseButton.bind(this));
    }

    private addCopyButton(): void {
        let copyText = this.mMyselfTextBlock.text;
        if (!copyText || copyText == "" || copyText.length == 0) return;
        StringUtil.clipboardCopy(copyText);
        Notice.showDownNotice(GameConfig.Language.Text_CopySuccessfully.Value);
    }

    private addCancelButton(): void {
        this.hide();
    }

    private addUseButton(): void {
        if (this.openType == 1) {
            let shareId = this.mInputBox.text;
            if (!shareId || shareId == "" || shareId.length == 0) return;
            this.getHUDModuleC.onUseShareAction.call(shareId, this.openType);
        } else if (this.openType == 2) {
            this.getHUDModuleC.onUseShareAction.call(null, this.openType);
        }
        this.hide();
    }

    private openType: number = 1;
    public showPanel(shareId: string, openType: number): void {
        this.openType = openType;
        this.mMyselfTextBlock.text = shareId;
        if (openType == 1) {
            Utils.setWidgetVisibility(this.mInputBgImage, mw.SlateVisibility.SelfHitTestInvisible);
            this.mOtherTipsTextBlock.text = GameConfig.Language.Text_TryOnYourFriendAvatarForFree.Value;
            setTimeout(() => {
                this.mMainImage.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mMainImage.size.x / 2, this.rootCanvas.size.y / 2 - this.mMainImage.size.y / 2);
            }, 1);
        } else if (openType == 2) {
            Utils.setWidgetVisibility(this.mInputBgImage, mw.SlateVisibility.Collapsed);
            this.mOtherTipsTextBlock.text = GameConfig.Language.Text_CopyTheCharacterIDShareFriendsTryOn.Value;
            setTimeout(() => {
                this.mMainImage.position = new mw.Vector2(this.rootCanvas.size.x / 2 - this.mMainImage.size.x, this.rootCanvas.size.y / 2 - this.mMainImage.size.y / 2);
            }, 1);
        }
    }

    protected onShow(...params: any[]): void {
        this.mMyselfTextBlock.text = GameConfig.Language.Text_Loading.Value;
        this.mInputBox.text = ``;
    }
}

export class SavePanel extends SavePanel_Generate {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    protected onStart(): void {
        this.initUI();
        this.bindButton();
    }

    private initUI(): void {
        this.mSaveTipsTextBlock.text = GameConfig.Language.Text_SaveImagesForFree.Value;
    }

    private bindButton(): void {
        this.mSaveButton.onClicked.add(this.addSaveButton.bind(this));
    }

    private addSaveButton(): void {
        this.getHUDModuleC.onFreeTryOnAction.call();
    }
}