
export class TryOnModuleC extends ModuleC<TryOnModuleS, TryOnData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }


}


export class TryOnModuleS extends ModuleS<TryOnModuleC, TryOnData> {

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {

    }


}

export class TryOnData extends Subdata {
    @Decorator.persistence()
    public tryOn: number = 0;

    public setTryOn(addTryOn: number): void {
        this.tryOn += addTryOn;
        this.save(false);
    }

    public get getTryOn(): number {
        return this.tryOn;
    }
}