import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","Transform","SexType"],["","","","",""],[1,"眼镜","324491",["-13","0","-6","0","0","-90","1","1","1"],0],[2,"眼镜","225166",["-10","0","-5","0","0","-90","1","1","1"],0],[3,"眼镜","366489",["-11","0","-7","0","0","-90","1","1","1"],0],[4,"眼镜","225171",["-4","0","0","0","0","-90","1","1","1"],0],[5,"眼罩","278280",["-13","0","-5","0","0","-90","1","1","1"],0]];
export interface IFacingElement extends IElementBase{
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
export class FacingConfig extends ConfigBase<IFacingElement>{
	constructor(){
		super(EXCELDATA);
	}

}