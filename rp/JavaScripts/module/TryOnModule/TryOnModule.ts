import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import { EventType } from "../../GlobalData";
import { TouchScript, Enums } from "../../tools/TouchScript";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import TryOnItem_Generate from "../../ui-generate/module/TryOnModule/TryOnItem_generate";
import TryOnPanel_Generate from "../../ui-generate/module/TryOnModule/TryOnPanel_generate";
import { HUDModuleC } from "../HUDModule/HUDModule";
import Mall from "../MallModule/Mall";
import MallModuleC from "../MallModule/MallModuleC";
import MallTipsPanel from "../MallModule/ui/MallTipsPanel";
import { RoomData } from "../RankModule/RankData";
import RankModuleC from "../RankModule/RankModuleC";
import RankModuleS from "../RankModule/RankModuleS";
import { SetData } from "../SetModule/SetModule";

export class TryOnItem extends TryOnItem_Generate {
    private tryOnModuleC: TryOnModuleC = null;
    private get getTryOnModuleC(): TryOnModuleC {
        if (this.tryOnModuleC == null) {
            this.tryOnModuleC = ModuleService.getModule(TryOnModuleC);
        }
        return this.tryOnModuleC;
    }

    protected onStart(): void {
        this.initUI();
        this.bindButton();
    }

    private initUI(): void {
        this.mTryOnTipsTextBlock.text = GameConfig.Language.Text_TryOnTips4.Value;
    }

    private bindButton(): void {
        this.mClickButton.onClicked.add(this.addClickButton.bind(this));
    }

    private addClickButton(): void {
        // if (this.isSelf) {
        //     Notice.showDownNotice(GameConfig.Language.Text_TryOnTips5.Value);
        //     return;
        // }
        this.getTryOnModuleC.onTryOnAction.call(this.roomData);
    }

    private index: number = -1;
    private roomData: RoomData = null;
    private isSelf: boolean = false;
    public setData(index: number, roomData: RoomData, isSelf: boolean): void {
        this.index = index;
        this.roomData = roomData;
        this.isSelf = isSelf;
        this.mRankTextBlock.text = index.toString();
        this.mNameTextBlock.text = roomData.playerName;
        this.mTryOnTextBlock.text = roomData.tryOn.toString();
        if (isSelf) {
            this.mTryOnTipsTextBlock.text = GameConfig.Language.Text_TryOnTips5.Value;
            this.mTryOnTipsTextBlock.outlineSize = 1;
            this.mRankTextBlock.outlineSize = 1;
            this.mNameTextBlock.outlineSize = 1;
            this.mTryOnTextBlock.outlineSize = 1;
        } else {
            this.mTryOnTipsTextBlock.text = GameConfig.Language.Text_TryOnTips4.Value;
            this.mTryOnTipsTextBlock.outlineSize = 0;
            this.mRankTextBlock.outlineSize = 0;
            this.mNameTextBlock.outlineSize = 0;
            this.mTryOnTextBlock.outlineSize = 0;
        }
    }
}

export class TryOnPanel extends TryOnPanel_Generate {
    private tryOnModuleC: TryOnModuleC = null;
    private get getTryOnModuleC(): TryOnModuleC {
        if (this.tryOnModuleC == null) {
            this.tryOnModuleC = ModuleService.getModule(TryOnModuleC);
        }
        return this.tryOnModuleC;
    }

    protected onStart(): void {
        this.initUI();
        this.bindButton();
        this.initTryOnRot();
    }

    private initUI(): void {
        this.mTitleTextBlock.text = GameConfig.Language.Text_HUDPanelTips2.Value;
        this.mRankTextBlock.text = GameConfig.Language.Text_TryOnTips1.Value;
        this.mNameTextBlock.text = GameConfig.Language.Text_TryOnTips2.Value;
        this.mTryOnTextBlock.text = GameConfig.Language.Text_TryOnTips3.Value;
        this.mSaveTextBlock.text = GameConfig.Language.Text_FreeSave.Value;
    }

    private bindButton(): void {
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
        this.mSaveButton.onClicked.add(this.addSaveButton.bind(this));
    }

    private addCloseButton(): void {
        this.getTryOnModuleC.onCloseAction.call();
    }

    private addSaveButton(): void {
        this.hide();
        this.getTryOnModuleC.onSaveAction.call();
    }

