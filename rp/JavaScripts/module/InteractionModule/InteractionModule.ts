import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import { IInteractElement } from "../../configs/Interact";
import GlobalData from "../../GlobalData";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import GuidePanel_Generate from "../../ui-generate/module/InteractionModule/GuidePanel_generate";
import OnClickPanel_Generate from "../../ui-generate/module/InteractionModule/OnClickPanel_generate";
import AdPanel from "../AdModule/ui/AdPanel";
import { HUDModuleC } from "../HUDModule/HUDModule";
import RankModuleS from "../RankModule/RankModuleS";

export class GuidePanel extends GuidePanel_Generate {
    protected onStart(): void {
        this.initUI();
        this.binButtons();
    }

    private initUI(): void {
        if (GlobalData.languageId == 0) {
            Utils.setWidgetVisibility(this.mTitleImage_0, mw.SlateVisibility.SelfHitTestInvisible);
            Utils.setWidgetVisibility(this.mTitleImage_1, mw.SlateVisibility.Collapsed);

            Utils.setWidgetVisibility(this.mTitleImage_2, mw.SlateVisibility.SelfHitTestInvisible);
            Utils.setWidgetVisibility(this.mTitleImage_3, mw.SlateVisibility.Collapsed);
        } else {
            Utils.setWidgetVisibility(this.mTitleImage_0, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mTitleImage_1, mw.SlateVisibility.SelfHitTestInvisible);

            Utils.setWidgetVisibility(this.mTitleImage_2, mw.SlateVisibility.Collapsed);
            Utils.setWidgetVisibility(this.mTitleImage_3, mw.SlateVisibility.SelfHitTestInvisible);
        }
    }

    private binButtons(): void {
        this.mClickNextStepButton.onClicked.add(this.onClickNextStepButton.bind(this));
        this.mClickStartButton.onClicked.add(this.onClickStartButton.bind(this));
    }

    private onClickNextStepButton(): void {
        if (this.clickNextStepCallBack) this.clickNextStepCallBack();
        this.hide();
    }

    private onClickStartButton(): void {
        if (this.clickStartCallBack) this.clickStartCallBack();
        this.hide();
    }

    private clickNextStepCallBack: () => void = null;
    public showStepTips(bagId: number, clickCallBack: () => void, clickTextBlock: string): void {
        if (GameConfig.ActionProp.getElement(bagId).NextId == bagId) bagId -= 1;
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        if (!actionPropElement.AssetId) {
            bagId = actionPropElement.NextId;
        }
        this.setIcon(bagId);
        this.clickNextStepCallBack = clickCallBack;
        this.mClickNextStepTextBlock.text = clickTextBlock;

        Utils.setWidgetVisibility(this.mMainBgImage_0, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mMainBgImage_1, mw.SlateVisibility.Collapsed);
        this.show();
    }

