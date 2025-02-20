import { ConfigBase, IElementBase } from "./ConfigBase";
const EXCELDATA:Array<Array<any>> = [["ID","Describe","Text"],["","","Language"],[1001,"瞳孔样式","Text_Tab3_1001"],[1002,"瞳孔贴画","Text_Tab3_1002"],[1003,"上高光","Text_Tab3_1003"],[1004,"下高光","Text_Tab3_1004"],[1005,"睫毛","Text_Tab3_1005"],[1006,"眼影","Text_Tab3_1006"],[1007,"腮红","Text_Tab3_1007"],[1008,"口红","Text_Tab3_1008"],[1009,"面部彩绘","Text_Tab3_1009"],[1010,"整体发型","Text_Tab3_1010"],[1011,"前发","Text_Tab3_1011"],[1012,"后发","Text_Tab3_1012"],[1013,"左手","Text_Tab3_1013"],[1014,"右手","Text_Tab3_1014"],[1015,"背饰","Text_Tab3_1015"],[1016,"耳饰","Text_Tab3_1016"],[1017,"面饰","Text_Tab3_1017"],[1018,"臀部","Text_Tab3_1018"],[1019,"肩部","Text_Tab3_1019"],[1020,"特效","Text_Tab3_1020"],[1021,"拖尾","Text_Tab3_1021"],[1022,"日常造型","Text_Tab3_1022"],[1023,"布偶造型","Text_Tab3_1023"],[1024,"英雄造型","Text_Tab3_1024"],[1025,"幻想造型","Text_Tab3_1025"],[1026,"节日造型","Text_Tab3_1026"],[1027,"科幻造型","Text_Tab3_1027"],[1028,"古代造型","Text_Tab3_1028"],[2001,null,"Text_Tab3_2001"],[2002,null,"Text_Tab3_2002"],[2003,null,"Text_Tab3_2003"],[2004,null,"Text_Tab3_2004"],[2005,null,"Text_Tab3_2005"],[2006,null,"Text_Tab3_2006"],[2007,null,"Text_Tab3_2007"],[2008,null,"Text_Tab3_2008"],[2009,null,"Text_Tab3_2009"],[2010,null,"Text_Tab3_2010"],[2011,null,"Text_Tab3_2011"],[2012,null,"Text_Tab3_2012"],[2013,null,"Text_Tab3_2013"],[2014,null,"Text_Tab3_2014"],[2015,null,"Text_Tab3_2015"],[2016,null,"Text_Tab3_2016"],[2017,null,"Text_Tab3_2017"],[2018,null,"Text_Tab3_2018"],[2019,null,"Text_Tab3_2019"],[2020,null,"Text_Tab3_2020"],[2021,null,"Text_Tab3_1021"]];
export interface ITab3Element extends IElementBase{
 	/**undefined*/
	ID:number
	/**undefined*/
	Describe:string
	/**undefined*/
	Text:string
 } 
export class Tab3Config extends ConfigBase<ITab3Element>{
	constructor(){
		super(EXCELDATA);
	}

}