import {ConfigBase, IElementBase} from "./ConfigBase";
import {ActionConfigConfig} from "./ActionConfig";
import {ActionPropConfig} from "./ActionProp";
import {ChatConfig} from "./Chat";
import {ExpressionConfig} from "./Expression";
import {InteractConfig} from "./Interact";
import {LanguageConfig} from "./Language";
import {MusicConfig} from "./Music";
import {ShareIdConfig} from "./ShareId";
import {Tab1Config} from "./Tab1";
import {Tab2Config} from "./Tab2";
import {Tab3Config} from "./Tab3";

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
	public static get Chat():ChatConfig{ return this.getConfig(ChatConfig) };
	public static get Expression():ExpressionConfig{ return this.getConfig(ExpressionConfig) };
	public static get Interact():InteractConfig{ return this.getConfig(InteractConfig) };
	public static get Language():LanguageConfig{ return this.getConfig(LanguageConfig) };
	public static get Music():MusicConfig{ return this.getConfig(MusicConfig) };
	public static get ShareId():ShareIdConfig{ return this.getConfig(ShareIdConfig) };
	public static get Tab1():Tab1Config{ return this.getConfig(Tab1Config) };
	public static get Tab2():Tab2Config{ return this.getConfig(Tab2Config) };
	public static get Tab3():Tab3Config{ return this.getConfig(Tab3Config) };
}