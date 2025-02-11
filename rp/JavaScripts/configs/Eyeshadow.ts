import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"眼影","70245",1],[2,"眼影","266369",1],[3,"眼影","370255",2],[4,"眼影","370254",2],[5,"眼影","223838",2]];
export interface IEyeshadowElement extends IElementBase{
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
export class EyeshadowConfig extends ConfigBase<IEyeshadowElement>{
	constructor(){
		super(EXCELDATA);
	}

}