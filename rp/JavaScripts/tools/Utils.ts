import { Notice } from "../common/notice/Notice";
import { GameConfig } from "../configs/GameConfig";
import Buff from "../module/DanMuModule/Buff";

export default class Utils {
    private static assetIconDataMap: Map<string, mw.AssetIconData> = new Map<string, mw.AssetIconData>();
    public static setImageByAssetIconData(image: mw.Image, icon: string): void {
        if (this.assetIconDataMap.has(icon)) {
            image.setImageByAssetIconData(this.assetIconDataMap.get(icon));
        } else {
            mw.assetIDChangeIconUrlRequest([icon]).then(() => {
                try {
                    let assetIconData = mw.getAssetIconDataByAssetID(icon);
                    image.setImageByAssetIconData(assetIconData);
                    this.assetIconDataMap.set(icon, assetIconData);
                } catch (error) { }
            });
        }
    }

    public static async asyncDownloadAsset(InAssetId: string): Promise<void> {
        if (!mw.AssetUtil.assetLoaded(InAssetId)) {
            await mw.AssetUtil.asyncDownloadAsset(InAssetId);
        }
    }

    public static setWidgetVisibility(ui: mw.Widget, visibility: mw.SlateVisibility): void {
        if (ui.visibility != visibility) ui.visibility = visibility;
    }

    public static getDay(): string {
        let day: string = "";
        day += new Date().getFullYear();
        day += (new Date().getMonth() + 1);
        day += new Date().getDate();
        return day;
    }

    public static buffMap: Map<number, Buff> = new Map<number, Buff>();

    public static birthPos: mw.Vector = new mw.Vector(0, 0, 1000);
    public static resetPlayerPos(): void {
        Player.localPlayer.character.worldTransform.position = this.birthPos;
    }

    public static async applySharedId(character: mw.Character, sharedId: string): Promise<boolean> {
        return new Promise(async (resolve: (isSuccess: boolean) => void) => {
            mw.AccountService.applySharedId(character, sharedId, async (success: boolean) => {
                console.error(`success:${success}`);
                if (success) character.syncDescription();
                await character.asyncReady();
                return resolve(success);
            });
        });
    }

    /**引导目标点特效ID */
    private static targetGuideEffectId: number = null;
    /**引导间隔标识 */
    private static guideIntervalId: number = null;
    /**引导线特效ID */
    private static guideEffectIds: number[] = [];
    /**记录上一次玩家的坐标 */
    private static prePlayerLoc: mw.Vector = mw.Vector.zero;

    /**引导线特效Guid */
    private static guideEffectGuid: string = `146775`;
    /**引导目标点特效Guid */
    private static targetEffectGuid: string = `142962`;

