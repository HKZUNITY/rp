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
}