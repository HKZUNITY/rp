import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"长袜制服鞋","57729",2],[2,"古装靴","60385",1]];
export interface IShoesElement extends IElementBase{
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
export class ShoesConfig extends ConfigBase<IShoesElement>{
	constructor(){
		super(EXCELDATA);
	}

}