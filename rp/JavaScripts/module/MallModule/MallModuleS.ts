import Utils from "../../tools/Utils";
import RankModuleS from "../RankModule/RankModuleS";
import { WishDataV0 } from "../WishModule/WishData";
import MallData, { MallConfigData } from "./MallData";
import MallModuleC from "./MallModuleC";
import Nickname from "./ui/Nickname";

export default class MallModuleS extends ModuleS<MallModuleC, MallData> {
    private rankModuleS: RankModuleS = null;
    private get getRankModuleS(): RankModuleS {
        if (this.rankModuleS == null) {
            this.rankModuleS = ModuleService.getModule(RankModuleS);
        }
        return this.rankModuleS;
    }

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

        let money = 0;
        switch (commodityId) {
            case `3ki8ifW7BUs0006Pk`:
                money = 1000;
                break;
            case `5KdGRn3IhB600054z`:
                money = 2;
                break;
            default:
                break;
        }
        this.getRankModuleS.refreshMoney(Player.getPlayer(playerId).userId, money);
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
        nickname.wishDataV0 = null;
    }

    private deleteNickname(player: mw.Player): void {
        if (this.nicknameMap.has(player.userId)) {
            let nickname = this.nicknameMap.get(player.userId);
            nickname.wishDataV0 = null;
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

    public net_updateNickWish(wishDataV0: WishDataV0, isGive: boolean): boolean {
        let targetUserId = this.currentPlayer.userId;
        let userId = wishDataV0.userId;
        if (this.nicknameMap.has(userId)) {
            let nickname = this.nicknameMap.get(userId);
            nickname.wishDataV0 = wishDataV0;
            if (isGive) {
                this.getClient(Player.getPlayer(userId)).net_giveSuccess(wishDataV0);
                this.getRankModuleS.refreshMoney(targetUserId, wishDataV0.price);
            }
            return true;
        }
        return false;
    }
}