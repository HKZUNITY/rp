import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"精灵角后发","217608",2],[2,"中长双马尾","221652",2],[3,"双麻花辫","240053",2],[4,"长后发","241443",2],[5,"长后发","349653",2],[6,"短发","358219",2],[7,"偏分短发","63910",1],[8,"短发","64719",1],[9,"麻花长辫","65777",1],[10,"短发","66161",1],[11,"马尾","66557",1]];
export interface IBackHairElement extends IElementBase{
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
export class BackHairConfig extends ConfigBase<IBackHairElement>{
	constructor(){
		super(EXCELDATA);
	}

}