import {ConfigBase, IElementBase} from "./ConfigBase";
import {ActionConfigConfig} from "./ActionConfig";
import {ActionPropConfig} from "./ActionProp";
import {ChatConfig} from "./Chat";
import {ExpressionConfig} from "./Expression";
import {InteractConfig} from "./Interact";
import {LanguageConfig} from "./Language";
import {ShareIdConfig} from "./ShareId";

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
	public static get ShareId():ShareIdConfig{ return this.getConfig(ShareIdConfig) };
}