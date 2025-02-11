import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","AssetId","SexType"],["","","",""],[1,"眉毛","32105",2],[2,"眉毛","48590",2],[3,"眉毛","48591",2],[4,"眉毛","48592",2],[5,"眉毛","48593",2],[6,"眉毛","48594",2],[7,"麻吕眉","48595",2],[8,"眉毛","30392",1],[9,"剑眉","48599",1]];
export interface IEyebrowsElement extends IElementBase{
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
export class EyebrowsConfig extends ConfigBase<IEyebrowsElement>{
	constructor(){
		super(EXCELDATA);
	}

}