import {ConfigBase, IElementBase} from "./ConfigBase";
import {ActionConfigConfig} from "./ActionConfig";
import {ActionPropConfig} from "./ActionProp";
import {BackHairConfig} from "./BackHair";
import {BackConfig} from "./Back";
import {BlushConfig} from "./Blush";
import {BodyTypeConfig} from "./BodyType";
import {BottomConfig} from "./Bottom";
import {ChatConfig} from "./Chat";
import {EarConfig} from "./Ear";
import {EffectsConfig} from "./Effects";
import {ExpressionConfig} from "./Expression";
import {EyebrowsConfig} from "./Eyebrows";
import {EyelashesConfig} from "./Eyelashes";
import {EyeshadowConfig} from "./Eyeshadow";
import {FaceExpressionConfig} from "./FaceExpression";
import {FaceTattooConfig} from "./FaceTattoo";
import {FaceConfig} from "./Face";
import {FacingConfig} from "./Facing";
import {FrontHairConfig} from "./FrontHair";
import {FullHairConfig} from "./FullHair";
import {GlovesConfig} from "./Gloves";
import {HipConfig} from "./Hip";
import {InteractConfig} from "./Interact";
import {LanguageConfig} from "./Language";
import {LeftHandConfig} from "./LeftHand";
import {LensConfig} from "./Lens";
import {LipMakeupConfig} from "./LipMakeup";
import {LowerHighlightConfig} from "./LowerHighlight";
import {MusicConfig} from "./Music";
import {OutfitConfig} from "./Outfit";
import {PupilStyleConfig} from "./PupilStyle";
import {RightHandConfig} from "./RightHand";
import {ShareIdConfig} from "./ShareId";
import {ShoesConfig} from "./Shoes";
import {ShoulderConfig} from "./Shoulder";
import {SkinToneConfig} from "./SkinTone";
import {Tab1Config} from "./Tab1";
import {Tab2Config} from "./Tab2";
import {Tab3Config} from "./Tab3";
import {TopConfig} from "./Top";
import {TrailingConfig} from "./Trailing";
import {UpperHighlightConfig} from "./UpperHighlight";

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
	public static get Back():BackConfig{ return this.getConfig(BackConfig) };
	public static get Blush():BlushConfig{ return this.getConfig(BlushConfig) };
	public static get BodyType():BodyTypeConfig{ return this.getConfig(BodyTypeConfig) };
	public static get Bottom():BottomConfig{ return this.getConfig(BottomConfig) };
	public static get Chat():ChatConfig{ return this.getConfig(ChatConfig) };
	public static get Ear():EarConfig{ return this.getConfig(EarConfig) };
	public static get Effects():EffectsConfig{ return this.getConfig(EffectsConfig) };
	public static get Expression():ExpressionConfig{ return this.getConfig(ExpressionConfig) };
	public static get Eyebrows():EyebrowsConfig{ return this.getConfig(EyebrowsConfig) };
	public static get Eyelashes():EyelashesConfig{ return this.getConfig(EyelashesConfig) };
	public static get Eyeshadow():EyeshadowConfig{ return this.getConfig(EyeshadowConfig) };
	public static get FaceExpression():FaceExpressionConfig{ return this.getConfig(FaceExpressionConfig) };
	public static get FaceTattoo():FaceTattooConfig{ return this.getConfig(FaceTattooConfig) };
	public static get Face():FaceConfig{ return this.getConfig(FaceConfig) };
	public static get Facing():FacingConfig{ return this.getConfig(FacingConfig) };
	public static get FrontHair():FrontHairConfig{ return this.getConfig(FrontHairConfig) };
	public static get FullHair():FullHairConfig{ return this.getConfig(FullHairConfig) };
	public static get Gloves():GlovesConfig{ return this.getConfig(GlovesConfig) };
	public static get Hip():HipConfig{ return this.getConfig(HipConfig) };
	public static get Interact():InteractConfig{ return this.getConfig(InteractConfig) };
	public static get Language():LanguageConfig{ return this.getConfig(LanguageConfig) };
	public static get LeftHand():LeftHandConfig{ return this.getConfig(LeftHandConfig) };
	public static get Lens():LensConfig{ return this.getConfig(LensConfig) };
	public static get LipMakeup():LipMakeupConfig{ return this.getConfig(LipMakeupConfig) };
	public static get LowerHighlight():LowerHighlightConfig{ return this.getConfig(LowerHighlightConfig) };
	public static get Music():MusicConfig{ return this.getConfig(MusicConfig) };
	public static get Outfit():OutfitConfig{ return this.getConfig(OutfitConfig) };
	public static get PupilStyle():PupilStyleConfig{ return this.getConfig(PupilStyleConfig) };
	public static get RightHand():RightHandConfig{ return this.getConfig(RightHandConfig) };
	public static get ShareId():ShareIdConfig{ return this.getConfig(ShareIdConfig) };
	public static get Shoes():ShoesConfig{ return this.getConfig(ShoesConfig) };
	public static get Shoulder():ShoulderConfig{ return this.getConfig(ShoulderConfig) };
	public static get SkinTone():SkinToneConfig{ return this.getConfig(SkinToneConfig) };
	public static get Tab1():Tab1Config{ return this.getConfig(Tab1Config) };
	public static get Tab2():Tab2Config{ return this.getConfig(Tab2Config) };
	public static get Tab3():Tab3Config{ return this.getConfig(Tab3Config) };
	public static get Top():TopConfig{ return this.getConfig(TopConfig) };
	public static get Trailing():TrailingConfig{ return this.getConfig(TrailingConfig) };
	public static get UpperHighlight():UpperHighlightConfig{ return this.getConfig(UpperHighlightConfig) };
}