import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"心","22746",0],[2,"邦迪","32087",0],[3,"樱花","32097",0],[4,"五角星","32102",0],[5,"爱心","32104",0]];
export interface ILensElement extends IElementBase{
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
export class LensConfig extends ConfigBase<ILensElement>{
	constructor(){
		super(EXCELDATA);
	}

}