    private setIcon(bagId: number): void {
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        if (actionPropElement.Tab == 2 || actionPropElement.Tab == 6) {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
            } else {
            }
        } else {
            if (!actionPropElement.AssetId || actionPropElement.AssetId == "") {
                actionPropElement = GameConfig.ActionProp.getElement(actionPropElement.NextId);
            } else {
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

    private clickStartCallBack: () => void = null;
    public showStartTips(clickStartCallBack: () => void, clickStartTextBlock: string, contentTextBlock: string): void {
        this.clickStartCallBack = clickStartCallBack;
        this.mClickStartTextBlock.text = clickStartTextBlock;
        this.mContentTextBlock.text = contentTextBlock;

        Utils.setWidgetVisibility(this.mMainBgImage_1, mw.SlateVisibility.SelfHitTestInvisible);
        Utils.setWidgetVisibility(this.mMainBgImage_0, mw.SlateVisibility.Collapsed);
        this.show();
    }
}

export class OnClickPanel extends OnClickPanel_Generate {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private interactionModuleC: InteractionModuleC = null;
    private get getInteractionModuleC(): InteractionModuleC {
        if (this.interactionModuleC == null) {
            this.interactionModuleC = ModuleService.getModule(InteractionModuleC);
        }
        return this.interactionModuleC;
    }

    private id: number = -1;
    private offset: mw.Vector = new mw.Vector(0, 0, 0);
    private obj: mw.GameObject = null;

    /** 
     * 构造UI文件成功后，在合适的时机最先初始化一次 
     */
    protected onStart() {
        //设置能否每帧触发onUpdate
        this.canUpdate = false;
        this.layer = mw.UILayerMiddle;

        this.initUI();
        this.bindButtons();
        this.registerActions();
    }

    private initUI(): void {
        // Utils.setWidgetVisibility(this.mBgImage, mw.SlateVisibility.Collapsed);
    }

    /**按钮绑定 */
    private bindButtons(): void {
        this.mClickBtn.onClicked.add(this.onClickButtons.bind(this));
    }

    /**注册事件 */
    private registerActions(): void {
        this.getHUDModuleC.onExitAction.add(this.onExitHandler.bind(this));
    }

    private onExitHandler(): void {
        // this.getInteractionModuleC.interact(false, this.id);
    }

    private onClickButtons(): void {
        if (!this.id) return;
        console.warn("OnClickPanel-this.id = " + this.id);
        this.canUpdate = false;
        this.hide();
        if (this.id <= 0) return;
        this.getInteractionModuleC.interact(true, this.id);
    }

    /**显示NPC按钮 */
    public showBtn(id: number, obj: mw.GameObject): void {
        this.id = id;
        this.canUpdate = true;
        this.obj = obj;
        let pos = InputUtil.projectWorldPositionToWidgetPosition(this.obj.worldTransform.position.add(this.offset), false).screenPosition;
        this.rootCanvas.position = pos.subtract(this.rootCanvas.size.multiply(0.5));
        this.rootCanvas.visibility = mw.SlateVisibility.SelfHitTestInvisible;
        this.show();
    }

    /**隐藏NPC按钮 */
    public hideBtn(): void {
        this.canUpdate = false;
        this.hide();
    }

    protected onShow(...params: any[]): void {
        console.error("[OnClickPanel-onShow]");
    }

    protected onUpdate(dt: number) {
        if (!this.obj) return;
        let pos: mw.Vector2 = mw.InputUtil.projectWorldPositionToWidgetPosition(this.obj.worldTransform.position.add(this.offset), false).screenPosition;
        this.rootCanvas.position = pos.subtract(this.rootCanvas.size.multiply(0.5));
    }
}

export class InteractionModuleC extends ModuleC<InteractionModuleS, InteractionData> {
    private onClickPanel: OnClickPanel = null;
    private get getOnClickPanel(): OnClickPanel {
        if (this.onClickPanel == null) {
            this.onClickPanel = mw.UIService.getUI(OnClickPanel);
        }
        return this.onClickPanel;
    }
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }
    private adPanel: AdPanel = null;
    private get getAdPanel(): AdPanel {
        if (this.adPanel == null) {
            this.adPanel = mw.UIService.getUI(AdPanel);
        }
        return this.adPanel;
    }
    public onClickBagItemAction: Action1<number> = new Action1<number>();

    private currentDescription: mw.CharacterDescription = null;
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindEvent();
    }

    protected onEnterScene(sceneType: number): void {
        this.initBagIds();
        this.initGuide();
        this.findTriggers();
    }

    private bindEvent(): void {
        this.onClickBagItemAction.add(this.addClickBagItemAction.bind(this));
    }

