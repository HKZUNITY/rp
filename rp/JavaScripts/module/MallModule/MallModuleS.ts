import Utils from "../../tools/Utils";
import MallData, { MallConfigData } from "./MallData";
import MallModuleC from "./MallModuleC";
import Nickname from "./ui/Nickname";

export default class MallModuleS extends ModuleS<MallModuleC, MallData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
    }

    private bindAction(): void {
        mw.PurchaseService.onOrderDelivered.add(this.addShipOrder.bind(this));
    }

    private addShipOrder(playerId: number, orderId: string, commodityId: string, amount: number, confirmOrder: (bReceived: boolean) => void): void {
        //根据playerId和commodityId来处理购买逻辑
        this.getClient(playerId).net_deliverGoods(commodityId, amount);
        confirmOrder(true);//调用这个方法表示确认收货成功
    }

    protected onPlayerEnterGame(player: mw.Player): void {
        this.initPlayerVipData(player);
        this.syncMallConfigData(player);
    }

    protected onPlayerLeft(player: mw.Player): void {
        this.deleteNickname(player);
    }

    private isContinueInitMallConfigData: boolean = true;
    private async syncMallConfigData(player: mw.Player): Promise<void> {
        if (this.isContinueInitMallConfigData) {
            this.isContinueInitMallConfigData = false;
            await this.initMallConfigData();
            TimeUtil.delaySecond(5).then(() => { this.isContinueInitMallConfigData = true; });
        }
        this.getClient(player).net_syncMallConfigData(this.mallConfigData);
    }

    private mallConfigData: MallConfigData = null;
    private async initMallConfigData(): Promise<void> {
        let data = await Utils.getCustomdata("MallConfigData");
        this.mallConfigData = new MallConfigData(data);
    }

    private nicknameMap: Map<string, Nickname> = new Map<string, Nickname>();
    private initPlayerVipData(player: mw.Player): void {
        let mallData = DataCenterS.getData(player, MallData);
        let vipCount = mallData.calculateVipCount;
        this.getClient(player).net_initPlayerVipData(vipCount, mallData.getIsUseFreeSave);

        let nickname = player.character.addComponent(Nickname, true);
        this.nicknameMap.set(player.userId, nickname);
        nickname.vipCount = vipCount;
    }

    private deleteNickname(player: mw.Player): void {
        if (this.nicknameMap.has(player.userId)) {
            let nickname = this.nicknameMap.get(player.userId);
            nickname.destroy();
            this.nicknameMap.delete(player.userId);
        }
    }

    public net_addVipCount(addVipCount): number {
        let player = this.currentPlayer;
        let vipCount = this.currentData.addVipCount(addVipCount);

        if (this.nicknameMap.has(player.userId)) {
            let nickname = this.nicknameMap.get(player.userId);
            nickname.vipCount = vipCount;
        }

        return vipCount;
    }

    public net_getVipCount(): number {
        return this.currentData.calculateVipCount;
    }

    @Decorator.noReply()
    public net_setIsUseFreeSave(isUseFreeSave: boolean): void {
        this.currentData.setIsUseFreeSave(isUseFreeSave);
    }

    public async tryResetCharacter(player: mw.Player): Promise<void> {
        await this.getClient(player).net_tryResetCharacter();
    }
}