import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"睫毛","48048",1],[2,"睫毛","48049",1],[3,"睫毛","22747",2]];
export interface IEyelashesElement extends IElementBase{
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
export class EyelashesConfig extends ConfigBase<IEyelashesElement>{
	constructor(){
		super(EXCELDATA);
	}

}