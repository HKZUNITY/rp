import Utils from "../../tools/Utils";
import { Tab2Type, Tab3Type } from "./MallData";

export default class Mall {
    public static async copyCharacterSlot(fromCharacter: mw.Character, toCharacter: mw.Character): Promise<void> {
        if (!fromCharacter || !toCharacter) return;
        let slotDataArrStr = this.getSlotDataArrStr(fromCharacter);
        await this.setSlotByDataArrStr(toCharacter, slotDataArrStr);
    }
    private static slotSplit: string = "$"
    private static getSlotDataArrStr(character: Character): string[] {
        let slot = character.description.advance.slotAndDecoration.slot;
        let dataStrArr: string[] = [];
        for (let i = 0; i < slot.length; ++i) {
            for (let j = 0; j < slot[i].decoration.length; ++j) {
                let decoration = slot[i].decoration[j];
                if (!decoration.attachmentAssetId || !decoration.attachmentGameObject || !decoration.attachmentOffset) continue;
                let transform = new Transform();
                transform.position = new Vector(Number(decoration.attachmentOffset.position.x.toFixed(3)), Number(decoration.attachmentOffset.position.y.toFixed(3)), Number(decoration.attachmentOffset.position.z.toFixed(3)));
                transform.rotation = new Rotation(Number(decoration.attachmentOffset.rotation.x.toFixed(3)), Number(decoration.attachmentOffset.rotation.y.toFixed(3)), Number(decoration.attachmentOffset.rotation.z.toFixed(3)));
                transform.scale = new Vector(Number(decoration.attachmentOffset.scale.x.toFixed(3)), Number(decoration.attachmentOffset.scale.y.toFixed(3)), Number(decoration.attachmentOffset.scale.z.toFixed(3)));
                let str = `${i}${this.slotSplit}${decoration.attachmentAssetId}${this.slotSplit}${transform.toString()}`;
                dataStrArr.push(str);
            }
        }
        return dataStrArr.length > 0 ? dataStrArr : null;
    }

    private static async setSlotByDataArrStr(character: Character, strArr: string[]): Promise<void> {
        if (!strArr || strArr?.length == 0) return;
        for (let i = 0; i < strArr.length; ++i) {
            let [slotIndexStr, assetId, transform] = strArr[i].split(this.slotSplit);
            let slotIndex = Number(slotIndexStr);
            if (slotIndex >= 0 && slotIndex < character.description.advance.slotAndDecoration.slot.length) {
                await this.setDecoraBase(character, slotIndex, assetId, Transform.fromString(transform));
            }
        }
        await character.asyncReady();
    }

    private static async setDecoraBase(character: Character, slotIndex: number, assetId: string, offset: mw.Transform): Promise<boolean> {
        await Utils.asyncDownloadAsset(assetId);
        let model = await GameObject.asyncSpawn(assetId) as mw.Model;
        if (!model) return false;
        model.setCollision(mw.PropertyStatus.Off, true);
        if (model instanceof mw.Effect) {
            this.clearOneDecoraBySlotIndex(slotIndex, character);
        } else {
            this.clearOneDecoraBySlotIndex(slotIndex, character);
        }
        character.description.advance.slotAndDecoration.slot[slotIndex].decoration.add(model, offset);
        return true;
    }

    private static clearOneDecoraBySlotIndex(slotIndex: number, character: mw.Character): void {
        character.description.advance.slotAndDecoration.slot[slotIndex].decoration.clear();
    }

    public static async copyCharacterClothingAndHair(fromCharacter: mw.Character, toCharacter: mw.Character): Promise<void> {
        if (!fromCharacter || !toCharacter) return;
        let fromClothing = fromCharacter.description.advance.clothing;
        let fromHair = fromCharacter.description.advance.hair;
        let toClothing = toCharacter.description.advance.clothing;
        let toHair = toCharacter.description.advance.hair;
        await Utils.asyncDownloadAsset(fromHair.frontHair.style);
        toHair.frontHair.style = fromHair.frontHair.style;
        await Utils.asyncDownloadAsset(fromHair.backHair.style);
        toHair.backHair.style = fromHair.backHair.style;
        await Utils.asyncDownloadAsset(fromClothing.upperCloth.style);
        toClothing.upperCloth.style = fromClothing.upperCloth.style;
        await Utils.asyncDownloadAsset(fromClothing.lowerCloth.style);
        toClothing.lowerCloth.style = fromClothing.lowerCloth.style;
        await Utils.asyncDownloadAsset(fromClothing.shoes.style);
        toClothing.shoes.style = fromClothing.shoes.style;
        await Utils.asyncDownloadAsset(fromClothing.gloves.style);
        toClothing.gloves.style = fromClothing.gloves.style;
    }

