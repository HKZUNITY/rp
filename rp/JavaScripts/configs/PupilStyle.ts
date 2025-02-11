import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"美瞳","22599",0],[2,"美瞳","25891",0],[3,"美瞳","30422",0]];
export interface IPupilStyleElement extends IElementBase{
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
export class PupilStyleConfig extends ConfigBase<IPupilStyleElement>{
	constructor(){
		super(EXCELDATA);
	}

}