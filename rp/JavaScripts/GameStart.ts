import { update } from "./common/notice/Tween";
import { GameConfig } from "./configs/GameConfig";
import GlobalData from "./GlobalData";
import DanMuModuleC from "./module/DanMuModule/DanMuModuleC";
import DanMuModuleS from "./module/DanMuModule/DanMuModuleS";
import { HUDModuleC, HUDModuleS } from "./module/HUDModule/HUDModule";
import { InteractionModuleC, InteractionModuleS } from "./module/InteractionModule/InteractionModule";
import { NavigationModuleC, NavigationModuleS } from "./module/NavigationModule/NavigationModule";
import { SetModuleS, SetModuleC, SetData } from "./module/SetModule/SetModule";

@Component
export default class GameStart extends Script {
    @mw.Property({ displayName: "多语言", group: "脚本设置", enumType: { "系统默认": -1, "英语": 0, "简体中文": 1, "繁体中文": 2, "日语": 3, "韩语": 4 } })
    private languageId: number = -1;

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
        this.registerModule();
    }

    private registerModule(): void {
        ModuleService.registerModule(HUDModuleS, HUDModuleC, null);
        ModuleService.registerModule(DanMuModuleS, DanMuModuleC, null);
        ModuleService.registerModule(InteractionModuleS, InteractionModuleC, null);
        ModuleService.registerModule(NavigationModuleS, NavigationModuleC, null);
        ModuleService.registerModule(SetModuleS, SetModuleC, SetData);
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