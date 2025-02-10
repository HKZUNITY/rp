import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","SkinTone","SexType"],["","","",""],[1,null,null,0],[2,null,"FDF4EF",0],[3,null,"FAEDE5",0],[4,null,"F8E7E0",0],[5,null,"F5E2D4",0],[6,null,"F3D8C7",0],[7,null,"EACCC1",0],[8,null,"F6E6D6",0],[9,null,"F0DEC8",0],[10,null,"EDD9BE",0],[11,null,"E8D0B4",0],[12,null,"E7CAA2",0],[13,null,"DCBB8E",0],[14,null,"DCC2A7",0],[15,null,"C7A58C",0],[16,null,"AB8874",0],[17,null,"96735F",0],[18,null,"805F4C",0],[19,null,"5B4337",0],[20,null,"D0B9AB",0],[21,null,"C1ABA0",0],[22,null,"A38881",0],[23,null,"806B68",0],[24,null,"64504F",0],[25,null,"423431",0],[26,null,"E4C3A0",0],[27,null,"E3BA8C",0],[28,null,"D1A173",0],[29,null,"B37D51",0],[30,null,"976238",0],[31,null,"6D3F25",0],[32,null,"7D553C",0],[33,null,"794F37",0],[34,null,"5F3C26",0],[35,null,"5B3822",0],[36,null,"3D2314",0],[37,null,"341C10",0],[38,null,"F9E175",0],[39,null,"B0C87E",0],[40,null,"8AB8DC",0],[41,null,"FBF5F5",0]];
export interface ISkinToneElement extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	SkinTone:string
	/**undefined*/
	SexType:number
 } 
export class SkinToneConfig extends ConfigBase<ISkinToneElement>{
	constructor(){
		super(EXCELDATA);
	}

}