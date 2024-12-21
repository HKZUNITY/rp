import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","InteractivityGuid","ModelGuid","InteractIcon","HumanoidSlotType","SitStance","BagId","NpcId","ShareId","NpcAnimationId"],["","","","","","","","","","",""],[1,"0CD59651","0325841C",null,"120767",23,"151060",10106,null,0,null,"冲浪-电吉他"],[2,"1BF26C07","10A33D41",null,"120767",23,"151060",10439,null,0,null,"冲浪-跳舞球"],[3,"112E61C1","26DBBEB9",null,"123030",19,"151060",10106,null,0,null,"鱼冲浪-电吉他"],[4,"3D757718","0D1267C4",null,"169463",23,"151060",20045,null,0,null,"御剑-翅膀"],[5,"2A86F403","3A0716FC",null,"167883",23,"151060",10106,null,0,null,"滑板-电吉他"],[6,"02502CF9",null,"1316BF5C","103437",0,null,30002,null,0,null,"烟花"],[8,"0D2A5BAA",null,"30C9467F","103437",0,null,30048,null,0,null,"呲花"],[9,"3B9F004A",null,"02D3D0FB","103437",0,null,30006,null,0,null],[10,"30A6E783",null,"2B6B0FA6","103437",0,null,30050,null,0,null],[11,"1B77E308",null,"2FEFA7B3","103437",0,null,30052,null,0,null],[12,"2ABFBE64",null,"3B620F67","103437",0,null,30008,null,0,null],[13,"23C087D3",null,"01DA388E","103437",0,null,30052,null,0,null],[14,"32D06BAB",null,"31EDB7B3","103437",0,null,30010,null,0,null],[15,"2A9CA5D5",null,"3CCD170C","103437",0,null,30012,null,0,null],[16,"2321D6C9",null,"17F59CCA","103437",0,null,30014,null,0,null],[17,"357B83A4",null,"2EB80290","103437",0,null,30054,null,0,null],[18,"03196BF5",null,"04E952B8","103437",0,null,30056,null,0,null],[19,"3D1A7899",null,"3CD1BBC4","103437",0,null,30058,null,0,null],[20,"1660D04A",null,"2805AB56","103437",0,null,30060,null,0,null],[21,"2F8E9759",null,"4398570","103437",0,null,30062,null,0,null],[22,"029A708E",null,"0E1CF95E","103437",0,null,30064,null,0,null],[23,"2B2F3434",null,"0DD82373","103437",0,null,30016,null,0,null],[24,"1DC00881",null,"2EDE3317","103437",0,null,30066,null,0,null],[25,"36676894",null,"1F73A63A","103437",0,null,30068,null,0,null],[26,"1CDE2B65",null,"39B89333","103437",0,null,30070,null,0,null],[27,"10896871",null,"03D689AA","103437",0,null,30018,null,0,null],[28,"1AA32466",null,"3F32DF53","103437",0,null,30020,null,0,null],[29,"37B72C47",null,"2A744A78","103437",0,null,30022,null,0,null],[30,"30A942B1",null,"1142E907","103437",0,null,30008,null,0,null],[31,"0FD25D88",null,"01862B9F","103437",0,null,30006,null,0,null],[32,"114B5C28",null,"27ADEC9A","103437",0,null,30002,null,0,null],[33,"02CE9D49",null,"2311BAB2","103437",0,null,30010,null,0,null],[34,"2E950C81",null,"0C6C59A6","103437",0,null,30032,null,0,null],[35,"11D391D2",null,"1CBB7B6A","103437",0,null,30034,null,0,null],[36,"3E1D73CC",null,"1877B361","103437",0,null,30036,null,0,null],[37,"3A591F1D","3535B689",null,"110057",19,"218260",10193,null,0,null],[38,"11FC2714",null,null,"120649",0,null,10193,null,0,null],[39,"059DA227","3CD25E81",null,"110057",19,"14689",10138,null,0,null],[40,"3ED043F4","3458BAE7",null,"110057",19,"14645",10163,null,0,null],[41,"13896C73","06BFEF06",null,"120694",0,"175980",0,null,0,null],[42,"29EA4298","1C80ECCB",null,"120694",0,"14654",0,null,0,null],[43,"07A399B3","17D272F2",null,"110057",19,"15208",0,null,0,null],[44,"0C32A043","14AC2061",null,"110057",19,"15208",0,null,0,null],[45,"229775EF","2B31CC4F",null,"110057",19,"14565",0,null,0,null],[46,"0F63B8C0","3E004E7C",null,"110057",19,"15208",0,null,0,null],[47,"2AC7C25D","346F5B6C",null,"110057",19,"14587",0,null,0,null],[48,"26920B3D","0C8AD0CD",null,"110057",19,"180882",0,null,0,null],[49,"2348CF4D","02BD8A1A",null,"110057",19,"180891",0,null,0,null],[50,"1FC1F0EE","219AE411",null,"120727",17,"122231",10194,null,0,null],[51,"088F5EE5","248E8860",null,"146643",19,"29741",10091,null,0,null],[52,"2C87FD97","16A0B6D0",null,"146643",19,"35447",10091,null,0,null],[53,"05FABD75","2680E280",null,"168260",17,"52984",10430,null,0,null],[54,"3FE87C24","06ED66F5",null,"168260",17,"52984",10431,null,0,null],[55,"3E0200C0","170E7571",null,"168260",17,"52984",10432,null,0,null],[56,"3A8D6DA5","264275C6",null,"168260",17,"52984",10433,null,0,null],[57,"06416F41",null,null,"120767",0,null,60005,null,0,null],[58,"1AD5C96C","3DEAE70E",null,"120649",23,"192126",10195,null,0,null],[59,"2AC2381F","244C6B0B",null,"128699",18,"122231",0,null,0,null],[60,"0AD851F5","2E363452",null,"156849",18,"122232",0,null,0,null],[61,"35FCD627","3507E8CF",null,"168260",17,"14601",0,null,0,null],[62,"36416FEF","16C58F11",null,"158399",19,"122449",0,null,0,null],[63,"117E9D97",null,null,"158398",0,null,10420,null,0,null],[64,"22119BD8",null,null,"158398",0,null,10420,null,0,null],[65,"2BA03CE9",null,null,"158398",0,null,10420,null,0,null],[66,"05E360CD",null,null,"158398",0,null,10420,null,0,null],[67,"36F54E8F",null,null,"120719",0,null,10440,null,0,null],[68,"140807DC",null,null,"120719",0,null,10440,null,0,null],[69,"2EE4A29B",null,null,"120719",0,null,10440,null,0,null],[100,null,null,null,null,0,null,0,"2C383996",7,"122231","被壁咚"],[101,null,null,null,null,0,null,0,"271ABFD3",3,"122232","壁咚"],[102,null,null,null,null,0,null,0,"10A1DDAA",2,"180882","搂着"],[103,null,null,null,null,0,null,0,"2815DDD0",8,"180891","被搂"]];
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