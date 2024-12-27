import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","ModelGuid","ModelGuid_C","BagId","NpcId","ShareId","NpcAnimationId"],["","","","","","","",""],[1,"0CD59651",null,null,60004,null,0,null,"冲浪-电吉他"],[2,"1BF26C07",null,null,60005,null,0,null,"冲浪-跳舞球"],[3,"112E61C1",null,null,60014,null,0,null,"鱼冲浪-电吉他"],[4,"3D757718",null,null,60013,null,0,null,"御剑-翅膀"],[5,"2A86F403",null,null,60001,null,0,null,"滑板-电吉他"],[6,"02502CF9","1316BF5C",null,30002,null,0,null,"烟花"],[8,"0D2A5BAA","30C9467F",null,30048,null,0,null,"呲花"],[9,"3B9F004A","02D3D0FB",null,30006,null,0,null],[10,"30A6E783","2B6B0FA6",null,30050,null,0,null],[11,"1B77E308","2FEFA7B3",null,30052,null,0,null],[12,"2ABFBE64","3B620F67",null,30008,null,0,null],[13,"23C087D3","01DA388E",null,30052,null,0,null],[14,"32D06BAB","31EDB7B3",null,30010,null,0,null],[15,"2A9CA5D5","3CCD170C",null,30012,null,0,null],[16,"2321D6C9","17F59CCA",null,30014,null,0,null],[17,"357B83A4","2EB80290",null,30054,null,0,null],[18,"03196BF5","04E952B8",null,30056,null,0,null],[19,"3D1A7899","3CD1BBC4",null,30058,null,0,null],[20,"1660D04A","2805AB56",null,30060,null,0,null],[21,"2F8E9759","4398570",null,30062,null,0,null],[22,"029A708E","0E1CF95E",null,30064,null,0,null],[23,"2B2F3434","0DD82373",null,30016,null,0,null],[24,"1DC00881","2EDE3317",null,30066,null,0,null],[25,"36676894","1F73A63A",null,30068,null,0,null],[26,"1CDE2B65","39B89333",null,30070,null,0,null],[27,"10896871","03D689AA",null,30018,null,0,null],[28,"1AA32466","3F32DF53",null,30020,null,0,null],[29,"37B72C47","2A744A78",null,30022,null,0,null],[30,"30A942B1","1142E907",null,30008,null,0,null],[31,"0FD25D88","01862B9F",null,30006,null,0,null],[32,"114B5C28","27ADEC9A",null,30002,null,0,null],[33,"02CE9D49","2311BAB2",null,30010,null,0,null],[34,"2E950C81","0C6C59A6",null,30032,null,0,null],[35,"11D391D2","1CBB7B6A",null,30034,null,0,null],[36,"3E1D73CC","1877B361",null,30036,null,0,null],[37,"3A591F1D",null,null,10193,null,0,null],[38,"11FC2714",null,null,10193,null,0,null],[39,"059DA227",null,null,10138,null,0,null],[40,"3ED043F4",null,null,10163,null,0,null],[50,"1FC1F0EE",null,null,10194,null,0,null],[51,"088F5EE5",null,null,10091,null,0,null],[52,"2C87FD97",null,null,10091,null,0,null],[53,"05FABD75",null,null,10430,null,0,null],[54,"3FE87C24",null,null,10431,null,0,null],[55,"3E0200C0",null,null,10432,null,0,null],[56,"3A8D6DA5",null,null,10433,null,0,null],[57,"06416F41",null,null,60005,null,0,null],[58,"1AD5C96C",null,null,10195,null,0,null],[63,"117E9D97",null,null,10420,null,0,null],[64,"22119BD8",null,null,10420,null,0,null],[65,"2BA03CE9",null,null,10420,null,0,null],[66,"05E360CD",null,null,10420,null,0,null],[67,"36F54E8F",null,null,10440,null,0,null],[68,"140807DC",null,null,10440,null,0,null],[69,"2EE4A29B",null,null,10440,null,0,null],[100,null,null,null,0,"2C383996",7,"122231","被壁咚"],[101,null,null,null,0,"271ABFD3",3,"122232","壁咚"],[102,null,null,null,0,"10A1DDAA",2,"180882","搂着"],[103,null,null,null,0,"2815DDD0",8,"180891","被搂"]];
export interface IInteractElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**触发器*/
	TriggerGuid:string
	/**undefined*/
	ModelGuid:string
	/**undefined*/
	ModelGuid_C:string
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