import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,"法阵","31645",null,0],[2,"光环","32240",null,0]];
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