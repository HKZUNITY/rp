import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"眼睛高光","22616",0],[2,"眼睛高光","22660",0],[3,"眼睛高光","32112",0],[4,"眼睛高光","48030",0],[5,"眼睛高光","48031",0],[6,"眼睛高光","48032",0]];
export interface IUpperHighlightElement extends IElementBase{
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
export class UpperHighlightConfig extends ConfigBase<IUpperHighlightElement>{
	constructor(){
		super(EXCELDATA);
	}

}