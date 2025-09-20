import { Notice } from "../../../common/notice/Notice";
import { GameConfig } from "../../../configs/GameConfig";
import GlobalData from "../../../GlobalData";
import Utils from "../../../tools/Utils";
import RankPanel_Generate from "../../../ui-generate/module/RankModule/RankPanel_generate";
import { MoneyWorldData, RoomData, WorldData } from "../RankData";
import RankModuleC from "../RankModuleC";
import RoomItem from "./RoomItem";
import WorldItem from "./WorldItem";

export default class RankPanel extends RankPanel_Generate {
	private rankModuleC: RankModuleC = null;
	private get getRankModuleC(): RankModuleC {
		if (!this.rankModuleC) {
			this.rankModuleC = ModuleService.getModule(RankModuleC);
		}
		return this.rankModuleC;
	}

	/** 
	 * 构造UI文件成功后，在合适的时机最先初始化一次 
	 */
	protected onStart() {
		//设置能否每帧触发onUpdate
		this.canUpdate = false;
		this.layer = UILayerTop;
		this.initUI();
		this.bindButton();
	}

	private bindButton(): void {
		this.mOpenRoomRankButton.onClicked.add(this.bindOpenRoomRankButton.bind(this));
		this.mCloseRoomButton.onClicked.add(this.bindCloseRoomButton.bind(this));

		this.mCloseWorldButton.onClicked.add(this.bindCloseWorldButton.bind(this));
		this.getRankModuleC.onOpenWorldRankAction.add(this.addOpenWorldRankAction.bind(this));

		this.mCloseMoneyWorldButton.onClicked.add(this.bindCloseMoneyWorldButton.bind(this));
		this.getRankModuleC.onOpenMoneyWorldRankAction.add(this.addOpenMoneyWorldRankAction.bind(this));
	}

