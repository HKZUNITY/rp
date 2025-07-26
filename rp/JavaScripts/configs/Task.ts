import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Name","TaskType","TaskItemType","NextId","TragetNum","Coin","Diamond"],["","","","","","","",""],[1,"每日登录游戏（{0}/{1}）",1,1,0,1,1,0],[2,"每日在线时长25分钟（{0}/{1}）",1,5,0,25,1,0],[3,"每日在线时长60分钟（{0}/{1}）",1,9,0,60,3,0],[102,"每周登录2天（{0}/{1}）",2,102,0,2,2,0],[103,"每周登录3天（{0}/{1}）",2,103,0,3,3,0],[104,"每周登录4天（{0}/{1}）",2,104,0,4,4,0],[105,"每周登录5天（{0}/{1}）",2,105,0,5,5,0],[106,"每周登录6天（{0}/{1}）",2,106,0,6,6,0],[107,"每周登录7天（{0}/{1}）",2,107,0,7,7,0]];
export interface ITaskElement extends IElementBase{
 	/**任务id*/
	ID:number
	/**任务名字*/
	Name:string
	/**任务类型
1-每日任务
2-每周任务*/
	TaskType:number
	/**任务类型
5-每日在线时长25分钟
9-每日在线时长60分钟
102-每周登录2天
103-每周登录3天
104-每周登录4天
105-每周登录5天
106-每周登录6天
107-每周登录7天*/
	TaskItemType:number
	/**下一阶段的任务ID*/
	NextId:number
	/**目标数*/
	TragetNum:number
	/**获得金币*/
	Coin:number
	/**获得钻石*/
	Diamond:number
 } 
export class TaskConfig extends ConfigBase<ITaskElement>{
	constructor(){
		super(EXCELDATA);
	}

}