    private static colorPickTabIds: number[] = [
        Tab2Type.Tab2_Eyebrows,
        Tab2Type.Tab2_Top,
        Tab2Type.Tab2_Bottom,
        Tab2Type.Tab2_Shoes,
        Tab2Type.Tab2_Gloves,
        Tab3Type.Tab3_PupilStyle,
        Tab3Type.Tab3_Lens,
        Tab3Type.Tab3_UpperHighlight,
        Tab3Type.Tab3_LowerHighlight,
        Tab3Type.Tab3_Eyelashes,
        Tab3Type.Tab3_Eyeshadow,
        Tab3Type.Tab3_Blush,
        Tab3Type.Tab3_LipMakeup,
        Tab3Type.Tab3_FullHair,
        Tab3Type.Tab3_FrontHair,
        Tab3Type.Tab3_BackHair
    ];
    public static isSupportColorPick(tabId: number): boolean {
        return this.colorPickTabIds.includes(tabId);
    }

    private static removableTabIds: number[] = [
        Tab2Type.Tab2_Eyebrows,
        Tab2Type.Tab2_Top,
        Tab2Type.Tab2_Bottom,
        Tab2Type.Tab2_Shoes,
        Tab2Type.Tab2_Gloves,
        Tab3Type.Tab3_PupilStyle,
        Tab3Type.Tab3_Lens,
        Tab3Type.Tab3_UpperHighlight,
        Tab3Type.Tab3_LowerHighlight,
        Tab3Type.Tab3_Eyelashes,
        Tab3Type.Tab3_Eyeshadow,
        Tab3Type.Tab3_Blush,
        Tab3Type.Tab3_LipMakeup,
        Tab3Type.Tab3_FullHair,
        Tab3Type.Tab3_FrontHair,
        Tab3Type.Tab3_BackHair,
        Tab3Type.Tab3_LeftHand,
        Tab3Type.Tab3_RightHand,
        Tab3Type.Tab3_Back,
        Tab3Type.Tab3_Ear,
        Tab3Type.Tab3_Face,
        Tab3Type.Tab3_Hip,
        Tab3Type.Tab3_Shoulder,
        Tab3Type.Tab3_Effects,
        Tab3Type.Tab3_Trailing,

        Tab3Type.Tab3_DailyStyling,
        Tab3Type.Tab3_MuppetStyling,
        Tab3Type.Tab3_HeroStyling,
        Tab3Type.Tab3_FantasyModeling,
        Tab3Type.Tab3_HolidayStyling,
        Tab3Type.Tab3_ScienceFictionStyling,
        Tab3Type.Tab3_AncientMolding,
    ];
    public static isRemovableTabId(tabId: number): boolean {
        return this.removableTabIds.includes(tabId);
    }

    private static slotTabIds: number[] = [
        Tab3Type.Tab3_LeftHand,
        Tab3Type.Tab3_RightHand,
        Tab3Type.Tab3_Back,
        Tab3Type.Tab3_Ear,
        Tab3Type.Tab3_Face,
        Tab3Type.Tab3_Hip,
        Tab3Type.Tab3_Shoulder,
        Tab3Type.Tab3_Effects,
        Tab3Type.Tab3_Trailing
    ];
    public static isSlot(tabId: number): boolean {
        return this.slotTabIds.includes(tabId);
    }

    private static clothingTabIds: number[] = [
        Tab2Type.Tab2_Eyebrows,
        Tab2Type.Tab2_Top,
        Tab2Type.Tab2_Bottom,
        Tab2Type.Tab2_Shoes,
        Tab2Type.Tab2_Gloves,
        Tab3Type.Tab3_PupilStyle,
        Tab3Type.Tab3_Lens,
        Tab3Type.Tab3_UpperHighlight,
        Tab3Type.Tab3_LowerHighlight,
        Tab3Type.Tab3_Eyelashes,
        Tab3Type.Tab3_Eyeshadow,
        Tab3Type.Tab3_Blush,
        Tab3Type.Tab3_LipMakeup,
        Tab3Type.Tab3_FullHair,
        Tab3Type.Tab3_FrontHair,
        Tab3Type.Tab3_BackHair
    ];
    public static isClothingTabId(tabId: number): boolean {
        return this.clothingTabIds.includes(tabId);
    }

    private static defaultAssetIds: string[] = [
        `398608`,
        `77763`,
        `292004`,
        `343474`,
        `292002`,
        `343467`,
        `66505`,
        `343475`,
        `75663`,
        `343466`,
        `398609`,
        `47968`,
        `48041`,
        `32112`,
        `48026`,
        `32098`,
        `398607`,
        `48062`,
        `292003`,
        `292001`,
        `343471`,
        `343476`
    ];
    public static isDefaultAssetId(assetId: string): boolean {
        return this.defaultAssetIds.includes(assetId);
    }

