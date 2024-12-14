import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","InteractivityGuid","HumanoidSlotType","SitStance","BagId"],["","","","","",""],[1,"379F8E9E","0D0850BD",19,"122227",10006],[2,"2555EDAA","3D215C3A",17,"122231",10106],[3,"36A4512B","270D9130",18,"122232",10016],[4,"0A2CF72B","38F1AE5C",19,"15208",10016]];
export interface ISitElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**触发器*/
	TriggerGuid:string
	/**交互物*/
	InteractivityGuid:string
	/**undefined*/
	HumanoidSlotType:number
	/**姿态*/
	SitStance:string
	/**undefined*/
	BagId:number
 } 
export class SitConfig extends ConfigBase<ISitElement>{
	constructor(){
		super(EXCELDATA);
	}

}