    private triggerLocMap: Map<number, mw.Vector> = new Map<number, mw.Vector>();
    private findTriggers(): void {
        GameConfig.Interact.getAllElement().forEach(async (value: IInteractElement) => {
            let triggerGuid = value.TriggerGuid;
            if (triggerGuid && triggerGuid.length > 0) {
                let trigger = await GameObject.asyncFindGameObjectById(triggerGuid) as mw.Trigger;
                await trigger.asyncReady();
                trigger.onEnter.add((char: mw.Character) => {
                    this.onEnterTrigger(char, value.ID, trigger);
                });
                trigger.onLeave.add((char: mw.Character) => {
                    this.onLeaveTrigger(char);
                });

                let bagId = value.BagId;
                this.triggerLocMap.set(bagId, trigger.worldTransform.position);
                // if (GameConfig.ActionProp.getElement(bagId).NextId == bagId) bagId -= 1;
                // let actionPropElement = GameConfig.ActionProp.getElement(bagId);
                // if (!actionPropElement.AssetId) {
                //     bagId = actionPropElement.NextId;
                // }

                if (value.ModelGuid_C && value.ModelGuid_C.length > 0) {
                    GameObject.asyncSpawn(value.ModelGuid_C).then((model: mw.GameObject) => {
                        model.worldTransform.position = trigger.worldTransform.position;
                        // model.worldTransform.rotation = trigger.worldTransform.rotation;
                        // model.worldTransform.scale = trigger.worldTransform.scale;
                    });
                }
            }
            let npcId = value.NpcId;
            if (npcId && npcId.length > 0) {
                let npc = await GameObject.asyncFindGameObjectById(npcId) as mw.Character;
                await npc.asyncReady();
                npc.complexMovementEnabled = false;
                npc.collisionWithOtherCharacterEnabled = false;
                let shareId = value.ShareId;
                if (shareId > 0) {
                    let shareIdStr = GameConfig.ShareId.getElement(shareId).ShareId;
                    if (shareIdStr && shareIdStr.length > 0) {
                        Utils.applySharedId(npc, shareIdStr);
                    }
                } else {
                    this.currentDescription = this.localPlayer.character.getDescription();
                    npc.setDescription(this.currentDescription);
                }
                let npcAnimationId = value.NpcAnimationId;
                if (npcAnimationId && npcAnimationId.length > 0) {
                    await Utils.asyncDownloadAsset(npcAnimationId);
                    npc.loadSubStance(npcAnimationId).play();
                    setTimeout(() => {
                        npc.localTransform.position = new mw.Vector(0, 0, npc.localTransform.position.z);
                    }, 1000);
                }
            }
            console.error(this.triggerLocMap.size);
        });
    }

    private onEnterTrigger(char: mw.Character, id: number, go: mw.GameObject): void {
        if (char != Player.localPlayer.character) return;
        this.getOnClickPanel.showBtn(id, go);
    }

    private onLeaveTrigger(char: mw.Character): void {
        if (char != Player.localPlayer.character) return;
        this.getOnClickPanel.hideBtn();
    }

