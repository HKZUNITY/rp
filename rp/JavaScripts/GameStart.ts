import { update } from "./common/notice/Tween";
import DanMuModuleC from "./module/DanMuModule/DanMuModuleC";
import DanMuModuleS from "./module/DanMuModule/DanMuModuleS";
import { HUDModuleC, HUDModuleS } from "./module/HUDModule/HUDModule";
import { InteractionModuleC, InteractionModuleS } from "./module/InteractionModule/InteractionModule";

@Component
export default class GameStart extends Script {

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