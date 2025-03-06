import Utils from "../../tools/Utils";
import SignInData, { SignInConfigData } from "./SignInData";
import SignInModuleC from "./SignInModuleC";

export default class SignInModuleS extends ModuleS<SignInModuleC, SignInData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
    }

    protected onPlayerEnterGame(player: mw.Player): void {
        this.syncSignInConfigData(player);
    }

    private isContinueInitSignInData: boolean = true;
    private async syncSignInConfigData(player: mw.Player): Promise<void> {
        if (this.isContinueInitSignInData) {
            this.isContinueInitSignInData = false;
            await this.initSignInConfigData();
            TimeUtil.delaySecond(5).then(() => { this.isContinueInitSignInData = true; });
        }
        this.getClient(player).net_syncSignInConfigData(this.signInConfigData, this.getDay(player));
    }

    private signInConfigData: SignInConfigData = null;
    private async initSignInConfigData(): Promise<void> {
        let data = await Utils.getCustomdata("SignInConfigData");
        this.signInConfigData = new SignInConfigData(data);
    }

    private getDay(player: mw.Player): number {
        let signInData = DataCenterS.getData(player, SignInData);
        let dayStr = signInData.dayStr;
        let currentDayStr = Utils.getDay();
        if (dayStr != currentDayStr) signInData.setDayStr(currentDayStr, 1);
        return signInData.day;
    }

    public async net_useShareId(shareId: string): Promise<void> {
        let player = this.currentPlayer;
        await Utils.asyncDownloadAsset(shareId);
        player.character.setDescription([shareId]);
        player.character.description.advance.base.characterSetting.characterTemplate = mw.CharacterTemplate.None;
        await player.character.asyncReady();
    }
}