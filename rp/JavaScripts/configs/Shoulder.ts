import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,"宠物","152395",["0","-35","-25","0","0","0","0.1","0.1","0.1"],0],[2,"宠物","152404",["0","-35","-25","0","0","0","0.1","0.1","0.1"],0],[3,"僵尸猫","217695",["0","-35","-35","0","0","0","1","1","1"],0],[4,"僵尸狗","217700",["0","-35","-35","0","0","0","1","1","1"],0]];
export interface IShoulderElement extends IElementBase{
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
export class ShoulderConfig extends ConfigBase<IShoulderElement>{
	constructor(){
		super(EXCELDATA);
	}

}