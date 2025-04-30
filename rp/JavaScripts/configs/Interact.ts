import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","ModelGuid","ModelGuid_C","BagId","NpcId","ShareId","NpcAnimationId"],["","","","","","","",""],[1,"224AC214",null,null,10106,null,0,null,"电吉他"],[2,"35CDCC44",null,null,10193,null,0,null,"电吉他"],[3,"34350953",null,null,10194,null,0,null,"吉他"],[4,"3EA51D09",null,null,10195,null,0,null,"吉他"],[5,"04AEE481",null,null,10420,null,0,null,"钢琴"],[6,"05ED08EB",null,null,10440,null,0,null,"架子鼓"],[7,"0CAEBC7B",null,null,10438,null,0,null,"灯球"],[196,"15F06D91",null,null,60004,null,0,null,"冲浪板"],[197,"33053BEF",null,null,60005,null,0,null,"冲浪板_1"],[207,null,null,null,0,"39AB2FB0",2,"151060","冲浪板"],[208,null,null,null,0,"254A21DD",3,"151060","冲浪板"],[209,null,null,null,0,"31DE1825",7,"151060","鱼"],[210,null,null,null,0,"0A031A75",8,"151060","滑板"]];
export interface IInteractElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**触发器*/
	TriggerGuid:string
	/**undefined*/
	ModelGuid:string
	/**undefined*/
	ModelGuid_C:string
	/**undefined*/
	BagId:number
	/**undefined*/
	NpcId:string
	/**undefined*/
	ShareId:number
	/**undefined*/
	NpcAnimationId:string
 } 
export class InteractConfig extends ConfigBase<IInteractElement>{
	constructor(){
		super(EXCELDATA);
	}

}