import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import { EventType } from "../../GlobalData";
import { HUDModuleC } from "../HUDModule/HUDModule";
import { InteractionData } from "../InteractionModule/InteractionModule";
import { RankData, RoomData, WorldData } from "./RankData";
import RankModuleS from "./RankModuleS";
import RankPanel from "./ui/RankPanel";

export default class RankModuleC extends ModuleC<RankModuleS, RankData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private rankPanel: RankPanel = null;
    private get getRankPanel(): RankPanel {
        if (!this.rankPanel) {
            this.rankPanel = UIService.getUI(RankPanel);
        }
        return this.rankPanel;
    }

    private userId: string = null;
    private get currentUserId(): string {
        if (this.userId == "" || this.userId == null) {
            this.userId = this.localPlayer.userId;
        }
        return this.userId;
    }

    private interactionData: InteractionData = null;
    private get getInteractionData(): InteractionData {
        if (this.interactionData == null) {
            this.interactionData = DataCenterC.getData(InteractionData);
        }
        return this.interactionData;
    }

    public onOpenWorldRankAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initEventAction();
    }

    private initEventAction(): void {
        this.getHUDModuleC.onOpenRankAction.add(this.addOnOffRankPanelAction.bind(this));
        Event.addLocalListener(EventType.OnOffMainUI, this.addOnOffMainUI.bind(this));
    }

    private addOnOffRankPanelAction(): void {
        this.onOpenWorldRankAction.call();
    }

    private addOnOffMainUI(isShow: boolean): void {
        console.error(`isShow: ${isShow}`);
        if (isShow) {
            this.getRankPanel.show();
        } else {
            this.getRankPanel.hide();
        }
    }

    protected onEnterScene(sceneType: number): void {
        this.getRankPanel.show();
        TimeUtil.delaySecond(5).then(() => {
            let nickName = mw.AccountService.getNickName();
            nickName = nickName ? nickName : "UserId：" + this.currentUserId;
            let bagIds = this.getInteractionData.bagIds;
            let score = (!bagIds) ? 0 : bagIds.length;
            let time = this.data.time;
            this.server.net_onEnterScene(nickName, score, time);
        });
    }

    private roomDatas: RoomData[] = [];
    private recycleRoomDatas: RoomData[] = [];
    private updateRoomDatas(roomUserIds: string[], roomNames: string[], roomScores: number[], roomTimes: number[]): void {
        if (this.roomDatas.length > roomUserIds.length) {
            for (let i = 0; i < roomUserIds.length; ++i) {
                this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomScores[i], roomTimes[i]);
            }
            for (let i = roomUserIds.length; i < this.roomDatas.length; ++i) {
                this.recycleRoomDatas.push(this.roomDatas[i]);
            }
            this.roomDatas.length = roomUserIds.length;
        } else {
            for (let i = 0; i < this.roomDatas.length; ++i) {
                this.roomDatas[i].setData(roomUserIds[i], roomNames[i], roomScores[i], roomTimes[i]);
            }
            for (let i = this.roomDatas.length; i < roomUserIds.length; ++i) {
                let tmpRoomData = null;
                if (this.recycleRoomDatas.length > 0) tmpRoomData = this.recycleRoomDatas.pop();
                if (!tmpRoomData) tmpRoomData = new RoomData(roomUserIds[i], roomNames[i], roomScores[i], roomTimes[i]);
                this.roomDatas.push(tmpRoomData);
            }
        }
    }

    private curRoomIndex: number = -1;
    private updateRoomIndex(): void {
        this.curRoomIndex = -1;
        for (let i = 0; i < this.roomDatas.length; ++i) {
            if (this.roomDatas[i].userId != this.currentUserId) continue;
            this.curRoomIndex = i;
            // console.error("wfz = " + this.curRoomIndex);
            this.getRankPanel.refreshSelfWorldNameAndTimeUI(this.roomDatas[i]);
            break;
        }
    }

    private worldDatas: WorldData[] = [];
    private recycleWorldDatas: WorldData[] = [];
    private updateWorldDatas(worldUserIds: string[], worldNames: string[], worldScores: number[]): void {
        if (this.worldDatas.length > worldUserIds.length) {
            for (let i = 0; i < worldUserIds.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldScores[i]);
            }
            for (let i = worldUserIds.length; i < this.worldDatas.length; ++i) {
                this.recycleWorldDatas.push(this.worldDatas[i]);
            }
            this.worldDatas.length = worldUserIds.length;
        } else {
            for (let i = 0; i < this.worldDatas.length; ++i) {
                this.worldDatas[i].setData(worldUserIds[i], worldNames[i], worldScores[i]);
            }
            for (let i = this.worldDatas.length; i < worldUserIds.length; ++i) {
                let tmpWorldData: WorldData = null;
                if (this.recycleWorldDatas.length > 0) tmpWorldData = this.recycleWorldDatas.pop();
                if (tmpWorldData) {
                    tmpWorldData.setData(worldUserIds[i], worldNames[i], worldScores[i]);
                } else {
                    tmpWorldData = new WorldData(worldUserIds[i], worldNames[i], worldScores[i]);
                }
                this.worldDatas.push(tmpWorldData);
            }
        }
    }

    private curWorldIndex: number = -1;
    private updateWorldIndex(): void {
        this.curWorldIndex = -1;
        for (let i = 0; i < this.worldDatas.length; ++i) {
            if (this.worldDatas[i].userId != this.currentUserId) continue;
            this.curWorldIndex = i;
            break;
        }
        this.getRankPanel.refreshSelfWorldRankUI(this.curWorldIndex);
    }

    public net_syncRoomRankData(roomUserIds: string[], roomNames: string[], roomScores: number[], roomTimes: number[]): void {
        // console.error("wfz = " + roomUserIds.length);
        this.updateRoomDatas(roomUserIds, roomNames, roomScores, roomTimes);
        this.sortRoomData();
        this.updateRoomIndex();
        this.getRankPanel.refreshRankPanel_Room(this.roomDatas, this.curRoomIndex);
    }

    public net_syncWorldRankData(worldUserIds: string[], worldNames: string[], worldScores: number[]): void {
        this.updateWorldDatas(worldUserIds, worldNames, worldScores);
        this.updateWorldIndex();
        this.getRankPanel.refreshRankPanel_World(this.worldDatas, this.curWorldIndex);
    }

    public net_syncRoomWorldRankData(roomUserIds: string[], roomNames: string[], roomScores: number[], roomTimes: number[],
        worldUserIds: string[], worldNames: string[], worldScores: number[]): void {
        this.updateRoomDatas(roomUserIds, roomNames, roomScores, roomTimes);
        this.sortRoomData();
        this.updateRoomIndex();

        this.updateWorldDatas(worldUserIds, worldNames, worldScores);
        this.updateWorldIndex();

        this.getRankPanel.refreshRankPanel_RoomWorld(this.roomDatas, this.curRoomIndex, this.worldDatas, this.curWorldIndex);
    }

    private sortRoomData(): void {
        this.roomDatas.sort((a: RoomData, b: RoomData) => {
            return b.score - a.score;
        });
    }
}