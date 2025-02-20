import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"交个朋友鸭","164416",2],[2,"交个朋友鸭","164420",2],[3,"大头玩偶服","164425",2],[4,"猫咪玩偶服","321428",2],[5,"猫猫头套服饰","162937",1],[6,null,"162938",1],[7,null,"162946",1],[8,null,"164355",1],[9,null,"164360",1],[10,null,"164361",1],[11,null,"164362",1],[12,null,"164371",1],[13,null,"164373",1],[14,null,"164378",1],[15,null,"142261",2],[16,null,"142262",2],[17,null,"142891",2],[18,null,"142893",2],[19,null,"142902",2],[20,null,"349374",2],[21,null,"350260",2],[22,null,"142884",1],[23,null,"142885",1],[24,null,"142886",1],[25,null,"142887",1],[26,null,"142888",1],[27,null,"142889",1],[28,null,"142890",1],[29,null,"142892",1],[30,null,"142894",1],[31,null,"142895",1],[32,null,"142896",1],[33,null,"142897",1],[34,null,"142898",1],[35,null,"142899",1],[36,null,"142900",1],[37,null,"142901",1],[38,null,"142903",1],[39,null,"142904",1],[40,null,"142905",1],[41,null,"142906",1],[42,null,"142907",1]];
export interface IHeroStylingOutfitElement extends IElementBase{
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
export class HeroStylingOutfitConfig extends ConfigBase<IHeroStylingOutfitElement>{
	constructor(){
		super(EXCELDATA);
	}

}