import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,"尾巴","136179",["0","0","0","0","0","0","1","1","1"],0],[2,"孔雀尾巴","292600",["0","0","0","-90","0","90","1","1","1"],0],[3,"尾巴","136173",["0","0","0","-90","0","-90","1","1","1"],0],[4,"尾巴","453459",["0","0","0","0","0","0","1","1","1"],0],[5,"尾巴","453460",["0","0","0","0","0","0","1","1","1"],0],[6,"尾巴","404432",["0","0","0","0","0","0","1","1","1"],0],[7,"狐狸尾巴","226476",["0","0","0","0","0","0","1","1","1"],0],[8,"人鱼尾巴","493583",["0","0","0","0","0","0","1","1","1"],0],[9,"尾巴","323388",["0","0","0","0","0","0","1","1","1"],0]];
export interface IHipElement extends IElementBase{
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
export class HipConfig extends ConfigBase<IHipElement>{
	constructor(){
		super(EXCELDATA);
	}

}