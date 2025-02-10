import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","Scale","SexType"],["","","",""],[1,"0.7倍","7",0],[2,"0.8倍","8",0],[3,"0.9倍","9",0],[4,"正常","10",0],[5,"1.1倍","11",0],[6,"1.2倍","12",0],[7,"1.3倍","13",0]];
export interface IBodyTypeElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	Scale:string
	/**undefined*/
	SexType:number
 } 
export class BodyTypeConfig extends ConfigBase<IBodyTypeElement>{
	constructor(){
		super(EXCELDATA);
	}

}