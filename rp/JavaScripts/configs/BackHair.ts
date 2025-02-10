import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"精灵角后发","217608",1],[2,"中长双马尾","221652",1],[3,"双麻花辫","240053",1],[4,"长后发","241443",1],[5,"长后发","349653",1],[6,"短发","358219",1],[7,"偏分短发","63910",2],[8,"短发","64719",2],[9,"麻花长辫","65777",2],[10,"短发","66161",2],[11,"马尾","66557",2]];
export interface IBackHairElement extends IElementBase{
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
export class BackHairConfig extends ConfigBase<IBackHairElement>{
	constructor(){
		super(EXCELDATA);
	}

}