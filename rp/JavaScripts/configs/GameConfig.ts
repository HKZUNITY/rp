import {ConfigBase, IElementBase} from "./ConfigBase";
import {ActionConfigConfig} from "./ActionConfig";
import {ActionPropConfig} from "./ActionProp";
import {BackHairConfig} from "./BackHair";
import {BodyTypeConfig} from "./BodyType";
import {ChatConfig} from "./Chat";
import {ExpressionConfig} from "./Expression";
import {FrontHairConfig} from "./FrontHair";
import {FullHairConfig} from "./FullHair";
import {InteractConfig} from "./Interact";
import {LanguageConfig} from "./Language";
import {MusicConfig} from "./Music";
import {OutfitConfig} from "./Outfit";
import {ShareIdConfig} from "./ShareId";
import {SkinToneConfig} from "./SkinTone";
import {Tab1Config} from "./Tab1";
import {Tab2Config} from "./Tab2";
import {Tab3Config} from "./Tab3";
import {TopConfig} from "./Top";

export class GameConfig{
	private static configMap:Map<string, ConfigBase<IElementBase>> = new Map();
	/**
	* 多语言设置
	* @param languageIndex 语言索引(-1为系统默认语言)
	* @param getLanguageFun 根据key获取语言内容的方法
	*/
	public static initLanguage(languageIndex:number, getLanguageFun:(key:string|number)=>string){
		ConfigBase.initLanguage(languageIndex, getLanguageFun);
		this.configMap.clear();
	}
	public static getConfig<T extends ConfigBase<IElementBase>>(ConfigClass: { new(): T }): T {
		if (!this.configMap.has(ConfigClass.name)) {
			this.configMap.set(ConfigClass.name, new ConfigClass());
		}
		return this.configMap.get(ConfigClass.name) as T;
	}
	public static get ActionConfig():ActionConfigConfig{ return this.getConfig(ActionConfigConfig) };
	public static get ActionProp():ActionPropConfig{ return this.getConfig(ActionPropConfig) };
	public static get BackHair():BackHairConfig{ return this.getConfig(BackHairConfig) };
	public static get BodyType():BodyTypeConfig{ return this.getConfig(BodyTypeConfig) };
	public static get Chat():ChatConfig{ return this.getConfig(ChatConfig) };
	public static get Expression():ExpressionConfig{ return this.getConfig(ExpressionConfig) };
	public static get FrontHair():FrontHairConfig{ return this.getConfig(FrontHairConfig) };
	public static get FullHair():FullHairConfig{ return this.getConfig(FullHairConfig) };
	public static get Interact():InteractConfig{ return this.getConfig(InteractConfig) };
	public static get Language():LanguageConfig{ return this.getConfig(LanguageConfig) };
	public static get Music():MusicConfig{ return this.getConfig(MusicConfig) };
	public static get Outfit():OutfitConfig{ return this.getConfig(OutfitConfig) };
	public static get ShareId():ShareIdConfig{ return this.getConfig(ShareIdConfig) };
	public static get SkinTone():SkinToneConfig{ return this.getConfig(SkinToneConfig) };
	public static get Tab1():Tab1Config{ return this.getConfig(Tab1Config) };
	public static get Tab2():Tab2Config{ return this.getConfig(Tab2Config) };
	public static get Tab3():Tab3Config{ return this.getConfig(Tab3Config) };
	public static get Top():TopConfig{ return this.getConfig(TopConfig) };
}