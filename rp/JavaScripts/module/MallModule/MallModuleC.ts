import ExecutorManager from "../../tools/WaitingQueue";
import { HUDModuleC } from "../HUDModule/HUDModule";
import MallData from "./MallData";
import MallModuleS from "./MallModuleS";
import MallPanel from "./ui/MallPanel";

export default class MallModuleC extends ModuleC<MallModuleS, MallData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private mallPanel: MallPanel = null;
    private get getMallPanel(): MallPanel {
        if (!this.mallPanel) {
            this.mallPanel = UIService.getUI(MallPanel);
        }
        return this.mallPanel;
    }

    public onSelectTab1Action: Action1<number> = new Action1<number>();
    public onSelectTab2Action: Action1<number> = new Action1<number>();
    public onSelectTab3Action: Action1<number> = new Action1<number>();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
        this.bindEvent();
    }

    private bindAction(): void {
        this.getHUDModuleC?.onOpenMallAction.add(this.addOpenMallAction.bind(this));
    }

    private bindEvent(): void {
        InputUtil.onKeyDown(mw.Keys.O, () => {
            this.addOpenMallAction();
        });
        InputUtil.onKeyDown(mw.Keys.P, () => {
            this.getMallPanel.hide();
        });
    }

    private addOpenMallAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            if (!mw.UIService.getUI(MallPanel, false)?.visible) {
                this.mallPanel = UIService.getUI(MallPanel);
                this.getMallPanel.initMallPanel();
            }
            this.getMallPanel.show();
        });
    }
}