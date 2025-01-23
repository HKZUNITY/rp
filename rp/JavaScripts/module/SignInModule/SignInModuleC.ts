import { Notice } from "../../common/notice/Notice";
import { GameConfig } from "../../configs/GameConfig";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import { HUDModuleC } from "../HUDModule/HUDModule";
import SignInData, { SignInConfigData } from "./SignInData";
import SignInModuleS from "./SignInModuleS";
import SignInPanel from "./ui/SignInPanel";

export default class SignInModuleC extends ModuleC<SignInModuleS, SignInData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private signInPanel: SignInPanel = null;
    private get getSignInPanel(): SignInPanel {
        if (!this.signInPanel) {
            this.signInPanel = UIService.getUI(SignInPanel);
        }
        return this.signInPanel;
    }

    public signInAction: Action2<number, string> = new Action2<number, string>();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
    }

    private bindAction(): void {
        this.getHUDModuleC.onOpenSignInAction.add(this.addOpenSignInAction.bind(this));
        this.signInAction.add(this.addSignInAction.bind(this));
    }

    private isInitSignInPanel: boolean = false;
    private addOpenSignInAction(): void {
        if (!this.signInConfigData || !this.signInConfigData?.isOpen || this.day <= 0) {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_1.Value);
            return;
        }
        if (!this.isInitSignInPanel) {
            this.getSignInPanel.initPanel(this.signInConfigData, this.day);
            this.isInitSignInPanel = true;
        }
        this.getSignInPanel.show();
    }

    private addSignInAction(day: number, sharedId: string): void {
        if (day <= this.day) {
            ExecutorManager.instance.pushAsyncExecutor(async () => {
                this.getSignInPanel.hide();
                if (sharedId && sharedId?.length > 0) await Utils.applySharedId(this.localPlayer.character, sharedId);
                Notice.showDownNotice(GameConfig.Language.Text_SignIn_2.Value);
            });
        } else {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_3.Value);
        }
    }

    private signInConfigData: SignInConfigData = null;
    private day: number = 0;
    public net_syncSignInConfigData(signInConfigData: SignInConfigData, day: number): void {
        this.signInConfigData = signInConfigData;
        this.day = day;
        if (this.signInConfigData && this.signInConfigData?.isOpen) return;
        let data = {
            "isOpen": true,
            "totalDay": 6,
            "signInUserDatas": [
                {
                    "shareId": "102EH33D",
                    "icon": ""
                },
                {
                    "shareId": "102EH2HF",
                    "icon": ""
                },
                {
                    "shareId": "102EH2DZ",
                    "icon": ""
                },
                {
                    "shareId": "102EH2ZR",
                    "icon": ""
                },
                {
                    "shareId": "102EH2II",
                    "icon": ""
                },
                {
                    "shareId": "102EH168",
                    "icon": ""
                }
            ]
        }
        this.signInConfigData = new SignInConfigData(data);
    }
}