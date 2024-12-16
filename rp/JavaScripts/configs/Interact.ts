import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","InteractivityGuid","ModelGuid","InteractIcon","HumanoidSlotType","SitStance","BagId"],["","","","","","","",""],[16,"0CD59651","0325841C",null,"120767",17,"151060",10006,"电吉他"]];
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
 } 
export class InteractConfig extends ConfigBase<IInteractElement>{
	constructor(){
		super(EXCELDATA);
	}

}