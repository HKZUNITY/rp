import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,null,"156405",["0","50","0","0","0","-90","1","1","1"],0],[2,null,"267954",["0","50","0","0","0","-90","1","1","1"],0],[3,null,"289523",["0","50","0","0","0","-90","1","1","1"],0],[4,null,"289524",["0","50","0","0","0","-90","1","1","1"],0],[5,null,"289525",["0","50","0","0","0","-90","1","1","1"],0],[6,null,"289526",["0","50","0","0","0","-90","1","1","1"],0],[7,null,"289527",["0","50","0","0","0","-90","1","1","1"],0],[8,null,"365903",["0","50","0","0","0","-90","1","1","1"],0],[9,null,"365906",["0","50","0","0","0","-90","1","1","1"],0],[10,null,"365918",["0","50","0","0","0","-90","1","1","1"],0],[11,null,"365921",["0","50","0","0","0","-90","1","1","1"],0],[12,null,"365922",["0","50","0","0","0","-90","1","1","1"],0],[13,null,"366268",["0","50","0","0","0","-90","1","1","1"],0]];
export interface IPetElement extends IElementBase{
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
export class PetConfig extends ConfigBase<IPetElement>{
	constructor(){
		super(EXCELDATA);
	}

}