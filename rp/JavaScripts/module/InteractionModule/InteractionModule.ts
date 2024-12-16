import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import { ISitElement } from "../../configs/Sit";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import OnClickPanel_Generate from "../../ui-generate/module/InteractionModule/OnClickPanel_generate";
import { HUDModuleC } from "../HUDModule/HUDModule";

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
        this.getInteractionModuleC.interact(false, this.id);
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
        let imageGuid: string = GameConfig.Interact.getElement(this.id).InteractIcon;
        this.mClickBtn.normalImageGuid = imageGuid;
        this.mClickBtn.pressedImageGuid = imageGuid;
        this.mClickBtn.disableImageGuid = imageGuid;
    }

    protected onUpdate(dt: number) {
        if (!this.obj) return;
        let pos: mw.Vector2 = mw.InputUtil.projectWorldPositionToWidgetPosition(this.obj.worldTransform.position.add(this.offset), false).screenPosition;
        this.rootCanvas.position = pos.subtract(this.rootCanvas.size.multiply(0.5));
    }
}

export class InteractionModuleC extends ModuleC<InteractionModuleS, null> {
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

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
    }

    protected onEnterScene(sceneType: number): void {
        this.findTriggers();
    }

    private findTriggers(): void {
        GameConfig.Interact.getAllElement().forEach(async (value: ISitElement) => {
            let triggerGuid = value.TriggerGuid;
            if (!triggerGuid || triggerGuid.length == 0) return;
            let trigger = await GameObject.asyncFindGameObjectById(triggerGuid) as mw.Trigger;
            await trigger.asyncReady();
            trigger.onEnter.add((char: mw.Character) => {
                this.onEnterTrigger(char, value.ID, trigger);
            });
            trigger.onLeave.add((char: mw.Character) => {
                this.onLeaveTrigger(char);
            });
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
            let interactivityGuid = interact.InteractivityGuid;
            if (!interactivityGuid || interactivityGuid.length == 0) {
                let bagId = interact.BagId;
                if (bagId && bagId > 0) {
                    let modelGuid = interact.ModelGuid;
                    if (modelGuid && modelGuid.length > 0) {
                        let code = await this.server.net_playInteract(bagId, modelGuid);
                        if (code == 0) {
                            Notice.showDownNotice(GameConfig.Language.Text_ThisItemIsInUse.Value);
                        }
                    } else {
                        this.getHUDModuleC.action(bagId);
                    }
                }
                return;
            }

            let code = await this.server.net_interact(isInteract, id);
            if (code == 3) {
                Notice.showDownNotice(GameConfig.Language.Text_Tips1.Value);
            } else if (code == 1) {
                this.getHUDModuleC.controllerExitUIVisible(true);
                let bagId = GameConfig.Interact.getElement(id).BagId;
                if (bagId > 0) this.getHUDModuleC.action(bagId);
            } else if (code == 2) {
                this.getHUDModuleC.controllerExitUIVisible(false);
            }
        });
    }
}

export class InteractionModuleS extends ModuleS<InteractionModuleC, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.findInteractors();
    }

    protected onPlayerLeft(player: mw.Player): void {
        this.leavingCheckInteract(player);
    }

    private playerInteractorMap: Map<number, PlayerInteractor> = new Map<number, PlayerInteractor>();
    private findInteractors(): void {
        GameConfig.Interact.getAllElement().forEach(async (value: ISitElement) => {
            let interactivityGuid = value.InteractivityGuid;
            if (!interactivityGuid || interactivityGuid.length == 0) return;
            let interactor = await GameObject.asyncFindGameObjectById(interactivityGuid) as mw.Interactor;
            this.playerInteractorMap.set(value.ID, { isCanSit: true, interactor: interactor });
        });
    }

    private playerInteractoringMap: Map<number, number> = new Map<number, number>();
    public async net_interact(isInteract: boolean, id: number): Promise<number> {
        let player = this.currentPlayer;
        return new Promise<number>(async (resolve: (value: number) => void) => {
            if (!this.playerInteractorMap.has(id)) return resolve(0);
            let playerInteractor = this.playerInteractorMap.get(id);
            if (isInteract) {
                if (!playerInteractor.isCanSit) return resolve(3);
                playerInteractor.interactor.onEnter.add(() => {
                    switch (sitElement.HumanoidSlotType) {
                        case mw.HumanoidSlotType.Root:
                        case mw.HumanoidSlotType.RightFoot:
                        case mw.HumanoidSlotType.LeftFoot:
                            let z = player.character.collisionExtent.z;
                            player.character.localTransform.position = new mw.Vector(0, 0, z / 2);
                            break;
                        case mw.HumanoidSlotType.Hair:
                        case mw.HumanoidSlotType.Buttocks:
                            player.character.localTransform.position = mw.Vector.zero;
                        default:
                            player.character.localTransform.position = mw.Vector.zero;
                            break;
                    }
                    player.character.localTransform.rotation = mw.Rotation.zero;
                    playerInteractor.interactor.onEnter.clear();
                    return resolve(1);
                });
                let sitElement = GameConfig.Interact.getElement(id);
                playerInteractor.interactor.enter(player.character, sitElement.HumanoidSlotType, sitElement.SitStance);
                playerInteractor.isCanSit = false;
                this.playerInteractoringMap.set(player.playerId, id);
            } else {
                playerInteractor.interactor.onLeave.add(() => {
                    playerInteractor.interactor.onLeave.clear();
                    return resolve(2);
                });
                playerInteractor.interactor.leave(playerInteractor.interactor.worldTransform.position);
                playerInteractor.isCanSit = true;
                if (this.playerInteractoringMap.has(player.playerId)) this.playerInteractoringMap.delete(player.playerId);
            }
        });
    }

    private leavingCheckInteract(player: mw.Player): void {
        let playerId = player.playerId;
        if (!this.playerInteractoringMap.has(playerId)) return;
        let id = this.playerInteractoringMap.get(playerId);
        if (!this.playerInteractorMap.has(id)) return;
        let playerInteractor = this.playerInteractorMap.get(id);
        playerInteractor.interactor.onLeave.add(() => {
            console.error(`playerId = ${playerId}, id = ${id}`);
            playerInteractor.interactor.onLeave.clear();
        });
        playerInteractor.interactor.leave();
        playerInteractor.isCanSit = true;
        this.playerInteractoringMap.delete(playerId);
        console.error(`playerId = ${playerId}, id = ${id}`);

        if (this.usingBagIdMap.has(playerId)) {
            this.usingBagIdMap.delete(playerId);
        }
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