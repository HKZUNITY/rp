import { Singleton } from "./CameraManager"

export class EventManager extends Singleton {
    public eventMap: Map<string, Action> = new Map<string, Action>();

    /**监听一个事件 */
    public addEventListener(eventName: string, func: Function, thisArg?: any): void {
        let action = this.eventMap.get(eventName);
        if (!action) {
            action = new Action();
            this.eventMap.set(eventName, action);
        }
        action.add(func, thisArg);
    }

    /**移除一个事件函数 */
    public removeEventFunc(eventName: string, func: Function, thisArg?: any): void {
        const action = this.eventMap.get(eventName);
        if (action) {
            action.remove(func, thisArg);
        }
    }

    /**移除一个事件 */
    public removeEvent(eventName: string, ...args): void {
        const action = this.eventMap.get(eventName);
        if (action) {
            action.clear();
        }
    }

    /**发送一个事件
     * @param eventName 事件名
     * @param args 参数
     */
    public dispatchToLocal(eventName: string, ...args: any[]): void {
        const action = this.eventMap.get(eventName);
        if (action) action.call(...args);
    }
}