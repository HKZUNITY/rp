import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"一定过套装","253153",1],[2,"一定过套装","263401",2],[3,"主打求神套装","264188",1],[4,"主打求神套装","264189",2],[5,"新年装","297941",1],[6,"温柔女孩","303702",1],[7,"阳光男","303705",2],[8,"叛逆女孩","303706",1],[9,"叛逆男孩","303703",2],[10,"制服女","367076",1]];
export interface IOutfitElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	AssetId:string
	/**0-Common
1-FeMale
2-Male*/
	SexType:number
 } 
export class OutfitConfig extends ConfigBase<IOutfitElement>{
	constructor(){
		super(EXCELDATA);
	}

}