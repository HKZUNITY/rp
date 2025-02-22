import { update } from "./common/notice/Tween";
import { GameConfig } from "./configs/GameConfig";
import GlobalData from "./GlobalData";
import DanMuModuleC from "./module/DanMuModule/DanMuModuleC";
import DanMuModuleS from "./module/DanMuModule/DanMuModuleS";
import { HUDModuleC, HUDModuleS } from "./module/HUDModule/HUDModule";
import { InteractionModuleC, InteractionModuleS } from "./module/InteractionModule/InteractionModule";
import MallData from "./module/MallModule/MallData";
import MallModuleC from "./module/MallModule/MallModuleC";
import MallModuleS from "./module/MallModule/MallModuleS";
import { NavigationModuleC, NavigationModuleS } from "./module/NavigationModule/NavigationModule";
import { RankData } from "./module/RankModule/RankData";
import RankModuleC from "./module/RankModule/RankModuleC";
import RankModuleS from "./module/RankModule/RankModuleS";
import { SetData, SetModuleC, SetModuleS } from "./module/SetModule/SetModule";
import SignInData from "./module/SignInModule/SignInData";
import SignInModuleC from "./module/SignInModule/SignInModuleC";
import SignInModuleS from "./module/SignInModule/SignInModuleS";

@Component
export default class GameStart extends Script {
    @mw.Property({ displayName: "多语言", group: "脚本设置", enumType: { "系统默认": -1, "英语": 0, "简体中文": 1, "繁体中文": 2, "日语": 3, "韩语": 4 } })
    private languageId: number = -1;

    @mw.Property({ displayName: "是否开启IAA", group: "脚本设置" })
    private isOpenIAA: boolean = true;

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.onStartCS();
        if (mw.SystemUtil.isClient()) {
            this.onStartC();
        } else if (mw.SystemUtil.isServer()) {
            this.onStartS();
        }
    }

    private onStartCS(): void {
        // GlobalData.isOpenIAA = !mw.SystemUtil.isPIE || this.isOpenIAA;
        GlobalData.isOpenIAA = false;
        this.registerModule();
    }

    private registerModule(): void {
        ModuleService.registerModule(HUDModuleS, HUDModuleC, null);
        ModuleService.registerModule(DanMuModuleS, DanMuModuleC, null);
        ModuleService.registerModule(InteractionModuleS, InteractionModuleC, null);
        ModuleService.registerModule(NavigationModuleS, NavigationModuleC, null);
        ModuleService.registerModule(RankModuleS, RankModuleC, RankData);
        ModuleService.registerModule(SetModuleS, SetModuleC, SetData);
        ModuleService.registerModule(SignInModuleS, SignInModuleC, SignInData);
        ModuleService.registerModule(MallModuleS, MallModuleC, MallData);
    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {
        if (mw.SystemUtil.isClient()) {
            this.onUpdateC(dt);
        } else if (mw.SystemUtil.isServer()) {
            this.onUpdateS(dt);
        }
    }
    /**--------------------------------【客户端】-------------------------------- */
    /**客户端的onStart */
    private onStartC(): void {
        this.useUpdate = true;
        this.initLanguage();
    }

    private initLanguage(): void {
        let language = LocaleUtil.getDefaultLocale().toString().toLowerCase();
        console.error(`wfz - language:${language}`);

        let languageId: number = -1;
        if (mw.SystemUtil.isPIE && this.languageId >= 0) {
            languageId = this.languageId;
        } else {
            if (!!language.match("en")) {
                languageId = 0;
            } else if (!!language.match("zh")) {//简体
                languageId = 1;
            } else if (!!language.match("ja")) {
                languageId = 3;
            } else if (!!language.match("ko")) {
                languageId = 4;
            } else {//繁体
                languageId = 2;
            }
        }
        GlobalData.languageId = languageId;
        console.error(`wfz - languageId:${languageId}`);

        GameConfig.initLanguage(languageId, (key) => {
            let ele = GameConfig.Language.getElement(key);
            if (ele == null) return "unknow_" + key;
            return ele.Value;
        });
        mw.UIScript.addBehavior("lan", (ui: mw.StaleButton | mw.TextBlock) => {
            let key: string = ui.text;
            if (!key) return;
            let languageElement = GameConfig.Language.getElement(key);
            if (languageElement) ui.text = languageElement.Value;
        });
    }

    /**客户端的onUpdate */
    private onUpdateC(dt: number): void {
        mw.TweenUtil.TWEEN.update();
        update();
    }
    /**--------------------------------【客户端】-------------------------------- */

    /**--------------------------------【服务端】-------------------------------- */
    /**服务端的onStart */
    private onStartS(): void {
        this.useUpdate = false;
        DataStorage.setTemporaryStorage(SystemUtil.isPIE);
    }

    /**服务端的onUpdate */
    private onUpdateS(dt: number): void {

    }
    /**--------------------------------【服务端】-------------------------------- */
}