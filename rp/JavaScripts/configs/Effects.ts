import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,"法阵","31645",["0","0","0","0","0","0","1","1","1"],0],[2,"光环","32240",["0","0","0","0","0","0","1","1","1"],0],[3,"光环","59956",["0","0","0","0","0","0","1","1","1"],0],[4,"传送门","88757",["-30","0","100","0","0","-90","1","1","1"],0]];
export interface IEffectsElement extends IElementBase{
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
export class EffectsConfig extends ConfigBase<IEffectsElement>{
	constructor(){
		super(EXCELDATA);
	}

}