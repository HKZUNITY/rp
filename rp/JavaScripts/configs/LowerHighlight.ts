import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"眼睛反光","32098",0],[2,"眼睛反光","48017",0]];
export interface ILowerHighlightElement extends IElementBase{
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
export class LowerHighlightConfig extends ConfigBase<ILowerHighlightElement>{
	constructor(){
		super(EXCELDATA);
	}

}