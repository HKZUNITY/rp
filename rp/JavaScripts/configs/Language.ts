import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Name","Value","Value_Ch"],["","Key|ReadByName","MainLanguage","ChildLanguage"],[1,"Text_TheItemBarIsFull","The item bar is full","道具栏已满"],[2,"Text_ThisItemIsInUse","This item is in use","正在使用此道具"],[3,"Text_Tips1","Someone is using it, please try another one","有人正在使用，请换个试试"],[4,"Text_SetUp1","Base Setup","基础设置"],[5,"Text_PictureQuality","Picture Quality","画质"],[6,"Text_SoundEffects","Sound Effects","音效"],[7,"Text_BackgroundMusic","Background Music","背景音乐"],[8,"Text_ViewAngleScaling","View Angle Scaling","视角缩放"],[9,"Text_DisplayNicknames","Display Nicknames","显示昵称"],[10,"Text_ResetLocation","Reset Location","重置位置"],[11,"Text_RestoringSettings","Restoring Settings","还原设置"],[12,"Text_On","ON","开"],[13,"Text_Off","OFF","关"],[14,"Text_ObtainedTips","Obtained, open the knapsack to use","已获得，打开背包使用"],[15,"Text_Advertising","Advertising","广告奖励"],[16,"Text_ADGetTips","See the AD for free guide you get","看广告免费指引你获得"],[17,"Text_Dont","Don't","不要"],[18,"Text_Free","free","免费获得"],[19,"Text_Fail","Fail","指引失败，请重试"],[20,"Text_NoOnTheList","Not","未上榜"],[21,"Text_Ranking","Ranking","排名"],[22,"Text_Nickname","Nickname","昵称"],[23,"Text_Score","Score","分数"],[24,"Text_Duration","Duration","时长"],[25,"Text_TopInTermsOfDuration","Top {0} In Terms Of Duration","时长全服前{0}名"],[26,"Text_StartGame","Start the game","开始游戏"],[27,"Text_WelcomeTo","Welcome to\nMy Cherry blossom town","欢迎来到\n春节免费换装"],[28,"Text_UpNext","Up next","下一个"],[29,"Text_GuideEnd","With the guide over, start your trip to the cherry blossom town","引导结束，开启你的樱花小镇之旅吧"],[30,"Text_Close","Close","关闭"],[31,"Text_MyCharacterId","My Character ID- Share Friend Try On","我的角色ID-分享好友试穿"],[32,"Text_PleaseEnter","Please Enter The Friend Role ID","请输入好友角色ID"],[33,"Text_Cancel","Cancel","取消"],[34,"Text_FreeTryOn","Free Try On","免费试穿"],[35,"Text_SaveImagesForFree","Save images for free","免费保存形象"],[36,"Text_TryOnYourFriendAvatarForFree","Try On Your Friend's Avatar For Free","免费试穿好友的角色形象"],[37,"Text_CopySuccessfully","Copy Successfully","复制成功"],[38,"Text_InvalidID","Invalid ID!","ID无效！"],[39,"Text_Loading","Loading","加载中"],[40,"Text_TryItOnSuccessfully","Try it on successfully","试穿成功"],[41,"Text_CopyTheCharacterIDShareFriendsTryOn","Copy the character ID share friends try on","复制角色ID分享好友试穿"],[42,"Text_TryItOnForFree","Try it on for free","看广告免费试穿"],[43,"Text_GuideTips","Reach near the target point","达到目标点附近"],[44,"Text_BootPrompt","Boot prompt","引导提示"],[45,"Text_FreeGuideYouGet","Free guide you get","免费指引你获得"],[46,"Text_SignIn_1","Activity is not enabled","活动未开启"],[47,"Text_SignIn_2","Successful costume change","换装成功"],[48,"Text_SignIn_3","Insufficient check-in time","签到时间不足"],[49,"Text_SignIn_4","Check-in bonus","签到奖励"],[50,"Text_SignIn_5","Cumulative Check-In For {0} Days","已经累积签到{0}天"],[51,"Text_SignIn_6","Has been \nObtained","已获得"],[52,"Text_SignIn_7","Change of dress","换装"],[53,"Text_SignIn_8","Insufficient check-in","签到不足"],[54,"Text_SignIn_9","Day {0}","第{0}天"],[55,"Text_SignIn_10","Sign In","签到"],[56,"Text_FreeChangeOfClothes","Free change of clothes","免费换装"],[57,"Text_FreeChangeOfClothes1","Try on, please wait patiently.","试穿中，请耐心等待。"],[58,"Text_FreeChangeOfClothes2","Free fitting {0} minutes","免费试穿{0}分钟"],[59,"Text_FreeChangeOfClothes3","Try it on, please go back to try it on","试穿结束，请打开商店重新试穿"],[60,"Text_Rank1","The leaderboard is wrong.","排行榜出错啦"]];
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
	/**已获得，打开背包使用*/
	get Text_ObtainedTips():ILanguageElement{return this.getElement(14)};
	/**广告奖励*/
	get Text_Advertising():ILanguageElement{return this.getElement(15)};
	/**看广告免费指引你获得*/
	get Text_ADGetTips():ILanguageElement{return this.getElement(16)};
	/**不要*/
	get Text_Dont():ILanguageElement{return this.getElement(17)};
	/**免费获得*/
	get Text_Free():ILanguageElement{return this.getElement(18)};
	/**指引失败，请重试*/
	get Text_Fail():ILanguageElement{return this.getElement(19)};
	/**未上榜*/
	get Text_NoOnTheList():ILanguageElement{return this.getElement(20)};
	/**排名*/
	get Text_Ranking():ILanguageElement{return this.getElement(21)};
	/**昵称*/
	get Text_Nickname():ILanguageElement{return this.getElement(22)};
	/**分数*/
	get Text_Score():ILanguageElement{return this.getElement(23)};
	/**时长*/
	get Text_Duration():ILanguageElement{return this.getElement(24)};
	/**时长全服前{0}名*/
	get Text_TopInTermsOfDuration():ILanguageElement{return this.getElement(25)};
	/**开始游戏*/
	get Text_StartGame():ILanguageElement{return this.getElement(26)};
	/**欢迎来到
春节免费换装*/
	get Text_WelcomeTo():ILanguageElement{return this.getElement(27)};
	/**下一个*/
	get Text_UpNext():ILanguageElement{return this.getElement(28)};
	/**引导结束，开启你的樱花小镇之旅吧*/
	get Text_GuideEnd():ILanguageElement{return this.getElement(29)};
	/**关闭*/
	get Text_Close():ILanguageElement{return this.getElement(30)};
	/**我的角色ID-分享好友试穿*/
	get Text_MyCharacterId():ILanguageElement{return this.getElement(31)};
	/**请输入好友角色ID*/
	get Text_PleaseEnter():ILanguageElement{return this.getElement(32)};
	/**取消*/
	get Text_Cancel():ILanguageElement{return this.getElement(33)};
	/**免费试穿*/
	get Text_FreeTryOn():ILanguageElement{return this.getElement(34)};
	/**免费保存形象*/
	get Text_SaveImagesForFree():ILanguageElement{return this.getElement(35)};
	/**免费试穿好友的角色形象*/
	get Text_TryOnYourFriendAvatarForFree():ILanguageElement{return this.getElement(36)};
	/**复制成功*/
	get Text_CopySuccessfully():ILanguageElement{return this.getElement(37)};
	/**ID无效！*/
	get Text_InvalidID():ILanguageElement{return this.getElement(38)};
	/**加载中*/
	get Text_Loading():ILanguageElement{return this.getElement(39)};
	/**试穿成功*/
	get Text_TryItOnSuccessfully():ILanguageElement{return this.getElement(40)};
	/**复制角色ID分享好友试穿*/
	get Text_CopyTheCharacterIDShareFriendsTryOn():ILanguageElement{return this.getElement(41)};
	/**看广告免费试穿*/
	get Text_TryItOnForFree():ILanguageElement{return this.getElement(42)};
	/**达到目标点附近*/
	get Text_GuideTips():ILanguageElement{return this.getElement(43)};
	/**引导提示*/
	get Text_BootPrompt():ILanguageElement{return this.getElement(44)};
	/**免费指引你获得*/
	get Text_FreeGuideYouGet():ILanguageElement{return this.getElement(45)};
	/**活动未开启*/
	get Text_SignIn_1():ILanguageElement{return this.getElement(46)};
	/**换装成功*/
	get Text_SignIn_2():ILanguageElement{return this.getElement(47)};
	/**签到时间不足*/
	get Text_SignIn_3():ILanguageElement{return this.getElement(48)};
	/**签到奖励*/
	get Text_SignIn_4():ILanguageElement{return this.getElement(49)};
	/**已经累积签到{0}天*/
	get Text_SignIn_5():ILanguageElement{return this.getElement(50)};
	/**已获得*/
	get Text_SignIn_6():ILanguageElement{return this.getElement(51)};
	/**换装*/
	get Text_SignIn_7():ILanguageElement{return this.getElement(52)};
	/**签到不足*/
	get Text_SignIn_8():ILanguageElement{return this.getElement(53)};
	/**第{0}天*/
	get Text_SignIn_9():ILanguageElement{return this.getElement(54)};
	/**签到*/
	get Text_SignIn_10():ILanguageElement{return this.getElement(55)};
	/**免费换装*/
	get Text_FreeChangeOfClothes():ILanguageElement{return this.getElement(56)};
	/**试穿中，请耐心等待。*/
	get Text_FreeChangeOfClothes1():ILanguageElement{return this.getElement(57)};
	/**免费试穿{0}分钟*/
	get Text_FreeChangeOfClothes2():ILanguageElement{return this.getElement(58)};
	/**试穿结束，请打开商店重新试穿*/
	get Text_FreeChangeOfClothes3():ILanguageElement{return this.getElement(59)};
	/**排行榜出错啦*/
	get Text_Rank1():ILanguageElement{return this.getElement(60)};

}