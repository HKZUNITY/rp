import { GameConfig } from "../../../configs/GameConfig";
import { ITab1Element } from "../../../configs/Tab1";
import Utils from "../../../tools/Utils";
import MallPanel_Generate from "../../../ui-generate/module/MallModule/MallPanel_generate";
import { TabType, TabIdData } from "../MallData";
import MallModuleC from "../MallModuleC";
import MallTab1 from "./MallTab1";
import MallTab2 from "./MallTab2";
import MallTab3 from "./MallTab3";

export default class MallPanel extends MallPanel_Generate {
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
		this.bindAction();
	}

	private initUI(): void {

	}

	private bindButton(): void {

	}

	private bindAction(): void {
		this.getMallModuleC.onSelectTab1Action.add(this.addSelectTab1Action.bind(this));
		this.getMallModuleC.onSelectTab2Action.add(this.addSelectTab2Action.bind(this));
		this.getMallModuleC.onSelectTab3Action.add(this.addSelectTab3Action.bind(this));
	}

	public initMallPanel(): void {
		this.initTab1();
	}

	private tab1Elements: ITab1Element[] = [];
	private tab1Ids: number[] = [];
	private tab1Id: number = 0;
	private initTab1(): void {
		this.tab1Elements = GameConfig.Tab1.getAllElement();
		if (!this.tab1Elements || this.tab1Elements?.length == 0) {
			this.tab1Ids.length = 0;
			this.tab1Id = 0;
			this.hideTab123Canvas();
			this.initItem(TabType.None);
			return;
		}
		this.showTab1Canvas();
		this.tab1Ids.length = 0;
		this.tab1Elements.forEach((value: ITab1Element) => { this.tab1Ids.push(value.ID); });
		this.updateTab1();
		this.tab1Id = this.tab1Ids[0];//可修改默认
		this.getMallModuleC.onSelectTab1Action.call(this.tab1Id);
		this.initTab2();
	}

	private tab2Ids: number[] = [];
	private tab2Id: number = 0;
	private initTab2(): void {
		let tab1Element = GameConfig.Tab1.getElement(this.tab1Id);
		if (!tab1Element || !tab1Element?.Tab2 || tab1Element.Tab2?.length == 0) {
			this.tab2Ids.length = 0;
			this.tab2Id = 0;
			this.hideTab23Canvas();
			this.initItem(TabType.Tab1);
			return;
		}
		this.showTab2Canvas();
		this.tab2Ids.length = 0;
		this.tab2Ids = Utils.copyArray(tab1Element.Tab2);
		this.updateTab2();
		this.tab2Id = this.getTab2();
		this.getMallModuleC.onSelectTab2Action.call(this.tab2Id);
		this.initTab3();
	}

	private tab3Ids: number[] = [];
	private tab3Id: number = 0;
	private initTab3(): void {
		let tab2Element = GameConfig.Tab2.getElement(this.tab2Id);
		if (!tab2Element || !tab2Element?.Tab3 || tab2Element.Tab3?.length == 0) {
			this.tab3Ids.length = 0;
			this.tab3Id = 0;
			this.hideTab3Canvas();
			this.initItem(TabType.Tab2);
			return;
		}
		this.showTab3Canvas();
		this.tab3Ids.length = 0;
		this.tab3Ids = Utils.copyArray(tab2Element.Tab3);
		this.updateTab3();
		this.tab3Id = this.getTab3();
		this.getMallModuleC.onSelectTab3Action.call(this.tab3Id);
		this.initItem(TabType.Tab3);
	}

	private initItem(tabType: TabType): void {
		this.calculateItemCanvas(tabType);
		switch (tabType) {
			case TabType.None:
				this.clearTabIdDataMap();
				break;
			case TabType.Tab1:
				this.initTab1IdDataMap();
				console.error(`tab1Id:${this.tab1Id}`);
				break;
			case TabType.Tab2:
				this.initTab2IdDataMap();
				console.error(`tab2Id:${this.tab2Id}`);
				break;
			case TabType.Tab3:
				this.initTab3IdDataMap();
				console.error(`tab3Id:${this.tab3Id}`);
				break;
			default:
				break;
		}
		console.error(this.tabIdDataMap.size);
		this.tabIdDataMap.forEach((value: TabIdData) => {
			console.error(JSON.stringify(value));
		});
	}

	private calculateItemCanvas(tabType: TabType): void {
		let positionY = 0;
		let sizeY = 0;
		switch (tabType) {
			case TabType.Tab1:
				positionY = this.mTab1Canvas.position.y;
				sizeY = this.mTab1Canvas.size.y;
				break;
			case TabType.Tab2:
				positionY = this.mTab2Canvas.position.y;
				sizeY = this.mTab2Canvas.size.y;
				break;
			case TabType.Tab3:
				positionY = this.mTab3Canvas.position.y;
				sizeY = this.mTab3Canvas.size.y;
				break;
			default:
				positionY = this.mTab3Canvas.position.y;
				sizeY = this.mTab3Canvas.size.y;
				break;
		}
		this.mItemScrollBox.position = new mw.Vector(0, positionY + sizeY);
	}

	private tabIdDataMap: Map<number, TabIdData> = new Map<number, TabIdData>();
	private clearTabIdDataMap(): void {
		this.tabIdDataMap.clear();
	}

	private getTab2(): number {
		let tab2Id: number = this.tab2Ids[0];//可修改默认
		if (this.tabIdDataMap.has(this.tab1Id)) {
			let tab2IdDataMap = this.tabIdDataMap.get(this.tab1Id).tabIdDataMap;
			if (!tab2IdDataMap || tab2IdDataMap.size == 0) return tab2Id;
			tab2IdDataMap.forEach((value: TabIdData, key: number) => {
				if (value.isOn) tab2Id = key;
			});
			return tab2Id;
		} else {
			return tab2Id;
		}
	}

	private getTab3(): number {
		let tab3Id: number = this.tab3Ids[0];//可修改默认
		if (this.tabIdDataMap.has(this.tab1Id)) {
			let tab2IdDataMap = this.tabIdDataMap.get(this.tab1Id).tabIdDataMap;
			if (!tab2IdDataMap || tab2IdDataMap.size == 0) return tab3Id;
			if (tab2IdDataMap.has(this.tab2Id)) {
				let tab3IdDataMap = tab2IdDataMap.get(this.tab2Id).tabIdDataMap;
				if (!tab3IdDataMap || tab3IdDataMap.size == 0) return tab3Id;
				tab3IdDataMap.forEach((value: TabIdData, key: number) => {
					if (value.isOn) tab3Id = key;
				});
				return tab3Id;
			} else {
				return tab3Id;
			}
		} else {
			return tab3Id;
		}
	}

	private initTab1IdDataMap(): void {
		if (this.tabIdDataMap.has(this.tab1Id)) return;
		let tab1IdData: TabIdData = new TabIdData();
		tab1IdData.tabId = this.tab1Id;
		this.tabIdDataMap.set(this.tab1Id, tab1IdData);
		this.tabIdDataMap.forEach((value: TabIdData, key: number) => {
			value.isOn = (key == this.tab1Id);
		});
	}

	private initTab2IdDataMap(): void {
		let tab1IdData: TabIdData = null;
		if (this.tabIdDataMap.has(this.tab1Id)) {
			tab1IdData = this.tabIdDataMap.get(this.tab1Id);
			if (tab1IdData.tabIdDataMap.has(this.tab2Id)) {
			} else {
				let tab2IdData = new TabIdData();
				tab2IdData.tabId = this.tab2Id;
				tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
			}
			tab1IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
				value.isOn = (key == this.tab2Id);
			});
		} else {
			tab1IdData = new TabIdData();
			tab1IdData.tabId = this.tab1Id;

			let tab2IdData = new TabIdData();
			tab2IdData.tabId = this.tab2Id;
			tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
			tab1IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
				value.isOn = (key == this.tab2Id);
			});

			this.tabIdDataMap.set(this.tab1Id, tab1IdData);
			this.tabIdDataMap.forEach((value: TabIdData, key: number) => {
				value.isOn = (key == this.tab1Id);
			});
		}
	}

	private initTab3IdDataMap(): void {
		let tab1IdData: TabIdData = null;
		if (this.tabIdDataMap.has(this.tab1Id)) {
			tab1IdData = this.tabIdDataMap.get(this.tab1Id);
			let tab2IdData = new TabIdData();
			if (tab1IdData.tabIdDataMap.has(this.tab2Id)) {
				tab2IdData = tab1IdData.tabIdDataMap.get(this.tab2Id);
				if (tab2IdData.tabIdDataMap.has(this.tab3Id)) {
				} else {
					let tab3IdData = new TabIdData();
					tab3IdData.tabId = this.tab3Id;
					tab2IdData.tabIdDataMap.set(this.tab3Id, tab3IdData);
				}
				tab2IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
					value.isOn = (key == this.tab3Id);
				});
			} else {
				tab2IdData.tabId = this.tab2Id;
				tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
				tab1IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
					value.isOn = (key == this.tab2Id);
				});

				let tab3IdData = new TabIdData();
				tab3IdData.tabId = this.tab3Id;
				tab2IdData.tabIdDataMap.set(this.tab3Id, tab3IdData);
				tab2IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
					value.isOn = (key == this.tab3Id);
				});
			}
		} else {
			tab1IdData = new TabIdData();
			tab1IdData.tabId = this.tab1Id;

			let tab2IdData = new TabIdData();
			tab2IdData.tabId = this.tab2Id;
			tab1IdData.tabIdDataMap.set(this.tab2Id, tab2IdData);
			tab1IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
				value.isOn = (key == this.tab2Id);
			});

			let tab3IdData = new TabIdData();
			tab3IdData.tabId = this.tab3Id;
			tab2IdData.tabIdDataMap.set(this.tab3Id, tab3IdData);
			tab2IdData.tabIdDataMap.forEach((value: TabIdData, key: number) => {
				value.isOn = (key == this.tab3Id);
			});

			this.tabIdDataMap.set(this.tab1Id, tab1IdData);
			this.tabIdDataMap.forEach((value: TabIdData, key: number) => {
				value.isOn = (key == this.tab1Id);
			});
		}
	}

	private hideTab123Canvas(): void {
		Utils.setWidgetVisibility(this.mTab1Canvas, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mTab2Canvas, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.Collapsed);
	}

	private hideTab23Canvas(): void {
		Utils.setWidgetVisibility(this.mTab2Canvas, mw.SlateVisibility.Collapsed);
		Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.Collapsed);
	}

	private hideTab3Canvas(): void {
		Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.Collapsed);
	}

	private showTab1Canvas(): void {
		Utils.setWidgetVisibility(this.mTab1Canvas, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private showTab2Canvas(): void {
		Utils.setWidgetVisibility(this.mTab2Canvas, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private showTab3Canvas(): void {
		Utils.setWidgetVisibility(this.mTab3Canvas, mw.SlateVisibility.SelfHitTestInvisible);
	}

	private addSelectTab1Action(tab1Id: number): void {
		if (this.tab1Id == tab1Id) return;
		this.tab1Id = tab1Id;
		this.initTab2();
	}

	private addSelectTab2Action(tab2Id: number): void {
		if (this.tab2Id == tab2Id) return;
		this.tab2Id = tab2Id;
		this.initTab3();
	}

	private addSelectTab3Action(tab3Id: number): void {
		if (this.tab3Id == tab3Id) return;
		this.tab3Id = tab3Id;
		this.initItem(TabType.Tab3);
	}

	private mallTab1s: MallTab1[] = [];
	private updateTab1(): void {
		if (this.tab1Ids.length >= this.mallTab1s.length) {
			for (let i = 0; i < this.mallTab1s.length; ++i) {
				this.mallTab1s[i].initTab1(this.tab1Ids[i]);
				Utils.setWidgetVisibility(this.mallTab1s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.mallTab1s.length; i < this.tab1Ids.length; ++i) {
				let mallTab1 = UIService.create(MallTab1);
				mallTab1.initTab1(this.tab1Ids[i]);
				this.mTab1ContentCanvas.addChild(mallTab1.uiObject);
				this.mallTab1s.push(mallTab1);
			}
		} else {
			for (let i = 0; i < this.tab1Ids.length; ++i) {
				Utils.setWidgetVisibility(this.mallTab1s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
				this.mallTab1s[i].initTab1(this.tab1Ids[i]);
			}
			for (let i = this.tab1Ids.length; i < this.mallTab1s.length; ++i) {
				Utils.setWidgetVisibility(this.mallTab1s[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	private mallTab2s: MallTab2[] = [];
	private updateTab2(): void {
		if (this.tab2Ids.length >= this.mallTab2s.length) {
			for (let i = 0; i < this.mallTab2s.length; ++i) {
				this.mallTab2s[i].initTab2(this.tab2Ids[i]);
				Utils.setWidgetVisibility(this.mallTab2s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.mallTab2s.length; i < this.tab2Ids.length; ++i) {
				let mallTab2 = UIService.create(MallTab2);
				mallTab2.initTab2(this.tab2Ids[i]);
				this.mTab2ContentCanvas.addChild(mallTab2.uiObject);
				this.mallTab2s.push(mallTab2);
			}
		} else {
			for (let i = 0; i < this.tab2Ids.length; ++i) {
				Utils.setWidgetVisibility(this.mallTab2s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
				this.mallTab2s[i].initTab2(this.tab2Ids[i]);
			}
			for (let i = this.tab2Ids.length; i < this.mallTab2s.length; ++i) {
				Utils.setWidgetVisibility(this.mallTab2s[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}

	private mallTab3s: MallTab3[] = [];
	private updateTab3(): void {
		if (this.tab3Ids.length >= this.mallTab3s.length) {
			for (let i = 0; i < this.mallTab3s.length; ++i) {
				this.mallTab3s[i].initTab3(this.tab3Ids[i]);
				Utils.setWidgetVisibility(this.mallTab3s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
			}
			for (let i = this.mallTab3s.length; i < this.tab3Ids.length; ++i) {
				let mallTab3 = UIService.create(MallTab3);
				mallTab3.initTab3(this.tab3Ids[i]);
				this.mTab3ContentCanvas.addChild(mallTab3.uiObject);
				this.mallTab3s.push(mallTab3);
			}
		} else {
			for (let i = 0; i < this.tab3Ids.length; ++i) {
				Utils.setWidgetVisibility(this.mallTab3s[i].uiObject, mw.SlateVisibility.SelfHitTestInvisible);
				this.mallTab3s[i].initTab3(this.tab3Ids[i]);
			}
			for (let i = this.tab3Ids.length; i < this.mallTab3s.length; ++i) {
				Utils.setWidgetVisibility(this.mallTab3s[i].uiObject, mw.SlateVisibility.Collapsed);
			}
		}
	}
}
