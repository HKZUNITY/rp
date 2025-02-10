import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"古典盘发","296024",1],[2,"头饰长发","476304",1],[3,"带帽短发","478217",1],[4,"马尾辫","383405",1],[5,"护目镜飞机头","63887",2],[6,"金属头套","64546",2],[7,"大粗马尾","111578",2],[8,"绑带头发","120073",2],[9,"牢笼面具","126011",2],[10,"礼服头发","476243",2],[11,"网纹面罩","99383",2],[12,"狗头头套","118075",2]];
export interface IFullHairElement extends IElementBase{
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
export class FullHairConfig extends ConfigBase<IFullHairElement>{
	constructor(){
		super(EXCELDATA);
	}

}