    /**开始引导 */
    public static startGuide(targetLoc: mw.Vector, onComplete: () => void = null): void {
        if (!targetLoc) return;

        if (this.targetGuideEffectId) {
            EffectService.stop(this.targetGuideEffectId);
            this.targetGuideEffectId = null;
        }

        this.targetGuideEffectId = EffectService.playAtPosition(this.targetEffectGuid, targetLoc, { loopCount: 0 });

        if (this.guideIntervalId) {
            TimeUtil.clearInterval(this.guideIntervalId);
            this.guideIntervalId = null;
        }

        this.guideIntervalId = TimeUtil.setInterval(() => {
            let playerLoc = Player.localPlayer.character.worldTransform.position;
            if (Math.abs(playerLoc.x - this.prePlayerLoc.x) < 0.1 && Math.abs(playerLoc.y - this.prePlayerLoc.y) < 0.1 && Math.abs(playerLoc.z - this.prePlayerLoc.z) < 0.1) return;
            this.prePlayerLoc = playerLoc;

            let distance = mw.Vector.distance(playerLoc, targetLoc);
            if (distance <= 200) {
                TimeUtil.clearInterval(this.guideIntervalId);
                this.guideIntervalId = null;
                if (this.targetGuideEffectId) {
                    EffectService.stop(this.targetGuideEffectId);
                    this.targetGuideEffectId = null;
                }
                if (this.guideEffectIds.length != 0) {
                    this.guideEffectIds.forEach((effectId: number) => {
                        EffectService.stop(effectId);
                    });
                    this.guideEffectIds.length = 0;
                }
                Notice.showDownNotice(GameConfig.Language.Text_GuideTips.Value);
                if (onComplete) onComplete();
                return;
            }

            let pointNum = Math.floor(distance / 100);
            let locs = this.getCurvePointsInNum([playerLoc, targetLoc], pointNum);
            if (pointNum > 35) {
                pointNum = 35;
            }

            if (this.guideEffectIds.length == 0) {
                for (let i = 1; i < pointNum; ++i) {
                    let effectId = EffectService.playAtPosition(this.guideEffectGuid, locs[i], { loopCount: 0 });
                    this.guideEffectIds.push(effectId);
                }
            }
            else {
                if (this.guideEffectIds.length == pointNum) {
                    for (let i = 1; i < pointNum; ++i) {
                        EffectService.getEffectById(this.guideEffectIds[i - 1]).then((effect) => {
                            effect.worldTransform.position = (new mw.Vector(locs[i].x, locs[i].y, locs[i].z - 85));
                        });
                    }
                    EffectService.stop(this.guideEffectIds[pointNum - 1]);
                    this.guideEffectIds.length = pointNum - 1;
                }
                else if (this.guideEffectIds.length < pointNum) {
                    for (let i = 0; i < this.guideEffectIds.length; ++i) {
                        EffectService.getEffectById(this.guideEffectIds[i]).then((effect) => {
                            effect.worldTransform.position = (new mw.Vector(locs[i + 1].x, locs[i + 1].y, locs[i + 1].z - 85));
                        });
                    }
                    for (let i = this.guideEffectIds.length; i < pointNum - 1; ++i) {
                        let effectId = EffectService.playAtPosition(this.guideEffectGuid, locs[i + 1], { loopCount: 0 });
                        this.guideEffectIds.push(effectId);
                    }
                }
                else if (this.guideEffectIds.length > pointNum) {
                    for (let i = 0; i < pointNum; ++i) {
                        EffectService.getEffectById(this.guideEffectIds[i]).then((effect) => {
                            if (!locs[i + 1]) return;
                            effect.worldTransform.position = (new mw.Vector(locs[i + 1].x, locs[i + 1].y, locs[i + 1].z - 85));
                        });
                    }
                    for (let i = pointNum; i < this.guideEffectIds.length; ++i) {
                        EffectService.stop(this.guideEffectIds[i]);
                    }
                    this.guideEffectIds.length = pointNum;
                }
            }
        }, 0.1);
    }

    /**
     * 获取贝塞尔曲线的点的集合
     * @param points 点的集合, 至少包含起点和终点
     * @param num 想要生成多少点
     * @returns 
     */
    public static getCurvePointsInNum(points: Array<mw.Vector>, num: number): Array<mw.Vector> {
        let result: Array<mw.Vector> = new Array<mw.Vector>();
        for (let i: number = 0; i < num; i++) {
            let t: number = i / (num - 1);
            let point = this.getKeyPoint(points, t);
            result.push(point);
        }
        return result;
    }

    private static getKeyPoint(points: Array<mw.Vector>, t: number): mw.Vector {
        if (points.length > 1) {
            let dirs: Array<mw.Vector> = new Array<mw.Vector>();
            for (let i: number = 0; i < points.length - 1; ++i) {
                dirs.push(new mw.Vector(
                    points[i + 1].x - points[i].x,
                    points[i + 1].y - points[i].y,
                    points[i + 1].z - points[i].z
                ));
            }
            let points2: Array<mw.Vector> = new Array<mw.Vector>();
            for (let j: number = 0; j < dirs.length; j++) {
                points2.push(new mw.Vector(
                    points[j].x + dirs[j].x * t,
                    points[j].y + dirs[j].y * t,
                    points[j].z + dirs[j].z * t
                ));
            }
            return this.getKeyPoint(points2, t);
        }
        else {
            return new mw.Vector(points[0].x, points[0].y, points[0].z);
        }
    }
}