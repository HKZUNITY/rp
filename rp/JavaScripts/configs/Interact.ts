import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","InteractivityGuid","ModelGuid","InteractIcon","HumanoidSlotType","SitStance","BagId","NpcId","ShareId","NpcAnimationId"],["","","","","","","","","","",""],[1,"379F8E9E","0D0850BD",null,"110057",19,"122227",10006,null,0,null,"电吉他"],[2,"2555EDAA","3D215C3A",null,"128699",17,"122231",10106,null,0,null,"电吉他"],[3,"36A4512B","270D9130",null,"156849",18,"122232",10016,null,0,null],[4,"0A2CF72B","38F1AE5C",null,"120699",19,"15208",10016,null,0,null],[11,"39F6F33A",null,"347852D1","197036",0,null,30048,null,0,null,"烟花筒"],[12,"227E47FB",null,"061EAE7B","197036",0,null,30044,null,0,null,"烟花筒"],[13,"1EE77E63",null,null,"197036",0,null,30048,null,0,null,"烟花筒"],[14,"175C7F02",null,null,"197036",0,null,30044,null,0,null,"烟花筒"],[15,"218F4A38",null,null,"120767",0,null,60004,null,0,null,"冲浪"],[16,"05ABA358","362EF4BC",null,"120767",17,"151060",10006,null,0,null,"电吉他"],[17,"1B047295","3111196C",null,"120767",23,"151060",10106,null,0,null,"电吉他"],[18,"1CE3435E",null,null,"128717",0,null,0,"252E89F0",25,"122231","换装-被壁咚"],[19,"15D2484A",null,null,"128717",0,null,0,"275CDCBB",0,null,"换装-还原"],[20,"36C4BA04",null,null,"128717",0,null,0,"14831C67",26,"122232","换装-壁咚"],[21,"396EEE6D",null,null,null,0,null,0,"1E5CDA51",25,"180882","换装-被搂"],[22,"2337834F",null,null,null,0,null,0,"3584CD02",26,"180891","换装-搂着"]];
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