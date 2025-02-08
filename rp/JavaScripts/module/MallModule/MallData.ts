
export default class MallData extends Subdata {

}

export class TabIdData {
    public tabId: number = 0;
    public isOn: boolean = false;
    public tabIdDataMap: Map<number, TabIdData> = new Map<number, TabIdData>;
}

export enum TabType {
    None,
    Tab1,
    Tab2,
    Tab3
}

export enum Tab1Type {

}

export enum Tab2Type {

}

export enum Tab3Type {

}