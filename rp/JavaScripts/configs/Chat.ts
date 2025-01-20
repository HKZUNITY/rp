import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["Id","Chats","ChatChilds"],["","",""],[1,["Praise","赞美"],[["Your outfit looks great!","你的搭配真好看！"],["This dress fits you well!","这件衣服好适合你！"],["Hair and makeup match!","发型和妆容绝配！"],["You're so good!","你太会搭了！"]]],[2,["Help","求助"],[["How about looking at this set for me?","帮我看看这套怎么样？"],["What shoes would go with this dress?","这件衣服配什么鞋子好？"],["Are there any recommended color combinations?","有没有推荐的颜色搭配？"],["Does this hairstyle suit me?","这个发型适合我吗？"]]],[3,["Interaction","互动"],[["Share your outfit!","分享一下穿搭吧！"],["PK to match it!","来PK一下搭配吧！"],["What style do you prefer?","你喜欢什么风格？"],["We can try each other on!","我们可以互相试穿哦！"]]],[4,["Thank you","感谢"],[["Thanks for the advice!","谢谢你的建议！"],["Thanks for sharing!","感谢你的分享！"],["Thanks for the compliment!","谢谢夸奖！"],["Thanks for your help!","感谢你的帮助！"]]],[5,["Make fun of","吐槽"],[["This dress is so hard to match!","这件衣服太难搭了！"],["You are out of line!","你好过分！"],["No hee hee!","不嘻嘻！"]]],[6,["Invitation","邀请"],[["Add a friend!","加个好友吧！"],["Team up!","一起组队吧！"],["Come on, my dress!","试穿我的穿搭！"]]],[7,["Show Time!",")*o*( 我要开始表演了~"],null]];
export interface IChatElement extends IElementBase{
 	/**唯一ID*/
	Id:number
	/**undefined*/
	Chats:Array<string>
	/**undefined*/
	ChatChilds:Array<Array<string>>
 } 
export class ChatConfig extends ConfigBase<IChatElement>{
	constructor(){
		super(EXCELDATA);
	}

}