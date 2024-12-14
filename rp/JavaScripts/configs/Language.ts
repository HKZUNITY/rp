import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Name","Value","Value_Ch"],["","Key|ReadByName","MainLanguage","ChildLanguage"],[1,"Text_TheItemBarIsFull","The item bar is full","道具栏已满"],[2,"Text_ThisItemIsInUse","This item is in use","正在使用此道具"],[3,"Text_Tips1","Someone is using it, please try another one","有人正在使用，请换个试试"]];
export interface ILanguageElement extends IElementBase{
 	/**唯一ID*/
	ID:number
	/**名字*/
	Name:string
	/**英文*/
	Value:string
 } 
export class LanguageConfig extends ConfigBase<ILanguageElement>{
	constructor(){
		super(EXCELDATA);
	}
	/**道具栏已满*/
	get Text_TheItemBarIsFull():ILanguageElement{return this.getElement(1)};
	/**正在使用此道具*/
	get Text_ThisItemIsInUse():ILanguageElement{return this.getElement(2)};
	/**有人正在使用，请换个试试*/
	get Text_Tips1():ILanguageElement{return this.getElement(3)};

}