import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,"光束拖尾","88442",null,0],[2,"彩虹拖尾","88824",null,0]];
export interface IBackElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	AssetId:string
	/**undefined*/
	Transform:Array<string>
	/**0-Common
1-Male
2-FeMale*/
	SexType:number
 } 
export class BackConfig extends ConfigBase<IBackElement>{
	constructor(){
		super(EXCELDATA);
	}

}