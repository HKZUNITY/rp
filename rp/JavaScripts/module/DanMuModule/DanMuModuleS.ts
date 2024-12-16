import { IActionConfigElement } from "../../configs/ActionConfig";
import { IActionPropElement } from "../../configs/ActionProp";
import { IExpressionElement } from "../../configs/Expression";
import { GameConfig } from "../../configs/GameConfig";
import GlobalData from "../../GlobalData";
import Utils from "../../tools/Utils";
import Buff from "./Buff";
import { ChatData, ActionData } from "./DanMuData";
import DanMuModuleC from "./DanMuModuleC";

const WorldChatDatas: string = "WorldChatDatas";
const WorldExpressionDatas: string = "WorldExpressionDatas";
const WorldActionDatas: string = "WorldActionDatas";
export default class DanMuModuleS extends ModuleS<DanMuModuleC, null> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        // this.setChat_Test();
        // this.setExpression_Test();
        // this.setAction_Test();
    }

    protected onPlayerEnterGame(player: mw.Player): void {
        this.initChatDatas(player);
        this.initExpressionDatas(player);
        // this.initActionDatas(player);
        this.initBuff(player);
    }

    protected onPlayerLeft(player: mw.Player): void {
        if (Utils.buffMap.has(player.playerId)) {
            Utils.buffMap.get(player.playerId)?.destroy();
            Utils.buffMap.delete(player.playerId);
        }
        this.unloadAllBag(player, false);
    }

    private initBuff(player: mw.Player): void {
        let buff = player.character.addComponent(Buff, true);
        buff.playerId = player.playerId;
        Utils.buffMap.set(player.playerId, buff);
    }

    protected onUpdate(dt: number): void {
        this.playerBagMap.forEach((value: PlayerBag[]) => {
            value.forEach((bag: PlayerBag) => {
                if (bag.isUpdate) bag.update();
            });
        });
    }

    private initChatDatas(player: mw.Player): void {
        this.getCustomdata(WorldChatDatas).then((chatDatas: ChatData[]) => {
            if (!chatDatas || chatDatas.length == 0) return;
            this.getClient(player).net_initChatDatas(chatDatas);
        });
    }

    private initExpressionDatas(player: mw.Player): void {
        this.getCustomdata(WorldExpressionDatas).then((expressionAssets: string[]) => {
            if (!expressionAssets || expressionAssets.length == 0) return;
            this.getClient(player).net_initExpressionDatas(expressionAssets);
        });
    }

    private initActionDatas(player: mw.Player): void {
        this.getCustomdata(WorldActionDatas).then((actionDatas: ActionData[]) => {
            if (!actionDatas || actionDatas.length == 0) return;
            this.getClient(player).net_initActionDatas(actionDatas);
        });
    }

    private setChat_Test(): void {
        let chatDatas: ChatData[] = [];
        for (let i = 1; i <= 10; ++i) {
            let ch = GameConfig.Chat.getElement(i);
            let chats: string[] = ch.Chats;
            let chatChilds: string[][] = ch.ChatChilds;
            chatDatas.push({ chats: chats, chatChilds: chatChilds });
        }
        this.setCustomData(WorldChatDatas, chatDatas);
    }

    private setExpression_Test(): void {
        let expressionAssets: string[] = [];
        GameConfig.Expression.getAllElement().forEach((value: IExpressionElement) => {
            expressionAssets.push(value.AssetId);
        });
        this.setCustomData(WorldExpressionDatas, expressionAssets);
    }

    private setAction_Test(): void {
        let actionDatas: ActionData[] = [];
        GameConfig.ActionConfig.getAllElement().forEach((value: IActionConfigElement) => {
            actionDatas.push({
                tab: value.Tab,
                icon: value.Icon,
                assetId: value.ActionId,
                names: value.Names,
                loop: value.Loop,
                pos: value.Pos,
                rot: new mw.Rotation(value.Rot),
                type: value.Type
            });
        });
        this.setCustomData(WorldActionDatas, actionDatas);
    }

    @Decorator.noReply()
    public net_sendDanMu(msg: string, isActive: boolean): void {
        this.getAllClient().net_sendDanMu(this.currentPlayer.userId, msg, isActive);
    }

    public async getCustomdata(key: string): Promise<any> {
        return (await DataStorage.asyncGetData(key)).data;
    }

    public async setCustomData(saveKey: string, dataInfo: any): Promise<boolean> {
        let code: mw.DataStorageResultCode = null;
        code = await DataStorage.asyncSetData(saveKey, dataInfo);
        return code == mw.DataStorageResultCode.Success;
    }

    private maxShowDistance: number = 2000;
    @Decorator.noReply()
    public net_showBubbleText(gameObjectId: string, text: string): void {
        let currentPlayer = this.currentPlayer;
        if (this.maxShowDistance == -1) {
            Player.getAllPlayers().forEach((player: mw.Player) => {
                this.getClient(player).net_showBubbleText(gameObjectId, text);
            });
        } else {
            const players = Player.getAllPlayers();
            for (const player of players) {
                if (player === currentPlayer) {
                    this.getClient(player).net_showBubbleText(gameObjectId, text);
                } else {
                    const len = Vector.distance(player.character.worldTransform.position, currentPlayer.character.worldTransform.position);
                    if (len <= this.maxShowDistance) {
                        this.getClient(player).net_showBubbleText(gameObjectId, text);
                    }
                }
            }
        }
    }

    @Decorator.noReply()
    public net_playExpression(assetId: string): void {
        this.getAllClient().net_playExpression(this.currentPlayerId, assetId);
    }

    private playerInteractMap: Map<number, PlayerInteract> = new Map<number, PlayerInteract>();
    public async net_EnterInteract(actionData: ActionData): Promise<boolean> {
        let player = this.currentPlayer;
        return await this.enterInteract(player, actionData);
    }

    public async enterInteract(player: mw.Player, actionData: ActionData): Promise<boolean> {
        let playerId = player.playerId;
        if (!this.playerInteractMap.has(playerId)) {
            this.playerInteractMap.set(playerId, new PlayerInteract());
        }
        let playerInteract = this.playerInteractMap.get(playerId);
        await playerInteract.clearInteractor(player);
        if (actionData.type == 0) {
            return await playerInteract.playSingleAni(player, actionData);
        } else if (actionData.type == 1) {
            return await playerInteract.interact(player, actionData);
        } else if (actionData.type == 2) {
            return await playerInteract.playDoubleAni(player, actionData);
        }
    }

    public async net_LeaveInteract(): Promise<boolean> {
        let player = this.currentPlayer;
        return await this.leaveInteract(player);
    }

    public async leaveInteract(player: mw.Player): Promise<boolean> {
        let playerId = player.playerId;
        if (!this.playerInteractMap.has(playerId)) return true;
        let playerInteract = this.playerInteractMap.get(playerId);
        return await playerInteract.clearInteractor(player);
    }

    private playerBagMap: Map<number, PlayerBag[]> = new Map<number, PlayerBag[]>();
    public async net_useBag(bagId: number): Promise<number[]> {
        let player = this.currentPlayer;
        let playerBag: PlayerBag = null;
        let bagIds: number[] = [];
        if (!this.playerBagMap.has(player.playerId)) {
            playerBag = new PlayerBag();
            this.playerBagMap.set(player.playerId, [playerBag]);
        } else {
            let playerBags = this.playerBagMap.get(player.playerId);
            for (let i = 0; i < playerBags.length; ++i) {
                if (GameConfig.ActionProp.getElement(bagId).Tab == 6) {
                    if (GameConfig.ActionProp.getElement(playerBags[i].bagId).Tab == 6) {
                        playerBag = playerBags[i];
                        break;
                    }
                }

                if (playerBags[i].bagId == bagId || GameConfig.ActionProp.getElement(playerBags[i].bagId).NextId == bagId) {
                    playerBag = playerBags[i];
                    break;
                }
            }
            if (!playerBag) {
                if (playerBags.length >= GlobalData.bagCount) {
                    playerBags.forEach((value: PlayerBag) => {
                        bagIds.push(value.bagId);
                    });
                    return bagIds;
                }
                playerBag = new PlayerBag();
                playerBags.push(playerBag);
            }
        }
        await playerBag.equip(player, bagId);
        this.playerBagMap.get(player.playerId).forEach((value: PlayerBag) => {
            bagIds.push(value.bagId);
        });
        return bagIds;
    }

    public async net_unloadBag(bagId: number): Promise<number[]> {
        let player = this.currentPlayer;
        let bagIds: number[] = [];
        if (!this.playerBagMap.has(player.playerId)) return bagIds;
        let playerBags = this.playerBagMap.get(player.playerId);
        let unloadIndex: number = -1;
        for (let i = 0; i < playerBags.length; ++i) {
            if (playerBags[i].bagId == bagId) {
                await playerBags[i].unEquip(player, bagId);
                unloadIndex = i;
                break;
            }
        }
        if (unloadIndex == -1 || !playerBags || playerBags.length == 0) return bagIds;
        if (playerBags.length == 1) {
            playerBags.length = 0;
            playerBags = [];
        } else {
            for (let i = unloadIndex + 1; i < playerBags.length; ++i) {
                playerBags[i - 1] = playerBags[i];
            }
            playerBags.length = playerBags.length - 1;
        }
        console.error(`playerBags.length:${playerBags.length}`);
        playerBags.forEach((value: PlayerBag) => {
            bagIds.push(value.bagId);
        });
        return bagIds;
    }

    public async net_unloadAllBag(): Promise<number[]> {
        let player = this.currentPlayer;
        return await this.unloadAllBag(player, true);
    }

    private async unloadAllBag(player: mw.Player, isSync: boolean): Promise<number[]> {
        if (!this.playerBagMap.has(player.playerId)) return;
        let playerBag = this.playerBagMap.get(player.playerId);
        for (let i = 0; i < playerBag.length; ++i) {
            await playerBag[i].unEquip(player, playerBag[i].bagId, isSync);
        }
        this.playerBagMap.delete(player.playerId);
        return [];
    }

    private playerGlideMap: Map<number, PlayerGlide> = new Map<number, PlayerGlide>();
    public async net_startGlide(): Promise<boolean> {
        let player = this.currentPlayer;
        if (!this.playerGlideMap.has(player.playerId)) {
            this.playerGlideMap.set(player.playerId, new PlayerGlide());
        }
        let playerGlide = this.playerGlideMap.get(player.playerId);
        return await playerGlide.startGlide(player);
    }

    public net_stopGlide(): boolean {
        let player = this.currentPlayer;
        if (!this.playerGlideMap.has(player.playerId)) return true;
        let playerGlide = this.playerGlideMap.get(player.playerId);
        playerGlide.stopGlide();
        this.playerGlideMap.delete(player.playerId);
        return true;
    }
}

