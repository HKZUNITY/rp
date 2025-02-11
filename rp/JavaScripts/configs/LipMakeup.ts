import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"唇妆","112587",1],[2,"唇妆","215813",1],[3,"唇妆","215788",2]];
export interface ILipMakeupElement extends IElementBase{
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
export class LipMakeupConfig extends ConfigBase<ILipMakeupElement>{
	constructor(){
		super(EXCELDATA);
	}

}