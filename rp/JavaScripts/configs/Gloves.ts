import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"露指手套","60384",1],[2,"绣花薄手套","60081",2]];
export interface IGlovesElement extends IElementBase{
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
export class GlovesConfig extends ConfigBase<IGlovesElement>{
	constructor(){
		super(EXCELDATA);
	}

}