    public interact(isInteract: boolean, id: number): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let interact = GameConfig.Interact.getElement(id);
            let bagId = interact.BagId;
            if (bagId && bagId > 0) {
                let modelGuid = interact.ModelGuid;
                if (modelGuid && modelGuid.length > 0) {
                    this.server.net_playInteract(bagId, modelGuid).then((interactCode: number) => {
                        if (interactCode == 0) {
                            Notice.showDownNotice(GameConfig.Language.Text_ThisItemIsInUse.Value);
                        }
                    });
                }

                if (GameConfig.ActionProp.getElement(bagId).NextId == bagId) bagId -= 1;
                this.getHUDModuleC.action(bagId);

                let actionPropElement = GameConfig.ActionProp.getElement(bagId);
                if (!actionPropElement.AssetId) {
                    bagId = actionPropElement.NextId;
                }

                this.setBagId(bagId);
            }
            let npcId = interact.NpcId;
            if (npcId && npcId.length > 0) {
                let shareId = interact.ShareId;
                if (shareId > 0) {
                    let shareIdStr = GameConfig.ShareId.getElement(shareId).ShareId;
                    if (shareIdStr && shareIdStr.length > 0) {
                        await Utils.applySharedId(this.localPlayer.character, shareIdStr);
                    }
                } else {
                    this.localPlayer.character.setDescription(this.currentDescription);
                    await this.localPlayer.character.asyncReady();
                    this.localPlayer.character.syncDescription();
                }
            }
        });
    }

    private addClickBagItemAction(bagId: number): void {
        if (this.bagIds.includes(bagId)) return;
        let nextId = GameConfig.ActionProp.getElement(bagId).NextId;
        if (nextId && nextId > 0) bagId = nextId;
        if (GlobalData.isOpenIAA) {
            this.getAdPanel.showRewardAd(() => {
                if (this.triggerLocMap.has(bagId)) {
                    let targetLoc = this.triggerLocMap.get(bagId);
                    Utils.startGuide(targetLoc, () => { });
                }
            }, GameConfig.Language.Text_ADGetTips.Value
                , GameConfig.Language.Text_Dont.Value
                , GameConfig.Language.Text_Free.Value);
        } else {
            if (this.triggerLocMap.has(bagId)) {
                let targetLoc = this.triggerLocMap.get(bagId);
                Utils.startGuide(targetLoc, () => { });
            }
        }
    }

    private initBagIds(): void {
        this.bagIds = this.data.bagIds;
    }

    private bagIds: number[] = [];
    public setBagId(bagId: number): void {
        if (this.bagIds.includes(bagId)) return;
        Notice.showDownNotice(GameConfig.Language.Text_ObtainedTips.Value);
        this.bagIds.push(bagId);
        this.server.net_setBagId(bagId);
    }

    public get getBagIds(): number[] {
        return this.bagIds;
    }

    private guidePanel: GuidePanel = null;
    private get getGuidePanel(): GuidePanel {
        if (this.guidePanel == null) {
            this.guidePanel = mw.UIService.getUI(GuidePanel);
        }
        return this.guidePanel;
    }
    private initGuide(): void {
        this.guideStep = this.data.guideStep;
        this.startGuide();
    }

    private guideStep: number = 0;
    public setGuideStep(addStep: number): void {
        this.guideStep += addStep;
        this.server.net_setGuideStep(addStep);
    }

    private guideBagIds: number[] = [60004, 20002, 10106, 30002];
    private startGuide(): void {
        if (!this.guideBagIds || this.guideBagIds.length == 0) return;
        if (this.guideStep >= this.guideBagIds.length - 1) return;
        this.getGuidePanel.showStartTips(() => {
            let bagId = this.guideBagIds[0];
            console.error(`bagId1:${bagId}`);
            if (!this.triggerLocMap.has(bagId)) {
                console.error(`bagId2:${bagId}`);
                return;
            }
            let targetLoc = this.triggerLocMap.get(bagId);
            console.error(`targetLoc:${targetLoc}`);
            Utils.startGuide(targetLoc, () => {
                this.setGuideStep(1);
                this.getGuidePanel.showStepTips(bagId, () => {
                    this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                    if (this.guideStep >= this.guideBagIds.length) return;
                    bagId = this.guideBagIds[1];
                    if (!this.triggerLocMap.has(bagId)) return;
                    targetLoc = this.triggerLocMap.get(bagId);
                    Utils.startGuide(targetLoc, () => {
                        this.setGuideStep(1);
                        this.getGuidePanel.showStepTips(bagId, () => {
                            this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                            if (this.guideStep >= this.guideBagIds.length) return;
                            bagId = this.guideBagIds[2];
                            if (!this.triggerLocMap.has(bagId)) return;
                            targetLoc = this.triggerLocMap.get(bagId);
                            Utils.startGuide(targetLoc, () => {
                                this.setGuideStep(1);
                                this.getGuidePanel.showStepTips(bagId, () => {
                                    this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                                    if (this.guideStep >= this.guideBagIds.length) return;
                                    bagId = this.guideBagIds[3];
                                    if (!this.triggerLocMap.has(bagId)) return;
                                    targetLoc = this.triggerLocMap.get(bagId);
                                    Utils.startGuide(targetLoc, () => {
                                        this.setGuideStep(1);
                                        this.getGuidePanel.showStepTips(bagId, () => {
                                            this.interact(true, GameConfig.Interact.findElement(`BagId`, bagId).ID);
                                            this.getGuidePanel.showStepTips(bagId, () => {
                                                this.getGuidePanel.showStartTips(() => {

                                                }, GameConfig.Language.Text_Close.Value, GameConfig.Language.Text_GuideEnd.Value);
                                            }, GameConfig.Language.Text_UpNext.Value);
                                        }, GameConfig.Language.Text_UpNext.Value);
                                    });
                                }, GameConfig.Language.Text_UpNext.Value);
                            });
                        }, GameConfig.Language.Text_UpNext.Value);
                    });
                }, GameConfig.Language.Text_UpNext.Value);
            });
        }, GameConfig.Language.Text_StartGame.Value, GameConfig.Language.Text_WelcomeTo.Value);
    }
}

