import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","TriggerGuid","ModelGuid","ModelGuid_C","BagId","NpcId","ShareId","NpcAnimationId"],["","","","","","","",""],[1,null,null,null,0,"31DE1825",7,"151060","鱼"],[2,null,null,null,0,"0A031A75",8,"151060","滑板"]];
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