export class PlayerGlide {
    public animation: mw.Animation = null;
    public glideObj: mw.GameObject = null;
    public effectId: number = null;
    public async startGlide(player: mw.Player): Promise<boolean> {
        await Utils.asyncDownloadAsset(`148890`);
        this.animation = player.character.loadAnimation(`148890`);
        this.animation.loop = 0;
        this.animation.play();
        await Utils.asyncDownloadAsset(`162566`);
        this.glideObj = await GameObjPool.asyncSpawn("162566");
        await this.glideObj.asyncReady();
        await this.glideObj.setCollision(mw.PropertyStatus.Off, true);
        await Utils.asyncDownloadAsset(`27392`);
        this.effectId = EffectService.playOnGameObject("27392", this.glideObj, { loopCount: 0 });
        player.character.attachToSlot(this.glideObj, mw.HumanoidSlotType.LeftHand);
        this.glideObj.localTransform.position = new mw.Vector(0, 0, 0);
        this.glideObj.localTransform.rotation = new mw.Rotation(-90, 0, 0);
        return true;
    }

    public stopGlide(): void {
        if (this.effectId) {
            EffectService.stop(this.effectId);
            this.effectId = null;
        }
        if (this.animation) {
            this.animation.stop();
            this.animation = null;
        }
        if (this.glideObj) {
            GameObjPool.despawn(this.glideObj);
            this.glideObj = null;
        }
    }
}

