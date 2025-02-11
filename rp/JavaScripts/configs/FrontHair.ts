import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"齐刘海","60988",2],[2,"M型刘海","62785",2],[3,"八字刘海","63544",2],[4,"龙须卷刘海","63547",2],[5,"韩式中分","63909",1],[6,"齐刘海","64146",2],[7,"爱心刘海","64185",1],[8,"斜刘海","65729",1],[9,"括号刘海","66108",1],[10,"偏分刘海","74448",2]];
export interface IFrontHairElement extends IElementBase{
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
export class FrontHairConfig extends ConfigBase<IFrontHairElement>{
	constructor(){
		super(EXCELDATA);
	}

}