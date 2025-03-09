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
        if (!this.signInConfigData || !this.signInConfigData?.isOpenVersion2 || this.day <= 0) {
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
                await this.useShareId(sharedId);
                Notice.showDownNotice(GameConfig.Language.Text_SignIn_2.Value);
            });
        } else {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_3.Value);
        }
    }

    private async useShareId(shareId: string): Promise<void> {
        if (shareId && shareId?.length > 0) {
            // await Utils.applySharedId(this.localPlayer.character, sharedId);
            // await Utils.asyncDownloadAsset(sharedId);
            // this.localPlayer.character.setDescription([sharedId]);
            // this.localPlayer.character.description.advance.base.characterSetting.characterTemplate = mw.CharacterTemplate.None;
            // await this.localPlayer.character.asyncReady();
            // this.localPlayer.character.syncDescription();
            await this.server.net_useShareId(shareId);
        }
    }

    private signInConfigData: SignInConfigData = null;
    private day: number = 0;
    public net_syncSignInConfigData(signInConfigData: SignInConfigData, day: number): void {
        this.signInConfigData = signInConfigData;
        this.day = day;
        if (this.signInConfigData) return;
        let data = {
            "isOpen": false,
            "isOpenVersion2": true,
            "totalDay": 12,
            "signInUserDatas": [
                {
                    "shareId": "532290",
                    "icon": ""
                },
                {
                    "shareId": "532291",
                    "icon": ""
                },
                {
                    "shareId": "532292",
                    "icon": ""
                },
                {
                    "shareId": "540371",
                    "icon": ""
                },
                {
                    "shareId": "540373",
                    "icon": ""
                },
                {
                    "shareId": "540369",
                    "icon": ""
                },
                {
                    "shareId": "540372",
                    "icon": ""
                },
                {
                    "shareId": "532301",
                    "icon": ""
                },
                {
                    "shareId": "532293",
                    "icon": ""
                },
                {
                    "shareId": "540370",
                    "icon": ""
                },
                {
                    "shareId": "532295",
                    "icon": ""
                },
                {
                    "shareId": "532294",
                    "icon": ""
                }
            ]
        }
        this.signInConfigData = new SignInConfigData(data);
    }

    public get isOpen(): boolean {
        if (!this.signInConfigData || !this.signInConfigData?.isOpen || this.day <= 0) {
            Notice.showDownNotice(GameConfig.Language.Text_SignIn_1.Value);
            return false;
        }
        return true;
    }
}