export class PlayerBag {
    private player: mw.Player = null;
    public bagId: number = null;
    public async equip(player: mw.Player, bagId: number): Promise<boolean> {
        this.player = player;
        this.bagId = bagId;
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        this.actionPropElement = actionPropElement;

        if (actionPropElement.BuffId > 0) {
            if (Utils.buffMap.has(player.playerId)) {
                Utils.buffMap.get(player.playerId).bagId = bagId;
            }
        } else {
            if (actionPropElement.NextId > 0) {
                if (GameConfig.ActionProp.getElement(actionPropElement.NextId).BuffId > 0) {
                    if (Utils.buffMap.has(player.playerId)) {
                        Utils.buffMap.get(player.playerId).bagId = 0;
                    }
                }
            }
        }

        if (actionPropElement.AssetId && actionPropElement.AssetId.length > 0) {
            this.recycleMode();
            await this.spawnMode(player, actionPropElement.AssetId, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
        } else {
            await this.updateMode(player, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
        }

        if (actionPropElement.VehiclesChildId && actionPropElement.VehiclesChildId.length > 0) {
            this.recycleVehiclesMode();
            await this.spawnVehiclesMode(player, actionPropElement.VehiclesChildId, actionPropElement.VehiclesChildParameter);
        } else {
            this.recycleVehiclesMode();
        }

        if (actionPropElement.MaterialId && actionPropElement.MaterialId.length > 0) {
            this.setMaterial(actionPropElement.MaterialId);
        } else {
            this.resetMaterial();
        }

        if (actionPropElement.IsFly == 1) {
            this.switchFlyState(player);
        } else if (actionPropElement.IsFly == 0) {
            if (actionPropElement.NextId > 0) {
                if (GameConfig.ActionProp.getElement(actionPropElement.NextId).IsFly == 1) {
                    this.switchRunState(player);
                }
            }
        }

        if (actionPropElement.AnimationId && actionPropElement.AnimationId.length > 0) {
            await this.playAnimation(player, actionPropElement.AnimationId, actionPropElement.AnimationSlot, actionPropElement.AnimationParameter);
        } else {
            this.stopAnimation();
        }

        if (actionPropElement.DelayAssetId && actionPropElement.DelayAssetId.length > 0) {
            this.placingItems(player, actionPropElement);
        }

        if (actionPropElement.EffectId && actionPropElement.EffectId.length > 0) {
            this.stopEffect();
            await this.playEffect(actionPropElement.EffectId, actionPropElement.EffectLoop, actionPropElement.EffectOffsetParameter);
        } else {
            this.stopEffect();
        }

        if (actionPropElement.SoundId && actionPropElement.SoundId.length > 0) {
            this.stop3DSound();
            await this.play3DSound(actionPropElement.SoundId, actionPropElement.SoundParameter);
        } else {
            this.stop3DSound();
        }

        this.isUpdate = actionPropElement.Tab == 6;
        await TimeUtil.delaySecond(0.1);
        return true;
    }

    public async unEquip(player: mw.Player, bagId: number, isSync: boolean = true): Promise<boolean> {
        this.isUpdate = false;
        this.stopEffect();
        this.stop3DSound();
        this.stopAnimation();
        this.stopPlayerVehiclesModeAnimation();
        this.resetMaterial();
        let actionPropElement = GameConfig.ActionProp.getElement(bagId);
        if (actionPropElement.IsFly == 1 && GameConfig.ActionProp.getElement(actionPropElement.NextId).IsFly == 0) {
            this.switchRunState(player);
        }
        if (actionPropElement.BuffId > 0) {
            if (actionPropElement.NextId > 0) {
                if (GameConfig.ActionProp.getElement(actionPropElement.NextId).BuffId <= 0) {
                    if (Utils.buffMap.has(player.playerId)) {
                        Utils.buffMap.get(player.playerId).bagId = 0;
                    }
                }
            }
        }
        this.recycleMode();
        this.recycleVehiclesMode();
        if (isSync) await TimeUtil.delaySecond(0.1);
        return true;
    }

    public mode: mw.GameObject = null;
    public async spawnMode(player: mw.Player, assetId: string, slotType: mw.HumanoidSlotType, parameter: number[]): Promise<void> {
        await Utils.asyncDownloadAsset(assetId);
        this.mode = await GameObjPool.asyncSpawn(assetId);
        await this.mode.asyncReady();
        this.mode.setCollision(mw.PropertyStatus.Off, true);
        player.character.attachToSlot(this.mode, slotType);
        this.mode.localTransform.position = new Vector(parameter[0], parameter[1], parameter[2]);
        this.mode.localTransform.rotation = new Rotation(parameter[3], parameter[4], parameter[5]);
        this.mode.localTransform.scale = new Vector(parameter[6], parameter[7], parameter[8]);
    }

    public recycleMode(): void {
        if (!this.mode) return;
        GameObjPool.despawn(this.mode);
        this.mode = null;
    }

    public async updateMode(player: mw.Player, slotType: mw.HumanoidSlotType, parameter: number[]): Promise<void> {
        if (!this.mode) {
            if (this.actionPropElement.AssetId && this.actionPropElement.AssetId.length > 0) {
            } else {
                if (this.actionPropElement.NextId > 0) {
                    if (this.actionPropElement.NextId == this.actionPropElement.ID) {
                        let actionPropElement = GameConfig.ActionProp.getElement(this.actionPropElement.NextId - 1);
                        if (actionPropElement.AssetId && actionPropElement.AssetId.length > 0) {
                            await this.spawnMode(player, actionPropElement.AssetId, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
                        }
                    } else {
                        let actionPropElement = GameConfig.ActionProp.getElement(this.actionPropElement.NextId);
                        if (actionPropElement.AssetId && actionPropElement.AssetId.length > 0) {
                            await this.spawnMode(player, actionPropElement.AssetId, actionPropElement.SlotType, actionPropElement.ModeOffsetParameter);
                        }
                    }
                }
            }
        }
        player.character.attachToSlot(this.mode, slotType);
        this.mode.localTransform.position = new Vector(parameter[0], parameter[1], parameter[2]);
        this.mode.localTransform.rotation = new Rotation(parameter[3], parameter[4], parameter[5]);
        this.mode.localTransform.scale = new Vector(parameter[6], parameter[7], parameter[8]);
    }

    public vehiclesMode: mw.Character = null;
    public async spawnVehiclesMode(player: mw.Player, assetId: string, parameter: number[]): Promise<void> {
        await Utils.asyncDownloadAsset(`Character`);
        this.vehiclesMode = await GameObjPool.asyncSpawn(`Character`) as mw.Character;
        await this.vehiclesMode.asyncReady();
        await Utils.asyncDownloadAsset(assetId);
        this.vehiclesMode.description.base.wholeBody = assetId;
        await this.vehiclesMode.asyncReady();
        this.vehiclesMode.collisionWithOtherCharacterEnabled = false;
        this.vehiclesMode.complexMovementEnabled = false;
        // this.vehiclesMode.gravityScale = 0;
        // this.vehiclesMode.maxFallingSpeed = 0;
        // this.vehiclesMode.horizontalBrakingDecelerationFalling = 0;
        // this.vehiclesMode.driftControl = 0;
        player.character.attachToSlot(this.vehiclesMode, mw.HumanoidSlotType.Root);
        this.vehiclesMode.localTransform.rotation = new Rotation(parameter[3], parameter[4], parameter[5]);
        this.vehiclesMode.localTransform.scale = new Vector(parameter[6], parameter[7], parameter[8]);
        this.vehiclesMode.localTransform.position = new Vector(parameter[0], parameter[1], parameter[2]);
    }

    public recycleVehiclesMode(): void {
        if (!this.vehiclesMode) return;
        GameObjPool.despawn(this.vehiclesMode);
        this.vehiclesMode = null;
    }

    public isUpdate: boolean = false;
    private isMove: boolean = false;
    private playerVelocity: mw.Vector = null;
    public update(): void {
        if (!this.isUpdate) return;
        if (!this.player) return;
        if (!this.playerVelocity) this.playerVelocity = this.player.character.velocity;
        if (!this.isMove && (this.player.character.velocity.x != 0 || this.player.character.velocity.y != 0)) {
            this.isMove = true;
            this.playerMoveAction();
        } else if (this.isMove && (this.player.character.velocity.x == 0 && this.player.character.velocity.y == 0)) {
            this.isMove = false;
            this.playerIdleAction();
        }
    }

    private actionPropElement: IActionPropElement = null;
    private vehiclesModeAnimation: mw.Animation = null;
    private playerAnimation: mw.Animation = null;
    public playerStatce: mw.SubStance = null;
    private stopPlayerVehiclesModeAnimation(): void {
        if (this.vehiclesModeAnimation) {
            this.vehiclesModeAnimation.stop();
            this.vehiclesModeAnimation = null;
        }
        if (this.playerAnimation) {
            this.playerAnimation.stop();
            this.playerAnimation = null;
        }
        if (this.playerStatce) {
            this.playerStatce.stop();
            this.playerStatce = null;
        }
    }

    private async playerMoveAction(): Promise<void> {
        this.stopPlayerVehiclesModeAnimation();
        if (this.vehiclesMode) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesChildMoveId);
            this.vehiclesModeAnimation = this.vehiclesMode.loadAnimation(this.actionPropElement.VehiclesChildMoveId);
            this.vehiclesModeAnimation.loop = 0;
            this.vehiclesModeAnimation.play();
        }

        if (this.actionPropElement.VehiclesWalkAnimationId && this.actionPropElement.VehiclesWalkAnimationId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesWalkAnimationId);
            this.playerAnimation = this.player.character.loadAnimation(this.actionPropElement.VehiclesWalkAnimationId);
            this.playerAnimation.slot = this.actionPropElement.VehiclesWalkAnimationSlot;
            this.playerAnimation.loop = 0;
            this.playerAnimation.play();
        }

        if (this.actionPropElement.VehiclesWalkStanceId && this.actionPropElement.VehiclesWalkStanceId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesWalkStanceId);
            this.playerStatce = this.player.character.loadSubStance(this.actionPropElement.VehiclesWalkStanceId);
            this.playerStatce.blendMode = this.actionPropElement.VehiclesWalkStanceSlot - 1;
            this.playerStatce.play();
        }
    }

    private async playerIdleAction(): Promise<void> {
        this.stopPlayerVehiclesModeAnimation();

        if (this.vehiclesMode) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesChildIdleId);
            this.vehiclesModeAnimation = this.vehiclesMode.loadAnimation(this.actionPropElement.VehiclesChildIdleId);
            this.vehiclesModeAnimation.loop = 0;
            this.vehiclesModeAnimation.play();
        }

        if (this.actionPropElement.VehiclesIdleAnimationId && this.actionPropElement.VehiclesIdleAnimationId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesIdleAnimationId);
            this.playerAnimation = this.player.character.loadAnimation(this.actionPropElement.VehiclesIdleAnimationId);
            this.playerAnimation.slot = this.actionPropElement.VehiclesIdleAnimationSlot;
            this.playerAnimation.loop = 0;
            this.playerAnimation.play();
        }

        if (this.actionPropElement.VehiclesIdleStanceId && this.actionPropElement.VehiclesIdleStanceId.length > 0) {
            await Utils.asyncDownloadAsset(this.actionPropElement.VehiclesIdleStanceId);
            this.playerStatce = this.player.character.loadSubStance(this.actionPropElement.VehiclesIdleStanceId);
            this.playerStatce.blendMode = this.actionPropElement.VehiclesIdleStanceSlot - 1;
            this.playerStatce.play();
        }
    }

    private switchFlyState(player: mw.Player): void {
        if (player.character.getCurrentState() != mw.CharacterStateType.Flying) {
            player.character.changeState(mw.CharacterStateType.Flying);
        }
    }

    private switchRunState(player: mw.Player): void {
        if (player.character.getCurrentState() != mw.CharacterStateType.Running) {
            player.character.changeState(mw.CharacterStateType.Running);
        }
    }

    private originalMaterialId: string = null;
    public setMaterial(materialId: string): void {
        if (!this.mode) return;
        this.originalMaterialId = materialId;
        (this.mode as mw.Model).setMaterial(materialId);
    }

    public resetMaterial(): void {
        if (!this.mode) return;
        if (!this.originalMaterialId) return;
        (this.mode as mw.Model).resetMaterial();
        this.originalMaterialId = null;
    }

    public animation: mw.Animation = null;
    public async playAnimation(player: mw.Player, assetId: string, slotType: number, parameter: number[]): Promise<void> {
        await Utils.asyncDownloadAsset(assetId);
        this.animation = player.character.loadAnimation(assetId);
        if (slotType) this.animation.slot = slotType;
        this.animation.speed = parameter[0];
        this.animation.loop = parameter[1];
        this.animation.play();
    }

    public stopAnimation(): void {
        if (!this.animation) return;
        this.animation?.stop();
        this.animation = null;
    }

    private async placingItems(player: mw.Player, actionPropElement: IActionPropElement): Promise<void> {
        if (!player || !actionPropElement) return;
        let playAnimationTime: number = 1;
        if (actionPropElement.AnimationParameter && actionPropElement.AnimationParameter.length > 0) {
            playAnimationTime = actionPropElement.AnimationParameter[0];
        }
        await TimeUtil.delaySecond(playAnimationTime);
        if (!player || !actionPropElement) return;
        let delayModeOffsetParameter = actionPropElement.DelayModeOffsetParameter;
        let playerPos = player.character.worldTransform.position;
        let offsetZ = player.character.collisionExtent.z / 2;
        let playerForward = player.character.worldTransform.getForwardVector();
        let itemPos = new Vector(playerPos.x + (playerForward.x * 40), playerPos.y + (playerForward.y * 40), playerPos.z + (playerForward.z * 40) - offsetZ);
        let itemRot = new mw.Rotation(new mw.Vector(playerForward.x * delayModeOffsetParameter[4], playerForward.y * delayModeOffsetParameter[4], playerForward.z * delayModeOffsetParameter[4] - 90));
        let itemSca = new mw.Vector(delayModeOffsetParameter[6], delayModeOffsetParameter[7], delayModeOffsetParameter[8]);
        let delayAssetId = actionPropElement.DelayAssetId;
        await Utils.asyncDownloadAsset(delayAssetId);
        let itemMode = await GameObjPool.asyncSpawn(delayAssetId);
        await itemMode.asyncReady();
        itemMode.worldTransform.position = itemPos;
        itemMode.worldTransform.rotation = itemRot;
        itemMode.worldTransform.scale = itemSca;

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
        GameObjPool.despawn(itemMode);
    }

    public effectId: number = null;
    public async playEffect(assetId: string, loop: number, parameter: number[]): Promise<void> {
        await Utils.asyncDownloadAsset(assetId);
        this.effectId = EffectService.playOnGameObject(assetId,
            this.mode,
            {
                loopCount: loop,
                position: new mw.Vector(parameter[0], parameter[1], parameter[2]),
                rotation: new mw.Rotation(parameter[3], parameter[4], parameter[5]),
                scale: new mw.Vector(parameter[6], parameter[7], parameter[8])
            });
    }

    public stopEffect(): void {
        if (!this.effectId) return;
        EffectService.stop(this.effectId);
        this.effectId = null;
    }

    public soundId: number = null;
    public async play3DSound(assetId: string, parameter: number[]): Promise<void> {
        await Utils.asyncDownloadAsset(assetId);
        this.soundId = SoundService.play3DSound(assetId, this.mode, parameter[2], parameter[1], { radius: parameter[0], falloffDistance: parameter[0] * 1.2 });
    }

    public stop3DSound(): void {
        if (!this.soundId) return;
        SoundService.stop3DSound(this.soundId);
        this.soundId = null;
    }
}