export class InteractionModuleS extends ModuleS<InteractionModuleC, InteractionData> {
    private rankModuleS: RankModuleS = null;
    private get getRankModuleS(): RankModuleS {
        if (this.rankModuleS == null) {
            this.rankModuleS = ModuleService.getModule(RankModuleS);
        }
        return this.rankModuleS;
    }

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
    }

    protected onPlayerLeft(player: mw.Player): void {
    }

    private modelGuidMap: Map<string, mw.Model> = new Map<string, mw.Model>();
    private usingBagIdMap: Map<number, number[]> = new Map<number, number[]>();
    public async net_playInteract(bagId: number, modelGuid: string): Promise<number> {
        let player = this.currentPlayer;
        let playerId = player.playerId;
        let usingBagIds: number[] = [];
        if (this.usingBagIdMap.has(playerId)) {
            usingBagIds = this.usingBagIdMap.get(playerId);
            if (usingBagIds.includes(bagId)) return 0;
            usingBagIds.push(bagId);
        } else {
            usingBagIds.push(bagId);
            this.usingBagIdMap.set(playerId, usingBagIds);
        }
        console.error(`usingBagIds = ${usingBagIds}`);
        let model: mw.Model = null;
        if (this.modelGuidMap.has(modelGuid)) {
            model = this.modelGuidMap.get(modelGuid);
        } else {
            model = await mw.GameObject.asyncFindGameObjectById(modelGuid) as mw.Model;
            this.modelGuidMap.set(modelGuid, model);
        }
        await model.asyncReady();
        this.placingItems(player, bagId, model).then(() => {
            usingBagIds.splice(usingBagIds.indexOf(bagId), 1);
            console.error(`usingBagIds = ${usingBagIds}`);
        });
        return 1;
    }

    private async placingItems(player: mw.Player, bagId: number, itemMode: mw.Model): Promise<void> {
        if (!player) return;
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);

        let animationId = actionPropElement.AnimationId;
        if (animationId && animationId.length > 0) {
            await Utils.asyncDownloadAsset(animationId);
            let animation = player.character.loadAnimation(animationId);
            if (actionPropElement.AnimationSlot) animation.slot = actionPropElement.AnimationSlot;
            let parameter = actionPropElement.AnimationParameter;
            if (parameter && parameter.length > 0) {
                animation.speed = parameter[0];
                animation.loop = parameter[1];
            }
            animation.play();
        }

        let playAnimationTime: number = 1;
        if (actionPropElement.AnimationParameter && actionPropElement.AnimationParameter.length > 0) {
            playAnimationTime = actionPropElement.AnimationParameter[0];
        }
        await TimeUtil.delaySecond(playAnimationTime);

        let delayModeEffectId: number = null;
        let delayModeEffectAssetId = actionPropElement.DelayModeEffectId;
        if (delayModeEffectAssetId && delayModeEffectAssetId.length > 0) {
            await Utils.asyncDownloadAsset(delayModeEffectAssetId);
            let delayModeEffectOffsetParameter = actionPropElement.DelayModeEffectOffsetParameter;
            delayModeEffectId = EffectService.playOnGameObject(delayModeEffectAssetId, itemMode, {
                loopCount: 0,
                position: new mw.Vector(delayModeEffectOffsetParameter[0], delayModeEffectOffsetParameter[1], delayModeEffectOffsetParameter[2]),
                rotation: new mw.Rotation(delayModeEffectOffsetParameter[3], delayModeEffectOffsetParameter[4], delayModeEffectOffsetParameter[5]),
                scale: new mw.Vector(delayModeEffectOffsetParameter[6], delayModeEffectOffsetParameter[7], delayModeEffectOffsetParameter[8])
            });
        }

        let delayParameter = actionPropElement.DelayParameter;
        let delayTime = delayParameter[0];
        let delayCount = delayParameter[1];
        let delayInterval = delayParameter[2];
        await TimeUtil.delaySecond(delayTime - playAnimationTime);

        for (let i = 0; i < delayCount; ++i) {
            await new Promise<void>((resolve: () => void) => {
                setTimeout(async () => {
                    let DelayEffectAssetId = actionPropElement.DelayEffectId;
                    if (DelayEffectAssetId && DelayEffectAssetId.length > 0) {
                        await Utils.asyncDownloadAsset(DelayEffectAssetId);
                        let delayEffectOffsetParameter = actionPropElement.DelayEffectOffsetParameter;
                        EffectService.playAtPosition(DelayEffectAssetId, itemMode.worldTransform.position, {
                            loopCount: 1,
                            rotation: itemMode.worldTransform.rotation,
                            scale: new mw.Vector(delayEffectOffsetParameter[6], delayEffectOffsetParameter[7], delayEffectOffsetParameter[8])
                        });

                        let delayModeSoundId = actionPropElement.DelayModeSoundId;
                        if (delayModeSoundId && delayModeSoundId.length > 0) {
                            await Utils.asyncDownloadAsset(delayModeSoundId);
                            let delayModeSoundParameter = actionPropElement.DelayModeSoundParameter;
                            SoundService.play3DSound(delayModeSoundId, itemMode.worldTransform.position, 1, delayModeSoundParameter[0], { radius: delayModeSoundParameter[1], falloffDistance: delayModeSoundParameter[1] * 1.2 });
                        }
                    }
                    return resolve();
                }, delayInterval * 1000);
            });
        }

        if (actionPropElement.ID != 30004) await TimeUtil.delaySecond(delayInterval);
        if (delayModeEffectId) EffectService.stop(delayModeEffectId);
    }

    @Decorator.noReply()
    public net_setBagId(bagId: number): void {
        this.currentData.setBagId(bagId);
        let score = this.currentData.bagIds.length;
        this.getRankModuleS.refreshScore(this.currentPlayer.userId, score);
    }

    @Decorator.noReply()
    public net_setGuideStep(addStep: number): void {
        this.currentData.setGuideStep(addStep);
    }
}

export class PlayerInteractor {
    public isCanSit: boolean = true;
    public interactor: mw.Interactor = null;
}

export enum OnClickType {
    Sit = 1,
    Shake = 2,
    Dance = 3,
}

export class InteractionData extends Subdata {
    @Decorator.persistence()
    public bagIds: number[] = [];

    @Decorator.persistence()
    public guideStep: number = 0;

    public setBagId(bagId: number): void {
        if (this.bagIds.includes(bagId)) return;
        this.bagIds.push(bagId);
        this.save(false);
    }

    public setGuideStep(addStep: number): void {
        this.guideStep += addStep;
        this.save(false);
    }
}