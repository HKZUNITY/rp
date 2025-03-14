import { EventType } from "../../GlobalData";
import Utils from "../../tools/Utils";
import { HUDModuleC } from "../HUDModule/HUDModule";
import SetPanel from "./ui/SetPanel";

export class SetData extends Subdata {
    // @Decorator.persistence()
    // public quality: number = 0;
    @Decorator.persistence()
    public sound: number = 1;
    @Decorator.persistence()
    public bgMusic: number = 1;
    @Decorator.persistence()
    public viewAngle: number = 350;
    @Decorator.persistence()
    public isShowNickName: boolean = true;
    @Decorator.persistence()
    public isTryOn: boolean = true;

    // public setQuality(value: number): void {
    //     this.quality = value;
    //     this.save(false);
    // }

    public setSound(value: number): void {
        this.sound = value;
        this.save(false);
    }

    public setBgMusic(value: number): void {
        this.bgMusic = value;
        this.save(false);
    }

    public setViewAngle(value: number): void {
        this.viewAngle = value;
        this.save(false);
    }

    public setIsShowNickName(value: boolean): void {
        this.isShowNickName = value;
        this.save(false);
    }

    public setIsTryOn(value: boolean): void {
        this.isTryOn = value;
        this.save(false);
    }

    public reset(sound: number, bgMusic: number, viewAngle: number, isShowNickName: boolean, isTryOn: boolean): void {
        // this.quality = 0;
        this.sound = sound;
        this.bgMusic = bgMusic;
        this.viewAngle = viewAngle;
        this.isShowNickName = isShowNickName;
        this.isTryOn = isTryOn;
        this.save(false);
    }
}

export class SetModuleC extends ModuleC<SetModuleS, SetData> {

    private setPanel: SetPanel = null;
    private get getSetPanel(): SetPanel {
        if (this.setPanel == null) {
            this.setPanel = UIService.getUI(SetPanel);
        }
        return this.setPanel;
    }
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (this.hudModuleC == null) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    public onShowNickNameAction: Action1<(isShowNickName: boolean) => void> = new Action1<(isShowNickName: boolean) => void>();
    public onTryOnPermissionAction: Action1<(isTryOn: boolean) => void> = new Action1<(isTryOn: boolean) => void>();

    public onResetAction: Action = new Action();
    public onResetPosAction: Action = new Action();

    public onQualityChangeAction: Action1<number> = new Action1<number>();
    public onSaveQualityAction: Action = new Action();

    public onSoundChangeAction: Action1<number> = new Action1<number>();
    public onSaveSoundAction: Action = new Action();

    public onBgMusicChangeAction: Action1<number> = new Action1<number>();
    public onSaveBgMusicAction: Action = new Action();