export class PlayerInteract {
    public interactObj: mw.Interactor = null;
    public npc: mw.Character = null;
    public npcSubStance: mw.SubStance = null;
    private async initNpc(): Promise<void> {
        if (this.npc) return;
        this.npc = await mw.GameObject.asyncSpawn("Character") as mw.Character;
        this.npc.collisionWithOtherCharacterEnabled = false;
        await this.npc.asyncReady();
    }

    public singleAni: mw.Animation = null;
    public async playSingleAni(player: mw.Player, actionData: ActionData): Promise<boolean> {
        await Utils.asyncDownloadAsset(actionData.assetId);
        this.singleAni = player.character.loadAnimation(actionData.assetId);
        this.singleAni.loop = actionData.loop == 0 ? 1 : 0;
        let isPlaySuccess = this.singleAni.play();
        console.error(`isPlaySuccess:${isPlaySuccess}`);
        return isPlaySuccess;
    }

    public playerSubStance: mw.SubStance = null;
    public async playDoubleAni(player: mw.Player, actionData: ActionData): Promise<boolean> {
        await this.initNpc();
        this.npc.setVisibility(true, true);
        player.character.collisionWithOtherCharacterEnabled = false;
        player.character.movementEnabled = false;
        this.npc.worldTransform.position = player.character.worldTransform.position.add(actionData.pos);
        let tmpRot = mw.Rotation.zero;
        mw.Rotation.add(player.character.worldTransform.rotation, actionData.rot, tmpRot);
        this.npc.worldTransform.rotation = tmpRot;
        let aniStr = actionData.assetId.split('-');
        await Utils.asyncDownloadAsset(aniStr[0]);
        await Utils.asyncDownloadAsset(aniStr[1]);
        this.playerSubStance = player.character.loadSubStance(aniStr[0]);
        this.playerSubStance.play();
        this.npcSubStance = this.npc.loadSubStance(aniStr[1]);
        this.npcSubStance.play();
        return true;
    }

