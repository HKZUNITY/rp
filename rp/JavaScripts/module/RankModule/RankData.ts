export class RoomData {
    public userId: string = "";
    public playerName: string = "";
    public score: number = 0;
    public time: number = 0;
    public tryOn: number = 0;
    public money: number = 0;

    public constructor(userId: string, name: string, killCount: number, time: number, tryOn: number, money: number) {
        this.userId = userId;
        this.playerName = name;
        this.score = killCount;
        this.time = time;
        this.tryOn = tryOn;
        this.money = money;
    }

    public setData(userId: string, name: string, killCount: number, time: number, tryOn: number, money: number): void {
        this.userId = userId;
        this.playerName = name;
        this.score = killCount;
        this.time = time;
        this.tryOn = tryOn;
        this.money = money;
    }
}

export class WorldData {
    public userId: string = "";
    public playerName: string = "";
    public time: number = 0;

    public constructor(userId: string, name: string, time: number) {
        this.userId = userId;
        this.playerName = name;
        this.time = time;
    }

    public setData(userId: string, name: string, time: number): void {
        this.userId = userId;
        this.playerName = name;
        this.time = time;
    }
}

export class MoneyWorldData {
    public userId: string = "";
    public playerName: string = "";
    public money: number = 0;

    public constructor(userId: string, name: string, money: number) {
        this.userId = userId;
        this.playerName = name;
        this.money = money;
    }

    public setData(userId: string, name: string, money: number): void {
        this.userId = userId;
        this.playerName = name;
        this.money = money;
    }
}

export class RankData extends Subdata {
    @Decorator.persistence()
    public time: number = 0;

    @Decorator.persistence()
    public money: number = 0;

    public setTime(addTime: number): void {
        this.time += addTime;
        this.save(false);
    }

    public get getTime(): number {
        return this.time;
    }

    public setMoney(addMoeny: number): void {
        this.money += addMoeny;
        this.save(false);
    }

    public get getMoeny(): number {
        return this.money;
    }
}