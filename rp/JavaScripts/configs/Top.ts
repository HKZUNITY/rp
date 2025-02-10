import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"弓道服","59536",1],[2,"毛衣外套","59857",1],[3,"拖尾婚纱","60077",1],[4,"蝴蝶结桃心裙","59955",1],[5,"恐龙玩偶服","509868",1],[6,"恐龙玩偶服","509895",2],[7,"礼服","476302",1],[8,"礼服","458752",2],[9,"战损休闲装","458129",2],[10,"披风长袖","455507",2],[11,"紧身衣","64542",2],[12,"长袍上衣","504623",2],[13,"礼服","476242",2],[14,"学士服","264153",2]];
export interface ITopElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	AssetId:string
	/**0-Common
1-FeMale
2-Male*/
	SexType:number
 } 
export class TopConfig extends ConfigBase<ITopElement>{
	constructor(){
		super(EXCELDATA);
	}

}