    public async interact(player: mw.Player, actionData: ActionData): Promise<boolean> {
        return new Promise<boolean>(async (resolve: (value: boolean) => void) => {
            await this.initNpc();
            this.npc.setVisibility(true, true);
            player.character.collisionWithOtherCharacterEnabled = false;
            this.interactObj = await mw.GameObject.asyncSpawn("Interactor") as mw.Interactor;
            await this.interactObj.asyncReady();
            player.character.attachToSlot(this.interactObj, mw.HumanoidSlotType.FaceOrnamental);
            this.interactObj.onEnter.add(async () => {
                let aniStr = actionData.assetId.split('-');
                await Utils.asyncDownloadAsset(aniStr[0]);
                await Utils.asyncDownloadAsset(aniStr[1]);
                this.playerSubStance = player.character.loadSubStance(aniStr[0]);
                this.playerSubStance.play();
                this.npcSubStance = this.npc.loadSubStance(aniStr[1]);
                this.npcSubStance.play();

                this.interactObj.localTransform.position = actionData.pos;
                this.interactObj.localTransform.rotation = actionData.rot;
                return resolve(true);
            });
            this.interactObj.enter(this.npc, mw.HumanoidSlotType.Buttocks);
        });
    }

    public async clearInteractor(player: mw.Player): Promise<boolean> {
        if (this.singleAni) {
            this.singleAni?.stop();
            this.singleAni = null;
        }
        if (this.playerSubStance) {
            this.playerSubStance.stop();
            this.playerSubStance = null;
        }
        if (this.npcSubStance) {
            this.npcSubStance.stop();
            this.npcSubStance = null;
            this.npc.setVisibility(false, true);
        }
        return await this.leaveInteract(player);
    }

    private async leaveInteract(player: mw.Player): Promise<boolean> {
        return new Promise<boolean>((resolve: (value: boolean) => void) => {
            if (!this.interactObj) return resolve(true);
            this.interactObj.onLeave.add(async () => {
                this.interactObj.parent = null;
                this.interactObj.destroy();
                this.interactObj = null;
                this.npc.parent = null;
                this.npc.setVisibility(false, true);
                if (!player.character.collisionWithOtherCharacterEnabled) player.character.collisionWithOtherCharacterEnabled = true;
                await TimeUtil.delaySecond(1);
                return resolve(true);
            });
            this.interactObj.leave();
        });
    }
}