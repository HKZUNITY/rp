import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"齐刘海","60988",1],[2,"M型刘海","62785",1],[3,"八字刘海","63544",1],[4,"龙须卷刘海","63547",1],[5,"韩式中分","63909",2],[6,"齐刘海","64146",1],[7,"爱心刘海","64185",2],[8,"斜刘海","65729",2],[9,"括号刘海","66108",2],[10,"偏分刘海","74448",1]];
export interface IFrontHairElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	AssetId:string
	/**0-Common
1-FeMale
2-Male*/
	SexType:number
 } 
export class FrontHairConfig extends ConfigBase<IFrontHairElement>{
	constructor(){
		super(EXCELDATA);
	}

}