import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","ShareId"],["",""],[1,"1022S89K","电锯人"],[2,"1022S8X6","黑爵士"],[3,"1022S7KJ","白-爵士"],[4,"1022S7KD","鬼"],[5,"1022S7K9","青蛙"],[6,"1022S88E","恐龙"],[7,"1022S7IE","射手-"],[8,"1022S861","繁星"],[9,"1022S85O","竹节虫-女-黑"],[10,"1022S85E","竹节虫-女-黑"],[11,"1022S8QF","竹节虫-男-黑"],[12,"1022S82R","竹节虫-女-白"],[13,"1022S8R5","挨个子-女"],[14,"1022S8RC","竹节虫-女-黑"],[15,"1022S8RL","新手礼包-矮个子"],[16,"1022S7FQ","挨个子-女白"],[17,"1022S8RW","挨个子-女白"],[18,"1022S8SB","竹节虫-女-白"],[19,"1022S7G7","挨个子-女黑"],[20,"1022S84B","竹节虫-女-白"],[21,"1022S7GF","挨个子-女黑"],[22,"1022S7GT","兔子帽子女"],[23,"1022S8T2","棺材女红"],[24,"1022S855","挨个子-女白"],[25,"102383MF","圣诞-女"],[26,"102383TY","圣诞男"],[27,"102382PL","女"]];
export interface IShareIdElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**分享ID*/
	ShareId:string
 } 
export class ShareIdConfig extends ConfigBase<IShareIdElement>{
	constructor(){
		super(EXCELDATA);
	}

}