    public onViewAngleChangeAction: Action1<number> = new Action1<number>();
    public onSaveViewAngleAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.initEvent();
        InputUtil.onKeyDown(mw.Keys.K, () => {
            console.error(GraphicsSettings.getDefaultCPULevel());
            console.error(GraphicsSettings.getDefaultGPULevel());
            console.error(GraphicsSettings.getGPULevel());
            console.error(GraphicsSettings.getCPULevel());
        })
    }

    protected onEnterScene(sceneType: number): void {
        this.initSetData();
    }

    private initEvent(): void {
        this.getHUDModuleC.onOpenSetAction.add(this.addOpenSetAction.bind(this));
        this.onShowNickNameAction.add(this.addShowNickNameAction.bind(this));
        this.onTryOnPermissionAction.add(this.addTryOnPermissionAction.bind(this));
        this.onResetAction.add(this.addResetAction.bind(this));
        this.onResetPosAction.add(this.addResetPosAction.bind(this));

        this.onQualityChangeAction.add(this.addQualityChangeAction.bind(this));
        this.onSaveQualityAction.add(this.addSaveQualityAction.bind(this));

        this.onSoundChangeAction.add(this.addSoundChangeAction.bind(this));
        this.onSaveSoundAction.add(this.addSaveSoundAction.bind(this));

        this.onBgMusicChangeAction.add(this.addBgMusicChangeAction.bind(this));
        this.onSaveBgMusicAction.add(this.addSaveBgMusicAction.bind(this));

        this.onViewAngleChangeAction.add(this.addViewAngleChangeAction.bind(this));
        this.onSaveViewAngleAction.add(this.addSaveViewAngleAction.bind(this));
        Event.addLocalListener(EventType.OnOffMainUI, this.addOnOffMainUI.bind(this));
    }

    private addOnOffMainUI(isShow: boolean): void {
        console.warn(`wfz - addOnOffMainUI - isShow:${isShow}`);
        if (isShow) return;
        if (UIService.getUI(SetPanel, false)?.visible) this.getSetPanel.hide();
    }

    private isHasSetData: boolean = false;
    private addOpenSetAction(): void {
        if (!this.isHasSetData) {
            this.getSetPanel.setDatas(this.quality, this.sound, this.bgMusic, this.viewAngle, this.isShowNickName, this.isTryOn);
            this.isHasSetData = true;
        }
        if (Camera.currentCamera.springArm.length != this.viewAngle) {
            this.viewAngle = Camera.currentCamera.springArm.length;
            this.getSetPanel.updateViewAngleUI(this.viewAngle);
            this.server.net_sendSetViewAngle(this.viewAngle);
        }
        this.getSetPanel.show();
    }

    private addShowNickNameAction(callBack: (isShowNickName: boolean) => void): void {
        this.isShowNickName = !this.isShowNickName;
        Character.nameVisible = this.isShowNickName;
        this.server.net_sendSetNickName(this.isShowNickName);
        if (callBack) callBack(this.isShowNickName);
    }

    private addTryOnPermissionAction(callBack: (isTryOn: boolean) => void): void {
        this.isTryOn = !this.isTryOn;
        // Character.nameVisible = this.isShowNickName;
        this.server.net_sendSetTryOn(this.isTryOn);
        if (callBack) callBack(this.isTryOn);
    }

    private addResetAction(): void {
        let isReset: boolean = false;
        if (this.quality != GraphicsSettings.getGPULevel()) {
            this.quality = GraphicsSettings.getDefaultGPULevel();
            GraphicsSettings.setGraphicsLevel(this.quality, this.quality);
            isReset = true;
        }

        if (this.sound != 1) {
            this.sound = 1;
            SoundService.volumeScale = this.sound;
            isReset = true;
        }

        if (this.bgMusic != 1) {
            this.bgMusic = 1;
            SoundService.BGMVolumeScale = this.bgMusic;
            isReset = true;
        }

        if (this.viewAngle != 350) {
            this.viewAngle = 350;
            Camera.currentCamera.springArm.length = this.viewAngle;
            isReset = true;
        }

        if (isReset) {
            this.getSetPanel.setDatas(this.quality, this.sound, this.bgMusic, this.viewAngle, this.isShowNickName, this.isTryOn);
            this.server.net_reset(this.sound, this.bgMusic, this.viewAngle, this.isShowNickName, this.isTryOn);
        }
    }

    private addResetPosAction(): void {
        Utils.resetPlayerPos();
    }

    private addQualityChangeAction(value: number): void {
        this.quality = value;
    }

    private addSaveQualityAction(): void {
        GraphicsSettings.setGraphicsLevel(this.quality, this.quality);
    }

    private addSoundChangeAction(value: number): void {
        this.sound = value;
        SoundService.volumeScale = this.sound;
    }

    private addSaveSoundAction(): void {
        this.server.net_setSound(this.sound);
    }

    private addBgMusicChangeAction(value: number): void {
        this.bgMusic = value;
        SoundService.BGMVolumeScale = this.bgMusic;
    }

    private addSaveBgMusicAction(): void {
        this.server.net_setBgMusic(this.bgMusic);
    }

    private addViewAngleChangeAction(value: number): void {
        this.viewAngle = value;
        Camera.currentCamera.springArm.length = value;
    }

    private addSaveViewAngleAction(): void {
        this.server.net_sendSetViewAngle(this.viewAngle);
    }

    private quality: number = 0;
    private sound: number = 0;
    private bgMusic: number = 0;
    private viewAngle: number = 0;
    private isShowNickName: boolean = true;
    private isTryOn: boolean = true;

    private initSetData(): void {
        // this.quality = this.data.quality;
        this.quality = GraphicsSettings.getDefaultGPULevel();
        this.sound = this.data.sound;
        this.bgMusic = this.data.bgMusic;
        this.viewAngle = this.data.viewAngle;
        this.isShowNickName = this.data.isShowNickName;
        this.isTryOn = this.data.isTryOn;
        console.error(`quality:${this.quality}, sound:${this.sound}, bgMusic:${this.bgMusic}, viewAngle:${this.viewAngle}, isShowNickName:${this.isShowNickName}, isTryOn:${this.isTryOn}`);

        // GraphicsSettings.setGraphicsLevel(this.quality, this.quality);
        SoundService.volumeScale = this.sound;
        SoundService.BGMVolumeScale = this.bgMusic;
        Camera.currentCamera.springArm.length = this.viewAngle;
        Character.nameVisible = this.isShowNickName;
    }
}


export class SetModuleS extends ModuleS<SetModuleC, SetData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }

    @Decorator.noReply()
    public net_sendSetNickName(isShowNickName: boolean): void {
        this.currentData.setIsShowNickName(isShowNickName);
    }

    @Decorator.noReply()
    public net_sendSetTryOn(isTryOn: boolean): void {
        this.currentData.setIsTryOn(isTryOn);
    }

    @Decorator.noReply()
    public net_setSound(sound: number): void {
        this.currentData.setSound(sound);
    }

    @Decorator.noReply()
    public net_setBgMusic(bgMusic: number): void {
        this.currentData.setBgMusic(bgMusic);
    }

    @Decorator.noReply()
    public net_sendSetViewAngle(viewAngle: number): void {
        this.currentData.setViewAngle(viewAngle);
    }

    @Decorator.noReply()
    public net_reset(sound: number, bgMusic: number, viewAngle: number, isShowNickName: boolean, isTryOn: boolean): void {
        this.currentData.reset(sound, bgMusic, viewAngle, isShowNickName, isTryOn);
    }
}