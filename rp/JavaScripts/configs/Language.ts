import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Name","Value","Value_Ch"],["","Key|ReadByName","MainLanguage","ChildLanguage"],[1,"Text_TheItemBarIsFull","The item bar is full","道具栏已满"],[2,"Text_ThisItemIsInUse","This item is in use","正在使用此道具"],[3,"Text_Tips1","Someone is using it, please try another one","有人正在使用，请换个试试"],[4,"Text_SetUp1","Base Setup","基础设置"],[5,"Text_PictureQuality","Picture Quality","画质"],[6,"Text_SoundEffects","Sound Effects","音效"],[7,"Text_BackgroundMusic","Background Music","背景音乐"],[8,"Text_ViewAngleScaling","View Angle Scaling","视角缩放"],[9,"Text_DisplayNicknames","Display Nicknames","显示昵称"],[10,"Text_ResetLocation","Reset Location","重置位置"],[11,"Text_RestoringSettings","Restoring Settings","还原设置"],[12,"Text_On","ON","开"],[13,"Text_Off","OFF","关"],[14,"Text_ObtainedTips","Obtained, open the knapsack to use","已获得，打开背包使用"],[15,"Text_Advertising","Advertising","广告奖励"],[16,"Text_ADGetTips","See the AD for free guide you get","看广告免费指引你获得"],[17,"Text_Dont","Don't","不要"],[18,"Text_Free","free","免费获得"],[19,"Text_Fail","Fail","指引失败，请重试"],[20,"Text_NoOnTheList","Not","未上榜"],[21,"Text_Ranking","Ranking","排名"],[22,"Text_Nickname","Nickname","昵称"],[23,"Text_Score","Score","分数"],[24,"Text_Duration","Duration","时长"],[25,"Text_TopInTermsOfDuration","Top {0} In Terms Of Duration","时长全服前{0}名"],[26,"Text_StartGame","Start the game","开始游戏"],[27,"Text_WelcomeTo","Welcome to\nMy Cherry blossom town","欢迎来到\n春节免费换装"],[28,"Text_UpNext","Up next","下一个"],[29,"Text_GuideEnd","With the guide over, start your trip to the cherry blossom town","引导结束，开启你的樱花小镇之旅吧"],[30,"Text_Close","Close","关闭"],[31,"Text_MyCharacterId","My Character ID- Share Friend Try On","我的角色ID-分享好友试穿"],[32,"Text_PleaseEnter","Please Enter The Friend Role ID","请输入好友角色ID"],[33,"Text_Cancel","Cancel","取消"],[34,"Text_FreeTryOn","Free Try On","免费试穿"],[35,"Text_SaveImagesForFree","Save images for free","免费保存形象"],[36,"Text_TryOnYourFriendAvatarForFree","Try On Your Friend's Avatar For Free","免费试穿好友的角色形象"],[37,"Text_CopySuccessfully","Copy Successfully","复制成功"],[38,"Text_InvalidID","Invalid ID!","ID无效！"],[39,"Text_Loading","Loading","加载中"],[40,"Text_TryItOnSuccessfully","Try it on successfully","试穿成功"],[41,"Text_CopyTheCharacterIDShareFriendsTryOn","Copy the character ID share friends try on","复制角色ID分享好友试穿"],[42,"Text_TryItOnForFree","Try it on for free","看广告免费试穿"],[43,"Text_GuideTips","Reach near the target point","达到目标点附近"],[44,"Text_BootPrompt","Boot prompt","引导提示"],[45,"Text_FreeGuideYouGet","Free guide you get","免费指引你获得"],[46,"Text_SignIn_1","Activity is not enabled","活动未开启"],[47,"Text_SignIn_2","Successful costume change","换装成功"],[48,"Text_SignIn_3","Insufficient check-in time","签到时间不足"],[49,"Text_SignIn_4","Check-in bonus","签到奖励"],[50,"Text_SignIn_5","Cumulative Check-In For {0} Days","已经累积签到{0}天"],[51,"Text_SignIn_6","Has been \nObtained","已获得"],[52,"Text_SignIn_7","Change of dress","换装"],[53,"Text_SignIn_8","Insufficient check-in","签到不足"],[54,"Text_SignIn_9","Day {0}","第{0}天"],[55,"Text_SignIn_10","Sign In","签到"],[56,"Text_OpenMallTextBlock","Free change of clothes","免费换装"],[57,"Text_FreeChangeOfClothes1","Try on, please wait patiently.","试穿中，请耐心等待。"],[58,"Text_FreeChangeOfClothes2","Free fitting {0} minutes","免费试穿{0}分钟"],[59,"Text_FreeChangeOfClothes3","Try it on, please go back to try it on","试穿结束，请打开商店重新试穿"],[60,"Text_Rank1","The leaderboard is wrong.","排行榜出错啦"],[61,"Text_Tab1_1","Appearance","捏脸"],[62,"Text_Tab1_2","Clothing","换装"],[63,"Text_Tab1_3","Collection","收藏"],[64,"Text_Tab1_4","Test","测试"],[65,"Text_Tab2_101","Body Type","体型"],[66,"Text_Tab2_102","Skin Tone","肤色"],[67,"Text_Tab2_103","Face","脸型"],[68,"Text_Tab2_104","Eyes","眼睛"],[69,"Text_Tab2_105","Eyebrows","眉毛"],[70,"Text_Tab2_106","Makeup","妆容"],[71,"Text_Tab2_107","Expression","表情"],[72,"Text_Tab2_108","Outfit","套装"],[73,"Text_Tab2_109","Hair","头发"],[74,"Text_Tab2_110","Top","上衣"],[75,"Text_Tab2_111","Bottom","下衣"],[76,"Text_Tab2_112","Gloves","鞋子"],[77,"Text_Tab2_113","Shoes","手套"],[78,"Text_Tab2_114","Pet","宠物"],[79,"Text_Tab2_115","Accessory","饰品"],[80,"Text_Tab2_501","Body Type","体型","收藏"],[81,"Text_Tab2_502","Skin Tone","肤色","收藏"],[82,"Text_Tab2_503","Face","脸型","收藏"],[83,"Text_Tab2_504","Eyes","眼睛","收藏"],[84,"Text_Tab2_505","Eyebrows","眉毛","收藏"],[85,"Text_Tab2_506","Makeup","妆容","收藏"],[86,"Text_Tab2_507","Expression","表情","收藏"],[87,"Text_Tab2_508","Outfit","套装","收藏"],[88,"Text_Tab2_509","Hair","头发","收藏"],[89,"Text_Tab2_510","Top","上衣","收藏"],[90,"Text_Tab2_511","Bottom","下衣","收藏"],[91,"Text_Tab2_512","Gloves","鞋子","收藏"],[92,"Text_Tab2_513","Shoes","手套","收藏"],[93,"Text_Tab2_514","Pet","宠物","收藏"],[94,"Text_Tab2_515","Accessory","饰品","收藏"],[95,"Text_Tab3_1001","Pupil Style","瞳孔样式"],[96,"Text_Tab3_1002","Lens","瞳孔贴花"],[97,"Text_Tab3_1003","Upper Highlight","上高光"],[98,"Text_Tab3_1004","Lower Highlight","下高光"],[99,"Text_Tab3_1005","Eyelashes","睫毛"],[100,"Text_Tab3_1006","Eyeshadow","眼影"],[101,"Text_Tab3_1007","Blush","腮红"],[102,"Text_Tab3_1008","Lip Makeup","口红"],[103,"Text_Tab3_1009","Face Tattoo","面部彩绘"],[104,"Text_Tab3_1010","Full Hair","整体发型"],[105,"Text_Tab3_1011","Front Hair","前发"],[106,"Text_Tab3_1012","Back Hair","后发"],[107,"Text_Tab3_1013","Left Hand","左手"],[108,"Text_Tab3_1014","Right Hand","右手"],[109,"Text_Tab3_1015","Back","背饰"],[110,"Text_Tab3_1016","Head","头饰"],[111,"Text_Tab3_1017","Face","面饰"],[112,"Text_Tab3_1018","Hip","臀部"],[113,"Text_Tab3_1019","Shoulder","肩部"],[114,"Text_Tab3_1020","Effects","特效"],[115,"Text_Tab3_2001","Pupil Style","瞳孔样式","收藏"],[116,"Text_Tab3_2002","Lens","瞳孔贴花","收藏"],[117,"Text_Tab3_2003","Upper Highlight","上高光","收藏"],[118,"Text_Tab3_2004","Lower Highlight","下高光","收藏"],[119,"Text_Tab3_2005","Eyelashes","睫毛","收藏"],[120,"Text_Tab3_2006","Eyeshadow","眼影","收藏"],[121,"Text_Tab3_2007","Blush","腮红","收藏"],[122,"Text_Tab3_2008","Lip Makeup","口红","收藏"],[123,"Text_Tab3_2009","Face Tattoo","面部彩绘","收藏"],[124,"Text_Tab3_2010","Full Hair","整体发型","收藏"],[125,"Text_Tab3_2011","Front Hair","前发","收藏"],[126,"Text_Tab3_2012","Back Hair","后发","收藏"],[127,"Text_Tab3_2013","Left Hand","左手","收藏"],[128,"Text_Tab3_2014","Right Hand","右手","收藏"],[129,"Text_Tab3_2015","Back","背饰","收藏"],[130,"Text_Tab3_2016","Ear","耳饰","收藏"],[131,"Text_Tab3_2017","Face","面饰","收藏"],[132,"Text_Tab3_2018","Hip","臀部","收藏"],[133,"Text_Tab3_2019","Shoulder","肩部","收藏"],[134,"Text_Tab3_2020","Effects","特效","收藏"],[135,"Text_OpenClothTextBlock","Shop","换装商店"],[136,"Text_MallItem_Free","Free","免费"],[137,"Text_ThisFeatureIsNotEnabled","This feature is not enabled","此功能未开启"],[138,"Text_BodyTypeDescribe","{0} times","{0}倍"],[139,"Text_Expression_Default","Default","默认表情"],[140,"Text_Expression_Smile","Smile","微笑"],[141,"Text_Expression_HaveFun","Have Fun","开心"],[142,"Text_Expression_Sad","Sad","伤心"],[143,"Text_Expression_GetAngry","Get Angry","生气"],[144,"Text_Expression_Embarrassment","Embarrassment","尴尬"],[145,"Text_Expression_Laugh","Laugh","笑"],[146,"Text_Expression_BeNaughty","Be Naughty","调皮"],[147,"Text_Expression_Cute","Cute","可爱"],[148,"Text_Expression_Doubt","Doubt","疑惑"],[149,"Text_Tab3_1021","Trailing","拖尾"],[150,"Text_Tab3_2021","Trailing","拖尾","收藏"],[151,"Text_ColorPick","Color Pick","调色板"],[152,"Text_ColorPart","Part {0}","部位 {0}"],[153,"Text_NotSupportToning","This {0} Does Not Support Toning","这个{0}不支持调色"],[154,"Text_PupilColor","Pupil Color","瞳孔颜色"],[155,"Text_LeftPupilColor","Left Pupil Color","左瞳孔颜色"],[156,"Text_RightPupilColor","Right Pupil Color","右瞳孔颜色"],[157,"Text_DecalColor","Decal Color","贴花颜色"],[158,"Text_UpperHighlightColor","Upper Highlight Color","上高光颜色"],[159,"Text_LowerHighlightColor","Lower Highlight Color","下高光颜色"],[160,"Text_EyelashColor","Eyelash Color","睫毛颜色"],[161,"Text_EyeshaowColor","Eyeshaow Color","眼影颜色"],[162,"Text_BlushColor","Blush Color","腮红颜色"],[163,"Text_LipstickColor","Lipstick Color","口红颜色"],[164,"Text_Monochrome","Monochrome","单色"],[165,"Text_TopColor","Top Color","发顶色"],[166,"Text_TailColor","Tail Color","发尾色"],[167,"Text_FreeSave","Free Save","免费保存"],[168,"Text_ResetImage","Reset Image","重置平台形象"],[169,"Text_ResetImageFaild","Failed to reset platform image","重置平台形象失败"],[170,"Text_SaveColor","Save {0} Color","保存{0}颜色"],[171,"Text_SaveTips","Save Tips","保存提示"],[172,"Text_Save","Save","保存"],[173,"Text_NoSave","No Save","不保存"],[174,"Text_WhetherSaveImage","Whether Save Image","是否保存当前角色形象"],[175,"Text_CloseTips","Close Tips","关闭提示"],[176,"Text_SaveSuccessfully","Save Successfully","保存成功"],[177,"Text_ResetSuccessfully","Reset Successfully","重置成功"],[178,"Text_SwitchSuccessfully","Switch Successfully","切换成功"],[179,"Text_WhetherToKeepTheCurrentColor","Whether to keep the current color","是否保留当前颜色"],[180,"Text_Retain","Retain","保留"],[181,"Text_NoRetain","No Retain","不保留"],[182,"Text_Tab3_1022","Daily Styling","日常造型"],[183,"Text_Tab3_1023","Muppet Styling","布偶造型"],[184,"Text_Tab3_1024","Hero Styling","英雄造型"],[185,"Text_Tab3_1025","Fantasy Modeling","幻想造型"],[186,"Text_Tab3_1026","Holiday Styling","节日造型"],[187,"Text_Tab3_1027","Science Fiction Styling","科幻造型"],[188,"Text_Tab3_1028","Ancient Molding","古代造型"]];
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
	get Text_OpenMallTextBlock():ILanguageElement{return this.getElement(56)};
	/**试穿中，请耐心等待。*/
	get Text_FreeChangeOfClothes1():ILanguageElement{return this.getElement(57)};
	/**免费试穿{0}分钟*/
	get Text_FreeChangeOfClothes2():ILanguageElement{return this.getElement(58)};
	/**试穿结束，请打开商店重新试穿*/
	get Text_FreeChangeOfClothes3():ILanguageElement{return this.getElement(59)};
	/**排行榜出错啦*/
	get Text_Rank1():ILanguageElement{return this.getElement(60)};
	/**捏脸*/
	get Text_Tab1_1():ILanguageElement{return this.getElement(61)};
	/**换装*/
	get Text_Tab1_2():ILanguageElement{return this.getElement(62)};
	/**收藏*/
	get Text_Tab1_3():ILanguageElement{return this.getElement(63)};
	/**测试*/
	get Text_Tab1_4():ILanguageElement{return this.getElement(64)};
	/**体型*/
	get Text_Tab2_101():ILanguageElement{return this.getElement(65)};
	/**肤色*/
	get Text_Tab2_102():ILanguageElement{return this.getElement(66)};
	/**脸型*/
	get Text_Tab2_103():ILanguageElement{return this.getElement(67)};
	/**眼睛*/
	get Text_Tab2_104():ILanguageElement{return this.getElement(68)};
	/**眉毛*/
	get Text_Tab2_105():ILanguageElement{return this.getElement(69)};
	/**妆容*/
	get Text_Tab2_106():ILanguageElement{return this.getElement(70)};
	/**表情*/
	get Text_Tab2_107():ILanguageElement{return this.getElement(71)};
	/**套装*/
	get Text_Tab2_108():ILanguageElement{return this.getElement(72)};
	/**头发*/
	get Text_Tab2_109():ILanguageElement{return this.getElement(73)};
	/**上衣*/
	get Text_Tab2_110():ILanguageElement{return this.getElement(74)};
	/**下衣*/
	get Text_Tab2_111():ILanguageElement{return this.getElement(75)};
	/**鞋子*/
	get Text_Tab2_112():ILanguageElement{return this.getElement(76)};
	/**手套*/
	get Text_Tab2_113():ILanguageElement{return this.getElement(77)};
	/**宠物*/
	get Text_Tab2_114():ILanguageElement{return this.getElement(78)};
	/**饰品*/
	get Text_Tab2_115():ILanguageElement{return this.getElement(79)};
	/**体型*/
	get Text_Tab2_501():ILanguageElement{return this.getElement(80)};
	/**肤色*/
	get Text_Tab2_502():ILanguageElement{return this.getElement(81)};
	/**脸型*/
	get Text_Tab2_503():ILanguageElement{return this.getElement(82)};
	/**眼睛*/
	get Text_Tab2_504():ILanguageElement{return this.getElement(83)};
	/**眉毛*/
	get Text_Tab2_505():ILanguageElement{return this.getElement(84)};
	/**妆容*/
	get Text_Tab2_506():ILanguageElement{return this.getElement(85)};
	/**表情*/
	get Text_Tab2_507():ILanguageElement{return this.getElement(86)};
	/**套装*/
	get Text_Tab2_508():ILanguageElement{return this.getElement(87)};
	/**头发*/
	get Text_Tab2_509():ILanguageElement{return this.getElement(88)};
	/**上衣*/
	get Text_Tab2_510():ILanguageElement{return this.getElement(89)};
	/**下衣*/
	get Text_Tab2_511():ILanguageElement{return this.getElement(90)};
	/**鞋子*/
	get Text_Tab2_512():ILanguageElement{return this.getElement(91)};
	/**手套*/
	get Text_Tab2_513():ILanguageElement{return this.getElement(92)};
	/**宠物*/
	get Text_Tab2_514():ILanguageElement{return this.getElement(93)};
	/**饰品*/
	get Text_Tab2_515():ILanguageElement{return this.getElement(94)};
	/**瞳孔样式*/
	get Text_Tab3_1001():ILanguageElement{return this.getElement(95)};
	/**瞳孔贴花*/
	get Text_Tab3_1002():ILanguageElement{return this.getElement(96)};
	/**上高光*/
	get Text_Tab3_1003():ILanguageElement{return this.getElement(97)};
	/**下高光*/
	get Text_Tab3_1004():ILanguageElement{return this.getElement(98)};
	/**睫毛*/
	get Text_Tab3_1005():ILanguageElement{return this.getElement(99)};
	/**眼影*/
	get Text_Tab3_1006():ILanguageElement{return this.getElement(100)};
	/**腮红*/
	get Text_Tab3_1007():ILanguageElement{return this.getElement(101)};
	/**口红*/
	get Text_Tab3_1008():ILanguageElement{return this.getElement(102)};
	/**面部彩绘*/
	get Text_Tab3_1009():ILanguageElement{return this.getElement(103)};
	/**整体发型*/
	get Text_Tab3_1010():ILanguageElement{return this.getElement(104)};
	/**前发*/
	get Text_Tab3_1011():ILanguageElement{return this.getElement(105)};
	/**后发*/
	get Text_Tab3_1012():ILanguageElement{return this.getElement(106)};
	/**左手*/
	get Text_Tab3_1013():ILanguageElement{return this.getElement(107)};
	/**右手*/
	get Text_Tab3_1014():ILanguageElement{return this.getElement(108)};
	/**背饰*/
	get Text_Tab3_1015():ILanguageElement{return this.getElement(109)};
	/**头饰*/
	get Text_Tab3_1016():ILanguageElement{return this.getElement(110)};
	/**面饰*/
	get Text_Tab3_1017():ILanguageElement{return this.getElement(111)};
	/**臀部*/
	get Text_Tab3_1018():ILanguageElement{return this.getElement(112)};
	/**肩部*/
	get Text_Tab3_1019():ILanguageElement{return this.getElement(113)};
	/**特效*/
	get Text_Tab3_1020():ILanguageElement{return this.getElement(114)};
	/**瞳孔样式*/
	get Text_Tab3_2001():ILanguageElement{return this.getElement(115)};
	/**瞳孔贴花*/
	get Text_Tab3_2002():ILanguageElement{return this.getElement(116)};
	/**上高光*/
	get Text_Tab3_2003():ILanguageElement{return this.getElement(117)};
	/**下高光*/
	get Text_Tab3_2004():ILanguageElement{return this.getElement(118)};
	/**睫毛*/
	get Text_Tab3_2005():ILanguageElement{return this.getElement(119)};
	/**眼影*/
	get Text_Tab3_2006():ILanguageElement{return this.getElement(120)};
	/**腮红*/
	get Text_Tab3_2007():ILanguageElement{return this.getElement(121)};
	/**口红*/
	get Text_Tab3_2008():ILanguageElement{return this.getElement(122)};
	/**面部彩绘*/
	get Text_Tab3_2009():ILanguageElement{return this.getElement(123)};
	/**整体发型*/
	get Text_Tab3_2010():ILanguageElement{return this.getElement(124)};
	/**前发*/
	get Text_Tab3_2011():ILanguageElement{return this.getElement(125)};
	/**后发*/
	get Text_Tab3_2012():ILanguageElement{return this.getElement(126)};
	/**左手*/
	get Text_Tab3_2013():ILanguageElement{return this.getElement(127)};
	/**右手*/
	get Text_Tab3_2014():ILanguageElement{return this.getElement(128)};
	/**背饰*/
	get Text_Tab3_2015():ILanguageElement{return this.getElement(129)};
	/**耳饰*/
	get Text_Tab3_2016():ILanguageElement{return this.getElement(130)};
	/**面饰*/
	get Text_Tab3_2017():ILanguageElement{return this.getElement(131)};
	/**臀部*/
	get Text_Tab3_2018():ILanguageElement{return this.getElement(132)};
	/**肩部*/
	get Text_Tab3_2019():ILanguageElement{return this.getElement(133)};
	/**特效*/
	get Text_Tab3_2020():ILanguageElement{return this.getElement(134)};
	/**换装商店*/
	get Text_OpenClothTextBlock():ILanguageElement{return this.getElement(135)};
	/**免费*/
	get Text_MallItem_Free():ILanguageElement{return this.getElement(136)};
	/**此功能未开启*/
	get Text_ThisFeatureIsNotEnabled():ILanguageElement{return this.getElement(137)};
	/**{0}倍*/
	get Text_BodyTypeDescribe():ILanguageElement{return this.getElement(138)};
	/**默认表情*/
	get Text_Expression_Default():ILanguageElement{return this.getElement(139)};
	/**微笑*/
	get Text_Expression_Smile():ILanguageElement{return this.getElement(140)};
	/**开心*/
	get Text_Expression_HaveFun():ILanguageElement{return this.getElement(141)};
	/**伤心*/
	get Text_Expression_Sad():ILanguageElement{return this.getElement(142)};
	/**生气*/
	get Text_Expression_GetAngry():ILanguageElement{return this.getElement(143)};
	/**尴尬*/
	get Text_Expression_Embarrassment():ILanguageElement{return this.getElement(144)};
	/**笑*/
	get Text_Expression_Laugh():ILanguageElement{return this.getElement(145)};
	/**调皮*/
	get Text_Expression_BeNaughty():ILanguageElement{return this.getElement(146)};
	/**可爱*/
	get Text_Expression_Cute():ILanguageElement{return this.getElement(147)};
	/**疑惑*/
	get Text_Expression_Doubt():ILanguageElement{return this.getElement(148)};
	/**拖尾*/
	get Text_Tab3_1021():ILanguageElement{return this.getElement(149)};
	/**拖尾*/
	get Text_Tab3_2021():ILanguageElement{return this.getElement(150)};
	/**调色板*/
	get Text_ColorPick():ILanguageElement{return this.getElement(151)};
	/**部位 {0}*/
	get Text_ColorPart():ILanguageElement{return this.getElement(152)};
	/**这个{0}不支持调色*/
	get Text_NotSupportToning():ILanguageElement{return this.getElement(153)};
	/**瞳孔颜色*/
	get Text_PupilColor():ILanguageElement{return this.getElement(154)};
	/**左瞳孔颜色*/
	get Text_LeftPupilColor():ILanguageElement{return this.getElement(155)};
	/**右瞳孔颜色*/
	get Text_RightPupilColor():ILanguageElement{return this.getElement(156)};
	/**贴花颜色*/
	get Text_DecalColor():ILanguageElement{return this.getElement(157)};
	/**上高光颜色*/
	get Text_UpperHighlightColor():ILanguageElement{return this.getElement(158)};
	/**下高光颜色*/
	get Text_LowerHighlightColor():ILanguageElement{return this.getElement(159)};
	/**睫毛颜色*/
	get Text_EyelashColor():ILanguageElement{return this.getElement(160)};
	/**眼影颜色*/
	get Text_EyeshaowColor():ILanguageElement{return this.getElement(161)};
	/**腮红颜色*/
	get Text_BlushColor():ILanguageElement{return this.getElement(162)};
	/**口红颜色*/
	get Text_LipstickColor():ILanguageElement{return this.getElement(163)};
	/**单色*/
	get Text_Monochrome():ILanguageElement{return this.getElement(164)};
	/**发顶色*/
	get Text_TopColor():ILanguageElement{return this.getElement(165)};
	/**发尾色*/
	get Text_TailColor():ILanguageElement{return this.getElement(166)};
	/**免费保存*/
	get Text_FreeSave():ILanguageElement{return this.getElement(167)};
	/**重置平台形象*/
	get Text_ResetImage():ILanguageElement{return this.getElement(168)};
	/**重置平台形象失败*/
	get Text_ResetImageFaild():ILanguageElement{return this.getElement(169)};
	/**保存{0}颜色*/
	get Text_SaveColor():ILanguageElement{return this.getElement(170)};
	/**保存提示*/
	get Text_SaveTips():ILanguageElement{return this.getElement(171)};
	/**保存*/
	get Text_Save():ILanguageElement{return this.getElement(172)};
	/**不保存*/
	get Text_NoSave():ILanguageElement{return this.getElement(173)};
	/**是否保存当前角色形象*/
	get Text_WhetherSaveImage():ILanguageElement{return this.getElement(174)};
	/**关闭提示*/
	get Text_CloseTips():ILanguageElement{return this.getElement(175)};
	/**保存成功*/
	get Text_SaveSuccessfully():ILanguageElement{return this.getElement(176)};
	/**重置成功*/
	get Text_ResetSuccessfully():ILanguageElement{return this.getElement(177)};
	/**切换成功*/
	get Text_SwitchSuccessfully():ILanguageElement{return this.getElement(178)};
	/**是否保留当前颜色*/
	get Text_WhetherToKeepTheCurrentColor():ILanguageElement{return this.getElement(179)};
	/**保留*/
	get Text_Retain():ILanguageElement{return this.getElement(180)};
	/**不保留*/
	get Text_NoRetain():ILanguageElement{return this.getElement(181)};
	/**日常造型*/
	get Text_Tab3_1022():ILanguageElement{return this.getElement(182)};
	/**布偶造型*/
	get Text_Tab3_1023():ILanguageElement{return this.getElement(183)};
	/**英雄造型*/
	get Text_Tab3_1024():ILanguageElement{return this.getElement(184)};
	/**幻想造型*/
	get Text_Tab3_1025():ILanguageElement{return this.getElement(185)};
	/**节日造型*/
	get Text_Tab3_1026():ILanguageElement{return this.getElement(186)};
	/**科幻造型*/
	get Text_Tab3_1027():ILanguageElement{return this.getElement(187)};
	/**古代造型*/
	get Text_Tab3_1028():ILanguageElement{return this.getElement(188)};

}