export class RoomData {
    public userId: string = "";
    public playerName: string = "";
    public score: number = 0;
    public time: number = 0;
    public tryOn: number = 0;

    public constructor(userId: string, name: string, killCount: number, time: number, tryOn: number) {
        this.userId = userId;
        this.playerName = name;
        this.score = killCount;
        this.time = time;
        this.tryOn = tryOn;
    }

    public setData(userId: string, name: string, killCount: number, time: number, tryOn: number): void {
        this.userId = userId;
        this.playerName = name;
        this.score = killCount;
        this.time = time;
        this.tryOn = tryOn;
    }
}

export class WorldData {
    public userId: string = "";
    public playerName: string = "";
    public time: number = 0;
    public score: number = 0;

    public constructor(userId: string, name: string, time: number, score: number) {
        this.userId = userId;
        this.playerName = name;
        this.time = time;
        this.score = score;
    }

    public setData(userId: string, name: string, time: number, score: number): void {
        this.userId = userId;
        this.playerName = name;
        this.time = time;
        this.score = score;
    }
}

export class RankData extends Subdata {
    @Decorator.persistence()
    public time: number = 0;

    @Decorator.persistence()
    public score: number = 0;

    public setTime(addTime: number): void {
        this.time += addTime;
        this.save(false);
    }

    public get getTime(): number {
        return this.time;
    }

    public setScore(addScore: number): void {
        this.score += addScore;
        this.save(false);
    }

    public get getScore(): number {
        return this.score;
    }
}