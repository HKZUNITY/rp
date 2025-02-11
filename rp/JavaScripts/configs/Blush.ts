import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"面妆","164837",1],[2,"腮红","112597",1],[3,"腮红","370252",2],[4,"腮红","370251",2],[5,"腮红","370250",2]];
export interface IBlushElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	AssetId:string
	/**0-Common
1-Male
2-FeMale*/
	SexType:number
 } 
export class BlushConfig extends ConfigBase<IBlushElement>{
	constructor(){
		super(EXCELDATA);
	}

}