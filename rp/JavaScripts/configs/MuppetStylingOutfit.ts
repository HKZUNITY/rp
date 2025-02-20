import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"交个朋友鸭","270465",2],[2,"交个朋友鸭","270464",2],[3,"大头玩偶服","164427",2],[4,"猫咪玩偶服","164422",2],[5,"猫猫头套服饰","163304",2],[6,null,"162955",1],[7,null,"164354",1],[8,null,"164356",1],[9,null,"164359",1],[10,null,"164364",1],[11,null,"164366",1],[12,null,"164367",1],[13,null,"164368",1],[14,null,"164377",1],[15,null,"164417",1],[16,null,"212971",1],[17,null,"213498",1],[18,null,"216268",1],[19,null,"216269",1],[20,null,"216270",1],[21,null,"142135",2],[22,null,"141617",2]];
export interface IMuppetStylingOutfitElement extends IElementBase{
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
export class MuppetStylingOutfitConfig extends ConfigBase<IMuppetStylingOutfitElement>{
	constructor(){
		super(EXCELDATA);
	}

}