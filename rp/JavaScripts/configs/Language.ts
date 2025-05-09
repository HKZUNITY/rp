import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Name","Value","Value_Ch"],["","Key|ReadByName","MainLanguage","ChildLanguage"],[1,"Text_TheItemBarIsFull","The item bar is full","道具栏已满"],[2,"Text_ThisItemIsInUse","This item is in use","正在使用此道具"],[3,"Text_Tips1","Someone is using it, please try another one","有人正在使用，请换个试试"],[4,"Text_SetUp1","Base Setup","基础设置"],[5,"Text_PictureQuality","Picture Quality","画质"],[6,"Text_SoundEffects","Sound Effects","音效"],[7,"Text_BackgroundMusic","Background Music","背景音乐"],[8,"Text_ViewAngleScaling","View Angle Scaling","视角缩放"],[9,"Text_DisplayNicknames","Display Nicknames","显示昵称"],[10,"Text_ResetLocation","Reset Location","重置位置"],[11,"Text_RestoringSettings","Restoring Settings","还原设置"],[12,"Text_On","ON","开"],[13,"Text_Off","OFF","关"]];
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
	/**基础设置*/
	get Text_SetUp1():ILanguageElement{return this.getElement(4)};
	/**画质*/
	get Text_PictureQuality():ILanguageElement{return this.getElement(5)};
	/**音效*/
	get Text_SoundEffects():ILanguageElement{return this.getElement(6)};
	/**背景音乐*/
	get Text_BackgroundMusic():ILanguageElement{return this.getElement(7)};
	/**视角缩放*/
	get Text_ViewAngleScaling():ILanguageElement{return this.getElement(8)};
	/**显示昵称*/
	get Text_DisplayNicknames():ILanguageElement{return this.getElement(9)};
	/**重置位置*/
	get Text_ResetLocation():ILanguageElement{return this.getElement(10)};
	/**还原设置*/
	get Text_RestoringSettings():ILanguageElement{return this.getElement(11)};
	/**开*/
	get Text_On():ILanguageElement{return this.getElement(12)};
	/**关*/
	get Text_Off():ILanguageElement{return this.getElement(13)};

}