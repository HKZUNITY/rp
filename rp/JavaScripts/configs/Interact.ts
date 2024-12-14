import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","InteractivityGuid","ModelGuid","InteractIcon","HumanoidSlotType","SitStance","BagId"],["","","","","","","",""],[1,"379F8E9E","0D0850BD",null,"110057",19,"122227",10006],[2,"2555EDAA","3D215C3A",null,"128699",17,"122231",10106],[3,"36A4512B","270D9130",null,"156849",18,"122232",10016],[4,"0A2CF72B","38F1AE5C",null,"120699",19,"15208",10016],[11,"39F6F33A",null,"347852D1","197036",0,null,30048,"烟花筒"],[12,"227E47FB",null,"061EAE7B","197036",0,null,30044,"烟花筒"],[13,"1EE77E63",null,null,"197036",0,null,30048,"烟花筒"],[14,"175C7F02",null,null,"197036",0,null,30044,"烟花筒"]];
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
19-臀部*/
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