	private initUI(): void {
		this.mRoomRankTextBlock.text = GameConfig.Language.Text_Ranking.Value;
		this.mRoomNameTextBlock.text = GameConfig.Language.Text_Nickname.Value;
		this.mRoomScoreTextBlock.text = GameConfig.Language.Text_Score.Value;
		this.mRoomMoneyTextBlock.text = `富豪积分`;

		this.mTitleTextBlock.text = StringUtil.format(GameConfig.Language.Text_TopInTermsOfDuration.Value, GlobalData.worldCount);
		this.mMoneyTitleTextBlock.text = `富豪榜前${GlobalData.worldCount}名`

		this.mWorldRankTextBlock.text = GameConfig.Language.Text_Ranking.Value;
		this.mWorldNameTextBlock.text = GameConfig.Language.Text_Nickname.Value;
		this.mWorldTimeTextBlock.text = GameConfig.Language.Text_Duration.Value;

		this.mMoneyWorldRankTextBlock.text = GameConfig.Language.Text_Ranking.Value;
		this.mMoneyWorldNameTextBlock.text = GameConfig.Language.Text_Nickname.Value;
		this.mMoneyWorldTimeTextBlock.text = `富豪积分`;

		Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.SelfHitTestInvisible);
		Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.Collapsed);

		Utils.setWidgetVisibility(this.mCloseWorldButton, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mWorldCanvas, mw.SlateVisibility.Collapsed);

		Utils.setWidgetVisibility(this.mCloseMoneyWorldButton, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mMoneyWorldCanvas, mw.SlateVisibility.Collapsed);

		if (GlobalData.languageId == 0) {
			this.mRoomRankTextBlock.fontSize = 15;
			this.mRoomNameTextBlock.fontSize = 15;
			this.mRoomScoreTextBlock.fontSize = 15;
			this.mWorldRankTextBlock.fontSize = 15;
			this.mWorldNameTextBlock.fontSize = 15;
			this.mWorldTimeTextBlock.fontSize = 15;
		}
	}

	private bindOpenRoomRankButton(): void {
		if (!this.roomItems || this.roomItems?.length == 0) {
			Notice.showDownNotice(GameConfig.Language.Text_Rank1.Value);
			return;
		}
		Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private bindCloseRoomButton(): void {
		Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private addOpenWorldRankAction(): void {
		Utils.setWidgetVisibility(this.mCloseWorldButton, mw.SlateVisibility.Visible);
		Utils.setWidgetVisibility(this.mWorldCanvas, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private bindCloseWorldButton(): void {
		Utils.setWidgetVisibility(this.mCloseWorldButton, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mWorldCanvas, mw.SlateVisibility.Collapsed);
	}

	private addOpenMoneyWorldRankAction(): void {
		Utils.setWidgetVisibility(this.mCloseMoneyWorldButton, mw.SlateVisibility.Visible);
		Utils.setWidgetVisibility(this.mMoneyWorldCanvas, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private bindCloseMoneyWorldButton(): void {
		Utils.setWidgetVisibility(this.mCloseMoneyWorldButton, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mMoneyWorldCanvas, mw.SlateVisibility.Collapsed);
	}

	public refreshRankPanel_RoomWorld(roomDatas: RoomData[], curRoomIndex: number,
		worldDatas: WorldData[], curWorldIndex: number): void {
		if (roomDatas && roomDatas?.length > 0) {
			this.refreshRoomRankPanel(roomDatas, curRoomIndex);
			Utils.setWidgetVisibility(this.mOpenRoomRankImage, mw.SlateVisibility.Collapsed);
			Utils.setWidgetVisibility(this.mRoomCanvas, mw.SlateVisibility.SelfHitTestInvisible);
		}
		if (worldDatas && worldDatas?.length > 0) this.refreshWorldRankPanel(worldDatas, curWorldIndex);
	}

	public refreshRankPanel_RoomMoneyWorld(roomDatas: RoomData[], curRoomIndex: number,
		moneyWorldDatas: MoneyWorldData[], curMoneyWorldIndex: number): void {
		if (roomDatas && roomDatas?.length > 0) this.refreshRoomRankPanel(roomDatas, curRoomIndex);
		this.refreshRankPanel_MoneyWorld(moneyWorldDatas, curMoneyWorldIndex);
	}

	public refreshRankPanel_Room(roomDatas: RoomData[], curRoomIndex: number): void {
		if (roomDatas && roomDatas?.length > 0) this.refreshRoomRankPanel(roomDatas, curRoomIndex);
	}

	private roomItems: RoomItem[] = [];
	private refreshRoomRankPanel(roomDatas: RoomData[], curRoomIndex: number): void {
		if (roomDatas.length > this.roomItems.length) {
			for (let i = 0; i < this.roomItems.length; ++i) {
				this.roomItems[i].setData(i + 1, roomDatas[i], i == curRoomIndex);
				Utils.setWidgetVisibility(this.roomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.roomItems.length; i < roomDatas.length; ++i) {
				let redItem = UIService.create(RoomItem);
				redItem.setData(i + 1, roomDatas[i], i == curRoomIndex);
				this.mRoomContentCanvas.addChild(redItem.uiObject);
				this.roomItems.push(redItem);
			}
		} else {
			for (let i = 0; i < roomDatas.length; ++i) {
				this.roomItems[i].setData(i + 1, roomDatas[i], i == curRoomIndex);
				Utils.setWidgetVisibility(this.roomItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = roomDatas.length; i < this.roomItems.length; ++i) {
				Utils.setWidgetVisibility(this.roomItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	public refreshRankPanel_World(worldDatas: WorldData[], curWorldIndex: number): void {
		if (worldDatas && worldDatas?.length > 0) this.refreshWorldRankPanel(worldDatas, curWorldIndex);
	}

	public refreshRankPanel_MoneyWorld(moneyWorldDatas: MoneyWorldData[], curMoneyWorldIndex: number): void {
		if (moneyWorldDatas && moneyWorldDatas?.length > 0) this.refreshMoneyWorldRankPanel(moneyWorldDatas, curMoneyWorldIndex);
	}

	private worldItems: WorldItem[] = [];
	private refreshWorldRankPanel(worldDatas: WorldData[], curWorldIndex: number): void {
		if (worldDatas.length > this.worldItems.length) {
			for (let i = 0; i < this.worldItems.length; ++i) {
				this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
				Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.worldItems.length; i < worldDatas.length; ++i) {
				let worldItem = UIService.create(WorldItem);
				worldItem.setData(i + 1, worldDatas[i], i == curWorldIndex);
				this.mWorldContentCanvas.addChild(worldItem.uiObject);
				this.worldItems.push(worldItem);
			}
		} else {
			for (let i = 0; i < worldDatas.length; ++i) {
				this.worldItems[i].setData(i + 1, worldDatas[i], i == curWorldIndex);
				Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = worldDatas.length; i < this.worldItems.length; ++i) {
				Utils.setWidgetVisibility(this.worldItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	private moneyWorldItems: WorldItem[] = [];
	private refreshMoneyWorldRankPanel(moneyWorldDatas: MoneyWorldData[], curMoneyWorldIndex: number): void {
		if (moneyWorldDatas.length > this.moneyWorldItems.length) {
			for (let i = 0; i < this.moneyWorldItems.length; ++i) {
				this.moneyWorldItems[i].setData(i + 1, moneyWorldDatas[i], i == curMoneyWorldIndex);
				Utils.setWidgetVisibility(this.moneyWorldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.moneyWorldItems.length; i < moneyWorldDatas.length; ++i) {
				let worldItem = UIService.create(WorldItem);
				worldItem.setData(i + 1, moneyWorldDatas[i], i == curMoneyWorldIndex);
				this.mMoneyWorldContentCanvas.addChild(worldItem.uiObject);
				this.moneyWorldItems.push(worldItem);
			}
		} else {
			for (let i = 0; i < moneyWorldDatas.length; ++i) {
				this.moneyWorldItems[i].setData(i + 1, moneyWorldDatas[i], i == curMoneyWorldIndex);
				Utils.setWidgetVisibility(this.moneyWorldItems[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = moneyWorldDatas.length; i < this.moneyWorldItems.length; ++i) {
				Utils.setWidgetVisibility(this.moneyWorldItems[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	public refreshSelfWorldNameAndTimeUI(roomData: RoomData): void {
		this.mSelfWorldNameTextBlock.text = roomData.playerName;
		this.mSelfWorldTimeTextBlock.text = roomData.time.toString();

		this.mSelfMoneyWorldNameTextBlock.text = roomData.playerName;
		this.mSelfMoneyWorldTimeTextBlock.text = roomData.time.toString();
	}

	public refreshSelfWorldRankUI(ranking: number): void {
		if (ranking == -1) {
			this.mSelfWorldRankTextBlock.text = GameConfig.Language.Text_NoOnTheList.Value;
		} else {
			this.mSelfWorldRankTextBlock.text = (ranking + 1).toString();
		}
	}

	public refreshSelfMoneyWorldRankUI(ranking: number): void {
		if (ranking == -1) {
			this.mSelfMoneyWorldRankTextBlock.text = GameConfig.Language.Text_NoOnTheList.Value;
		} else {
			this.mSelfMoneyWorldRankTextBlock.text = (ranking + 1).toString();
		}
	}
}