    private tryOnItems: TryOnItem[] = [];
    public refreshTryOnPanel(roomDatas: RoomData[], curRoomIndex: number, isShow: boolean = true): void {
        if (roomDatas.length > this.tryOnItems.length) {
            for (let i = 0; i < this.tryOnItems.length; ++i) {
                this.tryOnItems[i].setData(i + 1, roomDatas[i], i == curRoomIndex);
                Utils.setWidgetVisibility(this.tryOnItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = this.tryOnItems.length; i < roomDatas.length; ++i) {
                let tryOnItem = UIService.create(TryOnItem);
                tryOnItem.setData(i + 1, roomDatas[i], i == curRoomIndex);
                this.mItemContentCanvas.addChild(tryOnItem.uiObject);
                this.tryOnItems.push(tryOnItem);
            }
        } else {
            for (let i = 0; i < roomDatas.length; ++i) {
                this.tryOnItems[i].setData(i + 1, roomDatas[i], i == curRoomIndex);
                Utils.setWidgetVisibility(this.tryOnItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
            }
            for (let i = roomDatas.length; i < this.tryOnItems.length; ++i) {
                Utils.setWidgetVisibility(this.tryOnItems[i].uiObject, mw.SlateVisibility.Collapsed);
            }
        }
        if (isShow) this.show();
    }

    protected onShow(...params: any[]): void {
        Event.dispatchToLocal(EventType.OnOffMainUI, false);
        this.canUpdate = true;
        TouchScript.instance.addScreenListener(this.mTouchImage, this.onMoveTouchEvent.bind(this), false);
    }

    protected onHide(): void {
        Event.dispatchToLocal(EventType.OnOffMainUI, true);
        this.canUpdate = false;
        TouchScript.instance.removeScreenListener(this.mTouchImage);
    }

    //#region Rotate-Camera
    private initTryOnRot(): void {
        this.moveVec = [];
        mw.TimeUtil.delayExecute(() => {
            this.movePos = this.mTouchImage.position.multiply(1);
        }, 3)
    }

    private moveId: number = -1;
    private moveVec: number[] = [];
    private dir: number = 0;
    private movePos: mw.Vector2;
    private onMoveTouchEvent = (widget: mw.Widget, event: Enums.TouchEvent, x: number, y: number, inPointerEvent: mw.PointerEvent) => {
        if (this.movePos) {
            if (event == Enums.TouchEvent.DOWN) {
                if (this.moveId < 0) {
                    this.moveId = inPointerEvent.pointerIndex;
                    this.moveVec[0] = x;
                    this.moveVec[1] = y;
                }
            } else if (event == Enums.TouchEvent.MOVE) {
                if (this.moveId >= 0) {
                    let xoffset = x - this.moveVec[0];
                    let yoffset = y - this.moveVec[1];
                    this.dir = 0;
                    if (Math.abs(xoffset) > Math.abs(yoffset)) {
                        this.dir = Math.floor(xoffset);
                    }
                    this.moveVec[0] = x;
                    this.moveVec[1] = y;
                }
            } else if (event == Enums.TouchEvent.UP) {
                if (this.moveId >= 0) {
                    this.moveId = -1;
                    this.dir = 0;
                }
            }
        }
    }

    protected onUpdate(dt: number): void {
        if (this.dir != 0) {
            this.getTryOnModuleC.addRoatation(this.dir * dt);
            this.dir = 0;
        }
    }

    onTouchStarted(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
        return TouchScript.instance.onTouchStarted(inGemory, inPointerEvent);
    }

    onTouchMoved(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
        return TouchScript.instance.onTouchMoved(inGemory, inPointerEvent);
    }

    onTouchEnded(inGemory: mw.Geometry, inPointerEvent: mw.PointerEvent): mw.EventReply {
        return TouchScript.instance.onTouchEnded(inGemory, inPointerEvent);
    }
    //#endregion
}

export class TryOnModuleC extends ModuleC<TryOnModuleS, TryOnData> {

    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private mallModuleC: MallModuleC = null;
    private get getMallModuleC(): MallModuleC {
        if (!this.mallModuleC) {
            this.mallModuleC = ModuleService.getModule(MallModuleC);
        }
        return this.mallModuleC;
    }

    private rankModuleC: RankModuleC = null;
    private get getRankModuleC(): RankModuleC {
        if (!this.rankModuleC) {
            this.rankModuleC = ModuleService.getModule(RankModuleC);
        }
        return this.rankModuleC;
    }

    private tryOnPanel: TryOnPanel = null;
    private get getTryOnPanel(): TryOnPanel {
        if (this.tryOnPanel == null) {
            this.tryOnPanel = UIService.getUI(TryOnPanel);
        }
        return this.tryOnPanel;
    }

    private mallTipsPanel: MallTipsPanel = null;
    private get getMallTipsPanel(): MallTipsPanel {
        if (!this.mallTipsPanel) {
            this.mallTipsPanel = UIService.getUI(MallTipsPanel);
        }
        return this.mallTipsPanel;
    }

    public onTryOnAction: Action1<RoomData> = new Action1<RoomData>();
    public onCloseAction: Action = new Action();
    public onSaveAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
    }

    private bindAction(): void {
        this.getHUDModuleC.onOpenShareAction.add(this.onOpenShareActionHandler.bind(this));
        this.onCloseAction.add(this.addCloseTryOnPanelAction.bind(this));
        this.onTryOnAction.add(this.addTryOnAction.bind(this));
        this.onSaveAction.add(this.addSaveAction.bind(this));
    }

    private onOpenShareActionHandler(): void {
        console.error(`-------------${JSON.stringify(this.tryOnConfigData)}`);
        if (!this.tryOnConfigData || !this.tryOnConfigData.isOpenTryOn) {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_1.Value);
            return;
        }
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.getMallModuleC.isAccountServiceDownloadData();
            this.tryOnRoomData = null;
            await this.getMallModuleC.openTryOnPanel();
            let roomDatas = this.getRankModuleC.getRoomDatas();
            if (!roomDatas || roomDatas.length == 0) {
                Notice.showDownNotice(GameConfig.Language.Text_SignIn_1.Value);
                return;
            }
            let curRoomIndex: number = -1;
            for (let i = 0; i < roomDatas.length; ++i) {
                if (roomDatas[i].userId != this.localPlayer.userId) continue;
                curRoomIndex = i;
                break;
            }
            this.getTryOnPanel.refreshTryOnPanel(roomDatas, curRoomIndex);
            this.getMallModuleC.onSwitchCameraAction.call(2);
        });
    }

    public refreshTryOnPanel(roomDatas: RoomData[]): void {
        if (!UIService.getUI(TryOnPanel, false)?.visible) return;
        if (!roomDatas || roomDatas.length == 0) return;
        let curRoomIndex: number = -1;
        for (let i = 0; i < roomDatas.length; ++i) {
            if (roomDatas[i].userId != this.localPlayer.userId) continue;
            curRoomIndex = i;
            break;
        }
        this.getTryOnPanel.refreshTryOnPanel(roomDatas, curRoomIndex, false);
    }

    private addCloseTryOnPanelAction(): void {
        if (this.isNeedSaveCharacter) {
            this.getMallTipsPanel.showTips(() => {
                this.isNeedSaveCharacter = false;
                this.saveCharacter();
                this.getTryOnPanel.hide();
                this.getMallModuleC.onSwitchCameraAction.call(0);
            }, () => {
                this.isNeedSaveCharacter = false;
                ExecutorManager.instance.pushAsyncExecutor(async () => {
                    let copyNpc = this.getMallModuleC.getCopyNpc;
                    await copyNpc.asyncReady();
                    this.localPlayer.character.setDescription(copyNpc.getDescription());
                    await this.localPlayer.character.asyncReady();
                });
                this.getTryOnPanel.hide();
                this.getMallModuleC.onSwitchCameraAction.call(0);
            }, GameConfig.Language.Text_CloseTips.Value
                , GameConfig.Language.Text_WhetherSaveImage.Value
                , GameConfig.Language.Text_NoSave.Value
                , GameConfig.Language.Text_Save.Value);
        } else {
            this.getTryOnPanel.hide();
            this.getMallModuleC.onSwitchCameraAction.call(0);
        }
    }

    private tryOnRoomData: RoomData = null;
    private addTryOnAction(roomData: RoomData): void {
        if (!roomData || !roomData?.userId || roomData.userId == "") {
            Notice.showDownNotice(GameConfig.Language.Text_TryOnTips6.Value);
            Notice.showDownNotice(GameConfig.Language.Text_TryOnTips7.Value);
            return;
        }

        ExecutorManager.instance.pushAsyncExecutor(async () => {
            if (roomData.userId == this.localPlayer.userId) {
                this.localPlayer.character.setDescription(this.getMallModuleC.getCopyNpc.getDescription());
            } else {
                let isTryOn = await this.server.net_isTryOnPermission(roomData.userId);
                if (!isTryOn) {
                    Notice.showDownNotice(GameConfig.Language.Text_TryOnTips12.Value);
                    return;
                }
                await TimeUtil.delaySecond(1);
                let player = await Player.asyncGetPlayer(roomData.userId);
                if (!player || !player.character) {
                    Notice.showDownNotice(GameConfig.Language.Text_TryOnTips6.Value);
                    Notice.showDownNotice(GameConfig.Language.Text_TryOnTips7.Value);
                    return;
                }
                await player.character.asyncReady();
                if (player.character.description.advance.base.characterSetting.somatotype == mw.SomatotypeV2.None) {
                    Notice.showDownNotice(GameConfig.Language.Text_TryOnTips8.Value);
                    return;
                }
                this.localPlayer.character.detachAllFromSlot({ isDestroy: true });
                await this.localPlayer.character.asyncReady();
                this.localPlayer.character.setDescription(player.character.getDescription());
                await this.server.net_tryOnSlotByUserId(roomData.userId);
                this.isNeedSaveCharacter = true;
            }
            this.tryOnRoomData = roomData;
            await this.localPlayer.character.asyncReady();
            await TimeUtil.delaySecond(1);
            this.getMallModuleC.onSwitchCameraAction.call(2);
            Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
        });
    }

    private isNeedSaveCharacter: boolean = false;
    private addSaveAction(): void {
        this.getMallModuleC.onSwitchCameraAction.call(0);
        this.saveCharacter();
    }

    private saveCharacter(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.localPlayer.character.asyncReady();
            this.localPlayer.character.syncDescription();
            this.isNeedSaveCharacter = false;
            Notice.showDownNotice(GameConfig.Language.Text_SaveSuccessfully.Value);
            await this.getMallModuleC.syncTryOnCharacter();
            if (!this.tryOnRoomData || !this.tryOnRoomData?.userId || this.tryOnRoomData.userId == "") return;
            this.server.net_addTryOn(this.tryOnRoomData.userId);
        });
    }

    private mallCharacterRotSpeed: number = 30;
    public addRoatation(dir: number) {
        if (!this.localPlayer || !this.localPlayer?.character || !this.localPlayer.character?.worldTransform) return;
        this.localPlayer.character.worldTransform.rotation = this.localPlayer.character.worldTransform.rotation.add(new mw.Rotation(0, 0, -(this.mallCharacterRotSpeed * dir)))
    }

    public net_tryOnSlotByUserId(userId: string): void {
        let slotDataArrStr = Mall.getSlotDataArrStr(this.localPlayer.character);
        console.error(JSON.stringify(slotDataArrStr));
        if (!slotDataArrStr || slotDataArrStr.length == 0) return;
        this.server.net_canTryOnSlotByUserId(userId, slotDataArrStr);
    }

    public net_canTryOnSlotByUserId(slotDataArrStr: string[]): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.localPlayer.character.asyncReady();
            await Mall.setSlotByDataArrStr(this.localPlayer.character, slotDataArrStr);
            Notice.showDownNotice(GameConfig.Language.Text_TryItOnSuccessfully.Value);
        });
    }

    private tryOnConfigData: TryOnConfigData = null;
    public net_syncTryOnConfigData(tryOnConfigData: TryOnConfigData): void {
        this.tryOnConfigData = tryOnConfigData;
    }
}


