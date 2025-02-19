
export default class GlobalData {
    public static languageId: number = 1;

    /**是否开启IAA */
    public static isOpenIAA: boolean = false;

    public static bagCount: number = 5;

    public static worldCount: number = 500;

    public static freeTime: number = 999;

    /**关闭背景音乐图标Guid */
    public static offMusicIconGuid: string = `133403`;
    /**打开背景音乐图标Guid */
    public static onMusicIconGuid: string = `133445`;
}

export enum EventType {
    OnOffMainUI = `OnOffMainUI`
}