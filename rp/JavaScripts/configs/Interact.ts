import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","InteractivityGuid","ModelGuid","InteractIcon","HumanoidSlotType","SitStance","BagId","NpcId","ShareId","NpcAnimationId"],["","","","","","","","","","",""],[1,"0CD59651","0325841C",null,"120767",23,"151060",10106,null,0,null,"冲浪-电吉他"],[2,"1BF26C07","10A33D41",null,"120767",23,"151060",10439,null,0,null,"冲浪-跳舞球"],[3,"112E61C1","26DBBEB9",null,"123030",19,"151060",10106,null,0,null,"鱼冲浪-电吉他"],[4,"3D757718","0D1267C4",null,"169463",23,"151060",10106,null,0,null,"御剑-电吉他"],[5,"2A86F403","3A0716FC",null,"167883",23,"151060",10106,null,0,null,"滑板-电吉他"],[100,null,null,null,null,0,null,0,"2C383996",7,"122231","被壁咚"],[101,null,null,null,null,0,null,0,"271ABFD3",3,"122232","壁咚"]];
export interface IInteractElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**触发器*/
	TriggerGuid:string
	/**交互物*/
	InteractivityGuid:string
	/**undefined*/
	ModelGuid:string
	/**undefined*/
	InteractIcon:string
	/**0-头发
17-左脚
18-右脚
19-臀部
23-根节点*/
	HumanoidSlotType:number
	/**姿态*/
	SitStance:string
	/**undefined*/
	BagId:number
	/**undefined*/
	NpcId:string
	/**undefined*/
	ShareId:number
	/**undefined*/
	NpcAnimationId:string
 } 
export class InteractConfig extends ConfigBase<IInteractElement>{
	constructor(){
		super(EXCELDATA);
	}

}