export class TryOnModuleS extends ModuleS<TryOnModuleC, TryOnData> {
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

    protected onPlayerEnterGame(player: mw.Player): void {
        this.syncTryOnConfigData(player);
    }

    private isContinueInitTryOnData: boolean = true;
    private async syncTryOnConfigData(player: mw.Player): Promise<void> {
        if (this.isContinueInitTryOnData) {
            this.isContinueInitTryOnData = false;
            await this.initTryOnConfigData();
            TimeUtil.delaySecond(5).then(() => { this.isContinueInitTryOnData = true; });
        }
        this.getClient(player).net_syncTryOnConfigData(this.tryOnConfigData);
    }

    private tryOnConfigData: TryOnConfigData = null;
    private async initTryOnConfigData(): Promise<void> {
        let data = await Utils.getCustomdata("TryOnConfigData");
        this.tryOnConfigData = new TryOnConfigData(data);
    }

    @Decorator.noReply()
    public net_addTryOn(userId: string): void {
        let tryOnData = DataCenterS.getData(userId, TryOnData);
        if (!tryOnData) return;
        tryOnData.setTryOn(1);
        this.getRankModuleS.refreshTryOn(userId, tryOnData.tryOn);
    }

    public async net_tryOnSlotByUserId(userId: string): Promise<boolean> {
        let currentUserId = this.currentPlayer.userId;
        let player = await Player.asyncGetPlayer(userId);
        if (!player || !player.character) return false;
        this.getClient(player).net_tryOnSlotByUserId(currentUserId);
        return true;
    }

    @Decorator.noReply()
    public async net_canTryOnSlotByUserId(userId: string, slotDataArrStr: string[]): Promise<void> {
        let player = await Player.asyncGetPlayer(userId);
        if (!player || !player.character) return;
        this.getClient(player).net_canTryOnSlotByUserId(slotDataArrStr);
    }

    public net_isTryOnPermission(userId: string): boolean {
        return DataCenterS.getData(userId, SetData)?.isTryOn;
    }
}

export class TryOnData extends Subdata {
    @Decorator.persistence()
    public tryOn: number = 0;

    public setTryOn(addTryOn: number): void {
        this.tryOn += addTryOn;
        this.save(false);
    }

    public get getTryOn(): number {
        return this.tryOn;
    }
}

export class TryOnConfigData {
    public isOpenTryOn: boolean = false;

    public constructor(data: any) {
        if (!data) return;
        this.isOpenTryOn = data?.isOpenTryOn;
    }
}