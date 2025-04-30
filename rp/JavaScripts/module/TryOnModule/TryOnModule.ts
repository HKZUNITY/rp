import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import { EventType } from "../../GlobalData";
import { AvatarApi } from "../../tools/AvatarApi";
import { Enums, TouchScript } from "../../tools/TouchScript";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import TryOnItem_Generate from "../../ui-generate/module/TryOnModule/TryOnItem_generate";
import TryOnPanel_Generate from "../../ui-generate/module/TryOnModule/TryOnPanel_generate";
import { HUDModuleC, SharePanel } from "../HUDModule/HUDModule";
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
        // this.initTryOnRot();
    }

    private initUI(): void {
        this.mTitleTextBlock.text = GameConfig.Language.Text_HUDPanelTips2.Value;
        this.mRankTextBlock.text = GameConfig.Language.Text_TryOnTips1.Value;
        this.mNameTextBlock.text = GameConfig.Language.Text_TryOnTips2.Value;
        this.mTryOnTextBlock.text = GameConfig.Language.Text_TryOnTips3.Value;
        this.mSaveTextBlock.text = GameConfig.Language.Text_FreeSave.Value;

        Utils.setWidgetVisibility(this.mTouchImage, mw.SlateVisibility.Collapsed);
    }

    private bindButton(): void {
        this.mCloseButton.onClicked.add(this.addCloseButton.bind(this));
        this.mSaveButton.onClicked.add(this.addSaveButton.bind(this));
        this.mOpenShareButton.onClicked.add(this.addOpenShareButton.bind(this));
    }

    private addCloseButton(): void {
        this.getTryOnModuleC.onCloseAction.call();
    }

    private addSaveButton(): void {
        this.hide();
        this.getTryOnModuleC.onSaveAction.call();
    }

    private addOpenShareButton(): void {
        this.getTryOnModuleC.onOpenShareAction.call();
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
        // this.canUpdate = true;
        // TouchScript.instance.addScreenListener(this.mTouchImage, this.onMoveTouchEvent.bind(this), false);
    }

    protected onHide(): void {
        Event.dispatchToLocal(EventType.OnOffMainUI, true);
        // this.canUpdate = false;
        // TouchScript.instance.removeScreenListener(this.mTouchImage);
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

    private sharePanel: SharePanel = null;
    private get getSharePanel(): SharePanel {
        if (!this.sharePanel) {
            this.sharePanel = UIService.getUI(SharePanel);
        }
        return this.sharePanel;
    }

    public onTryOnAction: Action1<RoomData> = new Action1<RoomData>();
    public onCloseAction: Action = new Action();
    public onSaveAction: Action = new Action();
    public onOpenShareAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
    }

    private bindAction(): void {
        this.getHUDModuleC.onOpenShareAction.add(this.onOpenShareActionHandler.bind(this));
        this.onCloseAction.add(this.addCloseTryOnPanelAction.bind(this));
        this.onTryOnAction.add(this.addTryOnAction.bind(this));
        this.onSaveAction.add(this.addSaveAction.bind(this));
        this.onOpenShareAction.add(this.addOpenShareAction.bind(this));
    }

    private addOpenShareAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            this.getSharePanel.show();
            let sharedId = await Utils.createSharedId(this.localPlayer.character);
            this.getSharePanel.showPanel(sharedId, 1);
        });
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
                this.onSaveAction.call();
            }, () => {
                this.resetCharacterDescription();
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

    private resetCharacterDescription(): void {
        this.isNeedSaveCharacter = false;
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            let copyNpc = this.getMallModuleC.getCopyNpc;
            await copyNpc.asyncReady();
            this.localPlayer.character.setDescription(copyNpc.getDescription());
            await this.localPlayer.character.asyncReady();
        });
        this.getTryOnPanel.hide();
        this.getMallModuleC.onSwitchCameraAction.call(0);
    }

    private isNeedSaveCharacter: boolean = false;
    private addSaveAction(): void {
        this.isNeedSaveCharacter = false;
        console.error(`-------------${JSON.stringify(this.tryOnConfigData)}`);
        if (this.tryOnConfigData && this.tryOnConfigData.isOpenAvatarEditor) {
            this.openAvatarEditor();
        } else {
            this.getTryOnPanel.hide();
            this.getMallModuleC.onSwitchCameraAction.call(0);
            this.saveCharacter();
        }
    }

    private openAvatarEditor(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.localPlayer.character.asyncReady();
            let buyCharacterDescription = this.localPlayer.character.getDescription();

            let copyNpc = this.getMallModuleC.getCopyNpc;
            await copyNpc.asyncReady();
            this.localPlayer.character.setDescription(copyNpc.getDescription());
            await this.localPlayer.character.asyncReady();

            this.getTryOnPanel.hide();
            this.getMallModuleC.onSwitchCameraAction.call(0);

            await TimeUtil.delaySecond(1);
            await AvatarEditorService.asyncOpenAvatarEditorModule();
            await TimeUtil.delaySecond(1);

            this.localPlayer.character.setDescription(buyCharacterDescription);
            await this.localPlayer.character.asyncReady();

            if (!this.tryOnRoomData || !this.tryOnRoomData?.userId || this.tryOnRoomData.userId == "") return;
            this.server.net_addTryOn(this.tryOnRoomData.userId);
        });
    }

    private saveCharacter(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.localPlayer.character.asyncReady();
            this.localPlayer.character.syncDescription();
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
        TimeUtil.delaySecond(10).then(() => {
            this.initNpc();
        });
    }

    private npcIds: { npcId: string, shareId: string }[] = [
        { npcId: `0517BE0A`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"521470",87,"0|ffebd3ff",90,"0|-0.001",90,"1|-0.001",90,"2|-0.001",90,"3|-0.001",90,"4|-0.001",91,"0|-0.001",91,"1|-0.001",91,"2|-0.001",91,"3|-0.001",91,"4|-0.001",92,"0|-0.001",92,"1|-0.001",92,"2|-0.001",92,"3|-0.001",92,"4|-0.001",93,"0|-0.001",93,"1|-0.001",93,"2|-0.001",93,"3|-0.001",93,"4|-0.001",96,"0|-0.001",96,"1|-0.001",96,"2|-0.001",96,"3|-0.001",96,"4|-0.001",97,"521469",98,"0|ffebd3ff",98,"4|f",101,"0|-0.001",101,"1|-0.001",101,"2|-0.001",101,"3|-0.001",101,"4|-0.001",101,"5|-0.001",101,"6|-0.001",101,"7|-0.001",101,"8|-0.001",102,"0|-0.001",102,"1|-0.001",102,"2|-0.001",102,"3|-0.001",102,"4|-0.001",102,"5|-0.001",102,"6|-0.001",102,"7|-0.001",102,"8|-0.001",103,"0|-0.001",103,"1|-0.001",103,"2|-0.001",103,"3|-0.001",103,"4|-0.001",103,"5|-0.001",103,"6|-0.001",103,"7|-0.001",103,"8|-0.001",104,"0|-0.001",104,"1|-0.001",104,"2|-0.001",104,"3|-0.001",104,"4|-0.001",104,"5|-0.001",104,"6|-0.001",104,"7|-0.001",104,"8|-0.001",107,"0|-0.001",107,"1|-0.001",107,"2|-0.001",107,"3|-0.001",107,"4|-0.001",107,"5|-0.001",107,"6|-0.001",107,"7|-0.001",107,"8|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"521468",120,"4|ffebd3ff",123,"0|-0.001",123,"1|-0.001",123,"2|-0.001",123,"3|-0.001",123,"4|-0.001",123,"5|-0.001",123,"6|-0.001",123,"7|-0.001",123,"8|-0.001",124,"0|-0.001",124,"1|-0.001",124,"2|-0.001",124,"3|-0.001",124,"4|-0.001",124,"5|-0.001",124,"6|-0.001",124,"7|-0.001",124,"8|-0.001",125,"0|-0.001",125,"1|-0.001",125,"2|-0.001",125,"3|-0.001",125,"4|-0.001",125,"5|-0.001",125,"6|-0.001",125,"7|-0.001",125,"8|-0.001",126,"0|-0.001",126,"1|-0.001",126,"2|-0.001",126,"3|-0.001",126,"4|-0.001",126,"5|-0.001",126,"6|-0.001",126,"7|-0.001",126,"8|-0.001",129,"0|-0.001",129,"1|-0.001",129,"2|-0.001",129,"3|-0.001",129,"4|-0.001",129,"5|-0.001",129,"6|-0.001",129,"7|-0.001",129,"8|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|-0.001",157,"1|-0.001",157,"2|-0.001",158,"0|-0.001",158,"1|-0.001",158,"2|-0.001",161,"0|-0.001",161,"1|-0.001",161,"2|-0.001",162,"0|-0.001",162,"1|-0.001",162,"2|-0.001",163,"92726",166,1.5,169,"521471",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",192,"0|ffebd3ff",197,"0|-0.001",197,"1|-0.001",197,"2|-0.001",197,"3|-0.001",197,"4|-0.001",198,"0|-0.001",198,"1|-0.001",198,"2|-0.001",198,"3|-0.001",198,"4|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",205,"1|-0.001",205,"2|-0.001",205,"3|-0.001",205,"4|-0.001",206,"0|-0.001",206,"1|-0.001",206,"2|-0.001",206,"3|-0.001",206,"4|-0.001",207,"0|-0.001",207,"1|-0.001",207,"2|-0.001",207,"3|-0.001",207,"4|-0.001",208,"0|-0.001",208,"1|-0.001",208,"2|-0.001",208,"3|-0.001",208,"4|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,228,"2|566636"],"version":1,"slotData":["23$516829$0,0,0|0,-90,0|1,1,1"],"dynDecor":["","","566636","","","","",""]}` },
        { npcId: `37FB18AA`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"515650",87,"0|f",87,"1|d42d3fff",87,"2|006559ff",87,"3|45280eff",88,"0|224409",89,"0|bebebeff",90,"0|20",90,"1|5",90,"2|5",90,"3|5",90,"4|-0.001",91,"0|20",91,"1|5",91,"2|5",91,"3|5",91,"4|-0.001",92,"0|0",92,"1|0",92,"2|0",92,"3|0",92,"4|-0.001",93,"0|0.5",93,"1|0",93,"2|0",93,"3|0",93,"4|-0.001",94,"0|509845",94,"1|35058",94,"2|509844",94,"3|509839",95,"0|f",95,"1|c33641ff",95,"2|f",95,"3|ffffff00",96,"0|0",96,"1|0",96,"2|0",96,"3|0",96,"4|-0.001",97,"515685",98,"0|f0e6e6ff",98,"1|135658ff",99,"0|224409",100,"0|aba4a4ff",101,"0|8",101,"1|5",101,"2|5",101,"3|5",101,"4|-0.001",102,"0|8",102,"1|5",102,"2|5",102,"3|5",102,"4|-0.001",103,"0|0",103,"1|0",103,"2|0",103,"3|0",103,"4|-0.001",104,"0|0.5",104,"1|0",104,"2|0",104,"3|0",104,"4|-0.001",105,"0|515453",105,"1|227575",105,"2|22672",106,"0|ffbdc8ff",106,"1|b35050ff",106,"2|5c5c5cff",107,"0|0",107,"1|171.428",107,"2|0",107,"3|0",107,"4|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"515692",120,"0|f0e6e6ff",120,"1|df4066ff",120,"2|3d272cff",121,"0|224409",122,"0|aba4a4ff",123,"0|8",123,"1|5",123,"2|5",123,"3|5",123,"4|-0.001",124,"0|8",124,"1|5",124,"2|5",124,"3|5",124,"4|-0.001",125,"0|0",125,"1|0",125,"2|0",125,"3|0",125,"4|-0.001",126,"0|0.4",126,"1|0",126,"2|0",126,"3|0",126,"4|-0.001",127,"0|515463",127,"1|515464",127,"2|515465",128,"0|1fb8beff",128,"1|81f2ffff",128,"2|769fa5ff",129,"0|0",129,"1|0",129,"2|0",129,"3|0",129,"4|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"515679",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",192,"0|d42d3fff",192,"1|d4d4d4ff",192,"2|a25f21ff",192,"3|006559ff",194,"0|bebebeff",196,"0|f",196,"1|c33641ff",196,"2|f",196,"3|ffffff00",197,"0|0",197,"1|0",197,"2|0",197,"3|0",197,"4|-0.001",198,"0|1.856",198,"1|2.838",198,"2|2.236",198,"3|2",198,"4|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|20",205,"1|5",205,"2|5",205,"3|5",205,"4|-0.001",206,"0|20",206,"1|5",206,"2|5",206,"3|5",206,"4|-0.001",207,"0|0",207,"1|0",207,"2|0",207,"3|0",207,"4|-0.001",208,"0|0.5",208,"1|0",208,"2|0",208,"3|0",208,"4|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,228,"2|566636"],"version":1,"slotData":["12$516107$0,0,0|0,0,0|1,1,1"],"dynDecor":["","","566636","","","","",""]}` },
        { npcId: `17299C7A`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"522838",90,"0|-0.001",90,"1|-0.001",90,"2|-0.001",90,"3|-0.001",90,"4|-0.001",91,"0|-0.001",91,"1|-0.001",91,"2|-0.001",91,"3|-0.001",91,"4|-0.001",92,"0|-0.001",92,"1|-0.001",92,"2|-0.001",92,"3|-0.001",92,"4|-0.001",93,"0|-0.001",93,"1|-0.001",93,"2|-0.001",93,"3|-0.001",93,"4|-0.001",96,"0|-0.001",96,"1|-0.001",96,"2|-0.001",96,"3|-0.001",96,"4|-0.001",97,"522840",101,"0|-0.001",101,"1|-0.001",101,"2|-0.001",101,"3|-0.001",101,"4|-0.001",102,"0|-0.001",102,"1|-0.001",102,"2|-0.001",102,"3|-0.001",102,"4|-0.001",103,"0|-0.001",103,"1|-0.001",103,"2|-0.001",103,"3|-0.001",103,"4|-0.001",104,"0|-0.001",104,"1|-0.001",104,"2|-0.001",104,"3|-0.001",104,"4|-0.001",107,"0|-0.001",107,"1|-0.001",107,"2|-0.001",107,"3|-0.001",107,"4|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"522839",123,"0|-0.001",123,"1|-0.001",123,"2|-0.001",123,"3|-0.001",123,"4|-0.001",124,"0|-0.001",124,"1|-0.001",124,"2|-0.001",124,"3|-0.001",124,"4|-0.001",125,"0|-0.001",125,"1|-0.001",125,"2|-0.001",125,"3|-0.001",125,"4|-0.001",126,"0|-0.001",126,"1|-0.001",126,"2|-0.001",126,"3|-0.001",126,"4|-0.001",129,"0|-0.001",129,"1|-0.001",129,"2|-0.001",129,"3|-0.001",129,"4|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"522835",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",197,"0|-0.001",198,"0|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",206,"0|-0.001",207,"0|-0.001",208,"0|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0],"version":1,"slotData":["1$522123$0,-2.41,24.69|0,0,0|1,1,1","6$522094$-14.33,0,-1.46|0,-90,0|1,1,1","12$522674$0,0,-5|0,0,0|1,1,1","19$522742$0,0,0|0,0,0|1,1,1","23$523431$0,0,0.1|0,-90,0|1,1,1"],"dynDecor":["","","","","","","",""]}` },
        { npcId: `34A80EDD`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"491314",87,"0|ffffff00",87,"1|2c0101ff",87,"2|652f11dd",87,"3|a70712ff",88,"0|47940",88,"1|224409",88,"2|270099",89,"0|f0f0f000",89,"1|090000ff",89,"2|3f2107ff",89,"3|a70712ff",90,"0|15",90,"1|10",90,"2|15",90,"3|5",90,"4|-0.001",91,"0|15",91,"1|10",91,"2|15",91,"3|5",91,"4|-0.001",92,"0|0",92,"1|0",92,"2|0",92,"3|0",92,"4|-0.001",93,"0|1",93,"1|0.12",93,"2|1",93,"3|0",93,"4|-0.001",94,"0|491206",94,"1|495155",94,"2|491205",94,"3|491201",95,"0|f",95,"1|f",95,"2|ecececff",95,"3|f",96,"0|0",96,"1|0",96,"2|0",96,"3|0",96,"4|-0.001",97,"491315",98,"0|450001ff",98,"1|823513ff",98,"2|000000dd",98,"3|a70712ff",99,"0|141677",100,"0|290001ff",100,"3|000000bf",101,"0|35",101,"1|5",101,"2|5",101,"3|5",101,"4|-0.001",102,"0|35",102,"1|5",102,"2|5",102,"3|5",102,"4|-0.001",103,"0|200",103,"1|0",103,"2|0",103,"3|0",103,"4|-0.001",104,"0|0.8",104,"1|0",104,"2|0",104,"3|0",104,"4|-0.001",105,"0|491208",105,"1|491210",105,"2|491202",106,"0|f",106,"1|f",106,"2|ecececff",106,"3|f",107,"0|0",107,"1|0",107,"2|0",107,"3|0",107,"4|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"491312",120,"0|450001ff",120,"2|000000dd",120,"3|a70712ff",121,"0|141677",122,"0|290001ff",122,"3|000000bf",123,"0|30",123,"1|5",123,"2|5",123,"3|5",123,"4|-0.001",124,"0|30",124,"1|5",124,"2|5",124,"3|5",124,"4|-0.001",125,"0|0",125,"1|0",125,"2|0",125,"3|0",125,"4|-0.001",126,"0|1",126,"1|0",126,"2|0",126,"3|0",126,"4|-0.001",127,"0|140238",128,"0|f",129,"0|122",129,"1|0",129,"2|0",129,"3|0",129,"4|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"491278",171,"050505ff",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",192,"0|340302ff",192,"1|f",195,"0|495155",196,"0|f",196,"2|f",197,"0|0",197,"1|0",197,"2|0",197,"3|0",197,"4|-0.001",198,"0|2.6",198,"1|1",198,"2|1",198,"3|1",198,"4|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|5",205,"1|5",205,"2|5",205,"3|5",205,"4|-0.001",206,"0|5",206,"1|5",206,"2|5",206,"3|5",206,"4|-0.001",207,"0|0",207,"1|0",207,"2|0",207,"3|0",207,"4|-0.001",208,"0|0",208,"1|0",208,"2|0",208,"3|0",208,"4|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0],"version":1,"slotData":["2$490998$4,1.8,-18|-13,90,43|1,1,1","10$491101$2.8,-17,-2.5|0,0,90|1,1,1","23$494016$0,0,0|0,-90,0|1,1,1"],"dynDecor":["","","","","","","",""]}` },
        { npcId: `221F136D`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"493767",90,"0|-0.001",90,"1|-0.001",90,"2|-0.001",90,"3|-0.001",90,"4|-0.001",90,"5|-0.001",90,"6|-0.001",90,"7|-0.001",90,"8|-0.001",91,"0|-0.001",91,"1|-0.001",91,"2|-0.001",91,"3|-0.001",91,"4|-0.001",91,"5|-0.001",91,"6|-0.001",91,"7|-0.001",91,"8|-0.001",92,"0|-0.001",92,"1|-0.001",92,"2|-0.001",92,"3|-0.001",92,"4|-0.001",92,"5|-0.001",92,"6|-0.001",92,"7|-0.001",92,"8|-0.001",93,"0|-0.001",93,"1|-0.001",93,"2|-0.001",93,"3|-0.001",93,"4|-0.001",93,"5|-0.001",93,"6|-0.001",93,"7|-0.001",93,"8|-0.001",96,"0|-0.001",96,"1|-0.001",96,"2|-0.001",96,"3|-0.001",96,"4|-0.001",96,"5|-0.001",96,"6|-0.001",96,"7|-0.001",96,"8|-0.001",97,"493697",101,"0|-0.001",101,"1|-0.001",101,"2|-0.001",101,"3|-0.001",101,"4|-0.001",101,"5|-0.001",101,"6|-0.001",101,"7|-0.001",101,"8|-0.001",102,"0|-0.001",102,"1|-0.001",102,"2|-0.001",102,"3|-0.001",102,"4|-0.001",102,"5|-0.001",102,"6|-0.001",102,"7|-0.001",102,"8|-0.001",103,"0|-0.001",103,"1|-0.001",103,"2|-0.001",103,"3|-0.001",103,"4|-0.001",103,"5|-0.001",103,"6|-0.001",103,"7|-0.001",103,"8|-0.001",104,"0|-0.001",104,"1|-0.001",104,"2|-0.001",104,"3|-0.001",104,"4|-0.001",104,"5|-0.001",104,"6|-0.001",104,"7|-0.001",104,"8|-0.001",107,"0|-0.001",107,"1|-0.001",107,"2|-0.001",107,"3|-0.001",107,"4|-0.001",107,"5|-0.001",107,"6|-0.001",107,"7|-0.001",107,"8|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"493645",123,"0|-0.001",123,"1|-0.001",123,"2|-0.001",123,"3|-0.001",123,"4|-0.001",124,"0|-0.001",124,"1|-0.001",124,"2|-0.001",124,"3|-0.001",124,"4|-0.001",125,"0|-0.001",125,"1|-0.001",125,"2|-0.001",125,"3|-0.001",125,"4|-0.001",126,"0|-0.001",126,"1|-0.001",126,"2|-0.001",126,"3|-0.001",126,"4|-0.001",129,"0|-0.001",129,"1|-0.001",129,"2|-0.001",129,"3|-0.001",129,"4|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"493696",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",197,"0|-0.001",197,"1|-0.001",197,"2|-0.001",197,"3|-0.001",197,"4|-0.001",198,"0|-0.001",198,"1|-0.001",198,"2|-0.001",198,"3|-0.001",198,"4|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",205,"1|-0.001",205,"2|-0.001",205,"3|-0.001",205,"4|-0.001",206,"0|-0.001",206,"1|-0.001",206,"2|-0.001",206,"3|-0.001",206,"4|-0.001",207,"0|-0.001",207,"1|-0.001",207,"2|-0.001",207,"3|-0.001",207,"4|-0.001",208,"0|-0.001",208,"1|-0.001",208,"2|-0.001",208,"3|-0.001",208,"4|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0],"version":1,"slotData":["2$493632$2.62,9.34,-24.87|0,-90,0|1,1,1","19$493583$0,0,0|0,0,0|1,1,1"],"dynDecor":["","","","","","","",""]}` },
        { npcId: `39CC56E4`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"453998",87,"0|030303ff",87,"1|f",87,"2|404040ff",87,"4|6e6e6eff",88,"0|155210",88,"1|155210",88,"4|224409",89,"0|050505ff",89,"4|a6a6a6ff",90,"0|40",90,"1|40",90,"2|5",90,"3|5",90,"4|5",90,"5|5",90,"6|5",90,"7|5",90,"8|-0.001",91,"0|40",91,"1|40",91,"2|5",91,"3|5",91,"4|5",91,"5|5",91,"6|5",91,"7|5",91,"8|-0.001",92,"0|0",92,"1|0",92,"2|0",92,"3|0",92,"4|0",92,"5|0",92,"6|0",92,"7|0",92,"8|-0.001",93,"0|0.2",93,"1|0.2",93,"2|0",93,"3|0",93,"4|0.2",93,"5|0",93,"6|0",93,"7|0",93,"8|-0.001",94,"0|453906",94,"1|453908",94,"2|453909",94,"3|453912",94,"4|35058",94,"5|453911",94,"6|453911",95,"0|f",95,"2|ffffff00",95,"3|ffffff00",95,"5|f",95,"6|070707ff",95,"7|0",96,"0|0",96,"1|0",96,"2|0",96,"3|0",96,"4|0",96,"5|0",96,"6|0",96,"7|0",96,"8|-0.001",97,"453996",98,"0|241916cd",98,"1|ffffff00",98,"2|f",100,"0|090404ff",101,"0|5",101,"1|5",101,"2|5",101,"3|5",101,"4|-0.001",102,"0|5",102,"1|5",102,"2|5",102,"3|5",102,"4|-0.001",103,"0|0",103,"1|0",103,"2|0",103,"3|0",103,"4|-0.001",104,"0|0",104,"1|0",104,"2|0",104,"3|0",104,"4|-0.001",106,"0|f",106,"2|ffffff00",106,"3|0",107,"0|0",107,"1|0",107,"2|0",107,"3|0",107,"4|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"453997",120,"0|050505ff",120,"1|bababaff",120,"2|241916cd",120,"3|ffffff00",121,"0|32115",122,"0|ff1a1aff",122,"2|090404ff",123,"0|30",123,"1|5",123,"2|5",123,"3|5",123,"4|-0.001",124,"0|30",124,"1|5",124,"2|5",124,"3|5",124,"4|-0.001",125,"0|0",125,"1|0",125,"2|0",125,"3|0",125,"4|-0.001",126,"0|1",126,"1|0",126,"2|0",126,"3|0",126,"4|-0.001",127,"0|453888",127,"1|453889",128,"0|f",128,"1|4e4e4eff",128,"2|ffffff00",128,"3|0",129,"0|0",129,"1|0",129,"2|0",129,"3|0",129,"4|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|-0.001",157,"1|-0.001",157,"2|-0.001",158,"0|-0.001",158,"1|-0.001",158,"2|-0.001",161,"0|-0.001",161,"1|-0.001",161,"2|-0.001",162,"0|-0.001",162,"1|-0.001",162,"2|-0.001",163,"92726",166,1.5,169,"453968",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",192,"0|070707ff",192,"1|f",192,"2|424242ff",194,"0|ff1a1aff",196,"0|f",196,"2|ffffff00",196,"3|0",197,"0|0",197,"1|0",197,"2|0",197,"3|0",197,"4|-0.001",198,"0|1",198,"1|1",198,"2|1",198,"3|1",198,"4|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|30",205,"1|5",205,"2|5",205,"3|5",205,"4|-0.001",206,"0|30",206,"1|5",206,"2|5",206,"3|5",206,"4|-0.001",207,"0|0",207,"1|0",207,"2|0",207,"3|0",207,"4|-0.001",208,"0|0",208,"1|0",208,"2|0",208,"3|0",208,"4|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0],"version":1,"slotData":["1$453959$0.04,-0.95,12.97|0,0,0|1,1,1","6$453958$-5.7,0.07,-1.06|0.38,-88.99,-5.74|1,1,1","12$453934$0,0,0|0,0,0|1,1,1"],"dynDecor":["","","","","","","",""]}` },
        { npcId: `0D645A2E`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"517456",87,"4|f",90,"0|-0.001",90,"1|-0.001",90,"2|-0.001",90,"3|-0.001",90,"4|-0.001",90,"5|-0.001",90,"6|-0.001",90,"7|-0.001",90,"8|-0.001",91,"0|-0.001",91,"1|-0.001",91,"2|-0.001",91,"3|-0.001",91,"4|-0.001",91,"5|-0.001",91,"6|-0.001",91,"7|-0.001",91,"8|-0.001",92,"0|-0.001",92,"1|-0.001",92,"2|-0.001",92,"3|-0.001",92,"4|-0.001",92,"5|-0.001",92,"6|-0.001",92,"7|-0.001",92,"8|-0.001",93,"0|-0.001",93,"1|-0.001",93,"2|-0.001",93,"3|-0.001",93,"4|-0.001",93,"5|-0.001",93,"6|-0.001",93,"7|-0.001",93,"8|-0.001",96,"0|-0.001",96,"1|-0.001",96,"2|-0.001",96,"3|-0.001",96,"4|-0.001",96,"5|-0.001",96,"6|-0.001",96,"7|-0.001",96,"8|-0.001",97,"517395",98,"4|f",101,"0|-0.001",101,"1|-0.001",101,"2|-0.001",101,"3|-0.001",101,"4|-0.001",101,"5|-0.001",101,"6|-0.001",101,"7|-0.001",101,"8|-0.001",102,"0|-0.001",102,"1|-0.001",102,"2|-0.001",102,"3|-0.001",102,"4|-0.001",102,"5|-0.001",102,"6|-0.001",102,"7|-0.001",102,"8|-0.001",103,"0|-0.001",103,"1|-0.001",103,"2|-0.001",103,"3|-0.001",103,"4|-0.001",103,"5|-0.001",103,"6|-0.001",103,"7|-0.001",103,"8|-0.001",104,"0|-0.001",104,"1|-0.001",104,"2|-0.001",104,"3|-0.001",104,"4|-0.001",104,"5|-0.001",104,"6|-0.001",104,"7|-0.001",104,"8|-0.001",107,"0|-0.001",107,"1|-0.001",107,"2|-0.001",107,"3|-0.001",107,"4|-0.001",107,"5|-0.001",107,"6|-0.001",107,"7|-0.001",107,"8|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"517425",120,"0|f",123,"0|-0.001",123,"1|-0.001",123,"2|-0.001",123,"3|-0.001",123,"4|-0.001",123,"5|-0.001",123,"6|-0.001",123,"7|-0.001",123,"8|-0.001",124,"0|-0.001",124,"1|-0.001",124,"2|-0.001",124,"3|-0.001",124,"4|-0.001",124,"5|-0.001",124,"6|-0.001",124,"7|-0.001",124,"8|-0.001",125,"0|-0.001",125,"1|-0.001",125,"2|-0.001",125,"3|-0.001",125,"4|-0.001",125,"5|-0.001",125,"6|-0.001",125,"7|-0.001",125,"8|-0.001",126,"0|-0.001",126,"1|-0.001",126,"2|-0.001",126,"3|-0.001",126,"4|-0.001",126,"5|-0.001",126,"6|-0.001",126,"7|-0.001",126,"8|-0.001",129,"0|-0.001",129,"1|-0.001",129,"2|-0.001",129,"3|-0.001",129,"4|-0.001",129,"5|-0.001",129,"6|-0.001",129,"7|-0.001",129,"8|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"517457",170,"eb6e71ff",171,"899effff",172,0.571,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",192,"0|f",197,"0|-0.001",197,"1|-0.001",197,"2|-0.001",197,"3|-0.001",197,"4|-0.001",197,"5|-0.001",197,"6|-0.001",197,"7|-0.001",197,"8|-0.001",198,"0|-0.001",198,"1|-0.001",198,"2|-0.001",198,"3|-0.001",198,"4|-0.001",198,"5|-0.001",198,"6|-0.001",198,"7|-0.001",198,"8|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",205,"1|-0.001",205,"2|-0.001",205,"3|-0.001",205,"4|-0.001",205,"5|-0.001",205,"6|-0.001",205,"7|-0.001",205,"8|-0.001",206,"0|-0.001",206,"1|-0.001",206,"2|-0.001",206,"3|-0.001",206,"4|-0.001",206,"5|-0.001",206,"6|-0.001",206,"7|-0.001",206,"8|-0.001",207,"0|-0.001",207,"1|-0.001",207,"2|-0.001",207,"3|-0.001",207,"4|-0.001",207,"5|-0.001",207,"6|-0.001",207,"7|-0.001",207,"8|-0.001",208,"0|-0.001",208,"1|-0.001",208,"2|-0.001",208,"3|-0.001",208,"4|-0.001",208,"5|-0.001",208,"6|-0.001",208,"7|-0.001",208,"8|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,228,"0|569606",228,"2|570598",228,"6|571428"],"version":1,"dynDecor":["569606","","570598","","","","571428",""]}` },
        { npcId: `1EBDA70C`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"557538",90,"0|-0.001",91,"0|-0.001",92,"0|-0.001",93,"0|-0.001",96,"0|-0.001",97,"557526",101,"0|-0.001",102,"0|-0.001",103,"0|-0.001",104,"0|-0.001",107,"0|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"557512",123,"0|-0.001",124,"0|-0.001",125,"0|-0.001",126,"0|-0.001",129,"0|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"557567",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",197,"0|-0.001",198,"0|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",206,"0|-0.001",207,"0|-0.001",208,"0|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,228,"0|569606",228,"2|570598",228,"6|571428"],"version":1,"slotData":["12$557283$-17.49,-1.53,-129.02|0,90,0|1,1,1"],"dynDecor":["569606","","570598","","","","571428",""]}` },
        { npcId: `040FC2FF`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"569437",90,"0|-0.001",91,"0|-0.001",92,"0|-0.001",93,"0|-0.001",96,"0|-0.001",97,"562437",101,"0|-0.001",102,"0|-0.001",103,"0|-0.001",104,"0|-0.001",107,"0|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"571247",123,"0|-0.001",124,"0|-0.001",125,"0|-0.001",126,"0|-0.001",129,"0|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"570494",170,"0e0e0eff",171,"f",172,1,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",197,"0|-0.001",198,"0|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",206,"0|-0.001",207,"0|-0.001",208,"0|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,228,"0|569606",228,"2|570598",228,"6|571428"],"version":1,"dynDecor":["569606","","570598","","","","571428",""]}` },
        // { npcId: `2F3C785A`, shareId: `{"apiValue":[0,"76618",1,0,2,0,3,0,4,0,5,0,6,0,7,0,8,0,9,0,10,0,11,0,12,0,13,0,14,0,15,0,16,0,17,0,18,0,19,0,20,0,21,0,22,0,23,0,24,0,25,0,26,0,27,0,28,0,29,0,30,0,31,0,32,0,33,0,34,0,35,0,36,0,37,0,38,0,39,0,40,0,41,0,42,0,43,0,44,0,45,0,46,0,47,0,48,0,49,0,50,0,51,1,52,1,53,1,54,0,56,0,58,0,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,"483019",90,"0|-0.001",90,"1|-0.001",90,"2|-0.001",90,"3|-0.001",90,"4|-0.001",91,"0|-0.001",91,"1|-0.001",91,"2|-0.001",91,"3|-0.001",91,"4|-0.001",92,"0|-0.001",92,"1|-0.001",92,"2|-0.001",92,"3|-0.001",92,"4|-0.001",93,"0|-0.001",93,"1|-0.001",93,"2|-0.001",93,"3|-0.001",93,"4|-0.001",96,"0|-0.001",96,"1|-0.001",96,"2|-0.001",96,"3|-0.001",96,"4|-0.001",97,"482996",101,"0|-0.001",101,"1|-0.001",101,"2|-0.001",101,"3|-0.001",101,"4|-0.001",102,"0|-0.001",102,"1|-0.001",102,"2|-0.001",102,"3|-0.001",102,"4|-0.001",103,"0|-0.001",103,"1|-0.001",103,"2|-0.001",103,"3|-0.001",103,"4|-0.001",104,"0|-0.001",104,"1|-0.001",104,"2|-0.001",104,"3|-0.001",104,"4|-0.001",107,"0|-0.001",107,"1|-0.001",107,"2|-0.001",107,"3|-0.001",107,"4|-0.001",108,"75663",112,"0|-0.001",113,"0|-0.001",114,"0|-0.001",115,"0|-0.001",118,"0|-0.001",119,"483020",123,"0|-0.001",123,"1|-0.001",123,"2|-0.001",123,"3|-0.001",123,"4|-0.001",123,"5|-0.001",123,"6|-0.001",123,"7|-0.001",123,"8|-0.001",124,"0|-0.001",124,"1|-0.001",124,"2|-0.001",124,"3|-0.001",124,"4|-0.001",124,"5|-0.001",124,"6|-0.001",124,"7|-0.001",124,"8|-0.001",125,"0|-0.001",125,"1|-0.001",125,"2|-0.001",125,"3|-0.001",125,"4|-0.001",125,"5|-0.001",125,"6|-0.001",125,"7|-0.001",125,"8|-0.001",126,"0|-0.001",126,"1|-0.001",126,"2|-0.001",126,"3|-0.001",126,"4|-0.001",126,"5|-0.001",126,"6|-0.001",126,"7|-0.001",126,"8|-0.001",129,"0|-0.001",129,"1|-0.001",129,"2|-0.001",129,"3|-0.001",129,"4|-0.001",129,"5|-0.001",129,"6|-0.001",129,"7|-0.001",129,"8|-0.001",130,"398608",131,"00000000",132,"398609",133,"398607",134,"00000000",135,"48041",136,"f",137,"48026",138,"ffeccd00",139,"32115",140,"5032b7ff",141,0.019,142,-0.009,143,0.466,145,"32115",146,"72171800",147,"32115",148,"9d141b00",149,"32115",150,"962d2d00",151,"0|32115",151,"1|32115",151,"2|32115",152,"0|0",152,"1|0",152,"2|0",153,"0|0",153,"1|0",153,"2|0",154,"0|0",154,"1|0",154,"2|0",155,"0|6",155,"1|6",155,"2|6",156,"ffd8d8ff",157,"0|0",157,"1|0",157,"2|0",158,"0|0",158,"1|0",158,"2|0",159,"0|32115",159,"1|32115",159,"2|32115",160,"0|f",160,"1|f",160,"2|f",161,"0|0",161,"1|0",161,"2|0",162,"0|10",162,"1|10",162,"2|10",163,"92726",166,1.5,169,"482988",172,-0.001,175,2,176,"0|f",176,"1|f",176,"2|f",178,"f",179,"f",184,0,190,"0|-0.001",191,"0|-0.001",197,"0|-0.001",197,"1|-0.001",197,"2|-0.001",197,"3|-0.001",197,"4|-0.001",198,"0|-0.001",198,"1|-0.001",198,"2|-0.001",198,"3|-0.001",198,"4|-0.001",199,1,200,1,201,"0|-0.001",202,"0|-0.001",203,"0|-0.001",204,"0|-0.001",205,"0|-0.001",205,"1|-0.001",205,"2|-0.001",205,"3|-0.001",205,"4|-0.001",206,"0|-0.001",206,"1|-0.001",206,"2|-0.001",206,"3|-0.001",206,"4|-0.001",207,"0|-0.001",207,"1|-0.001",207,"2|-0.001",207,"3|-0.001",207,"4|-0.001",208,"0|-0.001",208,"1|-0.001",208,"2|-0.001",208,"3|-0.001",208,"4|-0.001",210,0,211,0,212,0,213,0,214,0,215,0,216,0,217,0,218,0,228,"0|569606",228,"2|570598",228,"6|571428"],"version":1,"slotData":["1$482566$0,0,0|0,0,0|1,1,1","6$482886$-8.01,-0.35,-1.21|0,-90,0|1.06,1,1","12$482839$16.97,-22.64,-50.61|-31.21,88.3,0.99|1,1,1"],"dynDecor":["569606","","570598","","","","571428",""]}` },
    ];

    public initNpc(): void {
        if (!this.tryOnConfigData.isInitNpc && !mw.SystemUtil.isPIE) return;
        let i = 0;
        this.npcIds.forEach((value: { npcId: string; shareId: string; }, index: number) => {
            mw.GameObject.asyncFindGameObjectById(value.npcId).then(async (npc: mw.Character) => {
                await TimeUtil.delaySecond(i++);
                AvatarApi.setDescriptionByApiData2(npc, JSON.parse(value.shareId) as AvatarApi.DescriptionApiData);
            });
        });
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
    public isInitNpc: boolean = false;
    public isOpenAvatarEditor: boolean = false;

    public constructor(data: any) {
        if (!data) return;
        this.isOpenTryOn = data?.isOpenTryOn;
        this.isInitNpc = data?.isInitNpc;
        this.isOpenAvatarEditor = data?.isOpenAvatarEditor;
    }
}