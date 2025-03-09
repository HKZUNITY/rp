
export default class SignInData extends Subdata {
    @Decorator.persistence()
    public day: number = 0;

    @Decorator.persistence()
    public dayStr: string = "";

    public setDay(addDay: number): void {
        this.day += addDay;
        this.save(false);
    }

    public setDayStr(dayStr: string, addDay: number): void {
        this.dayStr = dayStr;
        this.day += addDay;
        this.save(false);
    }
}

export class SignInUserData {
    public shareId: string;
    public icon: string;

    public constructor(data: any) {
        if (!data) return;
        this.shareId = data?.shareId;
        this.icon = data?.icon;
    }
}

export class SignInConfigData {
    public isOpen: boolean;
    public isOpenVersion2: boolean;
    public totalDay: number;
    public signInUserDatas: SignInUserData[] = [];

    public constructor(data: any) {
        if (!data) return;
        this.isOpen = data?.isOpen;
        this.isOpenVersion2 = data?.isOpenVersion2;
        this.totalDay = data?.totalDay;

        for (let i = 0; i < data?.signInUserDatas?.length; ++i) {
            this.signInUserDatas.push(new SignInUserData(data?.signInUserDatas[i]));
        }
    }
}