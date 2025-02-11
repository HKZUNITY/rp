import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"古典盘发","296024",2],[2,"头饰长发","476304",2],[3,"带帽短发","478217",2],[4,"马尾辫","383405",2],[5,"护目镜飞机头","63887",1],[6,"金属头套","64546",1],[7,"大粗马尾","111578",1],[8,"绑带头发","120073",1],[9,"牢笼面具","126011",1],[10,"礼服头发","476243",1],[11,"网纹面罩","99383",1],[12,"狗头头套","118075",1]];
export interface IFullHairElement extends IElementBase{
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
export class FullHairConfig extends ConfigBase<IFullHairElement>{
	constructor(){
		super(EXCELDATA);
	}

}