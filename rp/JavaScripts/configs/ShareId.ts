import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","ShareId"],["",""],[1,"1022S89K"],[2,"1022S8X6"],[3,"1022S7KJ"],[4,"1022S7KD"],[5,"1022S7K9"],[6,"1022S88E"],[7,"1022S7IE"],[8,"1022S861"],[9,"1022S85O"],[10,"1022S85E"],[11,"1022S8QF"],[12,"1022S82R"],[13,"1022S8R5"],[14,"1022S8RC"],[15,"1022S8RL"],[16,"1022S7FQ"],[17,"1022S8RW"],[18,"1022S8SB"],[19,"1022S7G7"],[20,"1022S84B"],[21,"1022S7GF"],[22,"1022S7GT"],[23,"1022S8T2"],[24,"1022S855"],[25,"10004K5Z"],[26,"10004K60"]];
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