    private static headTabIds: number[] = [
        Tab2Type.Tab2_Face,
        Tab2Type.Tab2_Eyebrows,
        Tab2Type.Tab2_Expression,
        Tab3Type.Tab3_PupilStyle,
        Tab3Type.Tab3_Lens,
        Tab3Type.Tab3_UpperHighlight,
        Tab3Type.Tab3_LowerHighlight,
        Tab3Type.Tab3_Eyelashes,
        Tab3Type.Tab3_Eyeshadow,
        Tab3Type.Tab3_Blush,
        Tab3Type.Tab3_LipMakeup,
        Tab3Type.Tab3_FaceTattoo,
        Tab3Type.Tab3_FullHair,
        Tab3Type.Tab3_FrontHair,
        Tab3Type.Tab3_BackHair,
    ];
    public static isHeadTabId(tabId: number): boolean {
        return this.headTabIds.includes(tabId);
    }

    public static getAssetId(type: number, character?: mw.Character): string {
        if (!character) character = Player.localPlayer.character;
        switch (type) {
            case Tab2Type.Tab2_Face:
                return character.description.advance.headFeatures.head.style;
            case Tab2Type.Tab2_Eyebrows:
                return character.description.advance.makeup.eyebrows.eyebrowStyle;
            case Tab2Type.Tab2_Top:
                return character.description.advance.clothing.upperCloth.style;
            case Tab2Type.Tab2_Bottom:
                return character.description.advance.clothing.lowerCloth.style;
            case Tab2Type.Tab2_Shoes:
                return character.description.advance.clothing.shoes.style;
            case Tab2Type.Tab2_Gloves:
                return character.description.advance.clothing.gloves.style;
            case Tab3Type.Tab3_PupilStyle:
                return character.description.advance.makeup.coloredContacts.style.pupilStyle;
            case Tab3Type.Tab3_Lens:
                return character.description.advance.makeup.coloredContacts.decal.pupilStyle;
            case Tab3Type.Tab3_UpperHighlight:
                return character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle;
            case Tab3Type.Tab3_LowerHighlight:
                return character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle;
            case Tab3Type.Tab3_Eyelashes:
                return character.description.advance.makeup.eyelashes.eyelashStyle;
            case Tab3Type.Tab3_Eyeshadow:
                return character.description.advance.makeup.eyeShadow.eyeshadowStyle;
            case Tab3Type.Tab3_Blush:
                return character.description.advance.makeup.blush.blushStyle;
            case Tab3Type.Tab3_LipMakeup:
                return character.description.advance.makeup.lipstick.lipstickStyle;
            case Tab3Type.Tab3_FullHair:
                return character.description.advance.hair.backHair.style;
            case Tab3Type.Tab3_FrontHair:
                return character.description.advance.hair.frontHair.style;
            case Tab3Type.Tab3_BackHair:
                return character.description.advance.hair.backHair.style;
        }
    }

    public static setAssetId(character: mw.Character, type: number, assetId: string): void {
        switch (type) {
            case Tab2Type.Tab2_Face:
                character.description.advance.headFeatures.head.style = assetId;
                break;
            case Tab2Type.Tab2_Eyebrows:
                character.description.advance.makeup.eyebrows.eyebrowStyle = assetId;
                break;
            case Tab2Type.Tab2_Top:
                character.description.advance.clothing.upperCloth.style = assetId;
                break;
            case Tab2Type.Tab2_Bottom:
                character.description.advance.clothing.lowerCloth.style = assetId;
                break;
            case Tab2Type.Tab2_Shoes:
                character.description.advance.clothing.shoes.style = assetId;
                break;
            case Tab2Type.Tab2_Gloves:
                character.description.advance.clothing.gloves.style = assetId;
                break;
            case Tab3Type.Tab3_PupilStyle:
                character.description.advance.makeup.coloredContacts.style.pupilStyle = assetId;
                break;
            case Tab3Type.Tab3_Lens:
                character.description.advance.makeup.coloredContacts.decal.pupilStyle = assetId;
                break;
            case Tab3Type.Tab3_UpperHighlight:
                character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle = assetId;
                break;
            case Tab3Type.Tab3_LowerHighlight:
                character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle = assetId;
                break;
            case Tab3Type.Tab3_Eyelashes:
                character.description.advance.makeup.eyelashes.eyelashStyle = assetId;
                break;
            case Tab3Type.Tab3_Eyeshadow:
                character.description.advance.makeup.eyeShadow.eyeshadowStyle = assetId;
                break;
            case Tab3Type.Tab3_Blush:
                character.description.advance.makeup.blush.blushStyle = assetId;
                break;
            case Tab3Type.Tab3_LipMakeup:
                character.description.advance.makeup.lipstick.lipstickStyle = assetId;
                break;
            case Tab3Type.Tab3_FullHair:
                character.description.advance.hair.backHair.style = assetId;
                break;
            case Tab3Type.Tab3_FrontHair:
                character.description.advance.hair.frontHair.style = assetId;
                break;
            case Tab3Type.Tab3_BackHair:
                character.description.advance.hair.backHair.style = assetId;
                break;
        }
    }

}