import { Notice } from "../../common/notice/Notice";
import { IBodyTypeElement } from "../../configs/BodyType";
import { IColorValueElement } from "../../configs/ColorValue";
import { IFaceExpressionElement } from "../../configs/FaceExpression";
import { GameConfig } from "../../configs/GameConfig";
import { IOutfitElement } from "../../configs/Outfit";
import Utils from "../../tools/Utils";
import ExecutorManager from "../../tools/WaitingQueue";
import { HUDModuleC } from "../HUDModule/HUDModule";
import Mall from "./Mall";
import MallData, { TabType, Tab2Type, Tab3Type, ColorPickTab2Data } from "./MallData";
import MallModuleS from "./MallModuleS";
import ColorPickPanel from "./ui/ColorPickPanel";
import MallPanel from "./ui/MallPanel";

export default class MallModuleC extends ModuleC<MallModuleS, MallData> {
    private hudModuleC: HUDModuleC = null;
    private get getHUDModuleC(): HUDModuleC {
        if (!this.hudModuleC) {
            this.hudModuleC = ModuleService.getModule(HUDModuleC);
        }
        return this.hudModuleC;
    }

    private mallPanel: MallPanel = null;
    private get getMallPanel(): MallPanel {
        if (!this.mallPanel) {
            this.mallPanel = UIService.getUI(MallPanel);
        }
        return this.mallPanel;
    }

    private colorPickPanel: ColorPickPanel = null;
    private get getColorPickPanel(): ColorPickPanel {
        if (!this.colorPickPanel) {
            this.colorPickPanel = UIService.getUI(ColorPickPanel);
        }
        return this.colorPickPanel;
    }

    public onSelectTab1Action: Action1<number> = new Action1<number>();
    public onSelectTab2Action: Action1<number> = new Action1<number>();
    public onSelectTab3Action: Action1<number> = new Action1<number>();
    public onSelectItemAction: Action3<number, number, string> = new Action3<number, number, string>();
    public onOpenColorPickAction: Action2<number, number> = new Action2<number, number>();
    public onSaveAction: Action = new Action();
    public onCloseMallPanelAction: Action = new Action();
    public onSelectColorPickTab2Action: Action1<number> = new Action1<number>();
    public onSelectColorPickTab3Action: Action1<number> = new Action1<number>();
    public onColorPickChangedAction: Action1<mw.LinearColor> = new Action1<mw.LinearColor>();
    public onCloseColorPickPanelAction: Action = new Action();

    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected onStart(): void {
        this.bindAction();
        this.bindEvent();
    }

    protected onEnterScene(sceneType: number): void {
        this.initNpc();
        this.initShopCamera();
    }

    private bindAction(): void {
        this.getHUDModuleC?.onOpenMallAction.add(this.addOpenMallAction.bind(this));
        this.onSelectItemAction.add(this.addSelectItemAction.bind(this));
        this.onOpenColorPickAction.add(this.addOpenColorPickAction.bind(this));
        this.onSaveAction.add(this.addSaveAction.bind(this));
        this.onCloseMallPanelAction.add(this.addCloseAction.bind(this));
        this.onSelectColorPickTab2Action.add(this.addSelectColorPickTab2Action.bind(this));
        this.onSelectColorPickTab3Action.add(this.addSelectColorPickTab3Action.bind(this));
        this.onColorPickChangedAction.add(this.changeCharacterColor.bind(this));
        this.onCloseColorPickPanelAction.add(this.addCloseColorPickPanelAction.bind(this));
    }

    private bindEvent(): void {
        InputUtil.onKeyDown(mw.Keys.O, () => {
            this.addOpenMallAction();
        });
        InputUtil.onKeyDown(mw.Keys.P, () => {
            this.getMallPanel.hide();
            this.onSwitchCameraAction.call(0);
        });
    }

    private addCloseColorPickPanelAction(): void {
        this.getMallPanel.closeColorPickPanelShow();
    }

    private addOpenMallAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            this.onSwitchCameraAction.call(1);
            if (!mw.UIService.getUI(MallPanel, false)?.visible) {
                this.mallPanel = UIService.getUI(MallPanel);
                this.getMallPanel.initMallPanel();
            }
            this.getMallPanel.show();
        });
    }

    private addSelectItemAction(tabType: TabType, tabId: number, assetId: string): void {
        if (tabType == TabType.None) return;
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.changeCharacter(tabId, assetId);
        });
    }

    private async changeCharacter(tabId: number, assetId: string): Promise<void> {
        await this.localPlayer.character.asyncReady();
        switch (tabId) {
            case Tab2Type.Tab2_BodyType:
                let bodyTypeElement: IBodyTypeElement = GameConfig.BodyType.getElement(assetId);
                if (!bodyTypeElement || bodyTypeElement?.Scale == 0) return;
                this.localPlayer.character.description.advance.bodyFeatures.body.height = bodyTypeElement.Scale;
                break;
            case Tab2Type.Tab2_SkinTone:
                this.localPlayer.character.description.advance.makeup.skinTone.skinColor = mw.LinearColor.colorHexToLinearColor(assetId);
                break;
            case Tab2Type.Tab2_Face:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.headFeatures.head.style = assetId;
                break;
            case Tab2Type.Tab2_Eyebrows:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowStyle = assetId;
                break;
            case Tab2Type.Tab2_Expression:
                let faceExpressionElement: IFaceExpressionElement = GameConfig.FaceExpression.getElement(assetId);
                if (!faceExpressionElement || faceExpressionElement?.ExpressionType < 0 || faceExpressionElement?.ExpressionType > 9) return;
                this.localPlayer.character.description.advance.headFeatures.expressions.changeExpression = faceExpressionElement.ExpressionType;
                break;
            case Tab2Type.Tab2_Outfit:
                await this.changeOutfit(assetId);
                break;
            case Tab2Type.Tab2_Top:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.clothing.upperCloth.style = assetId;
                break;
            case Tab2Type.Tab2_Bottom:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.clothing.lowerCloth.style = assetId;
                break;
            case Tab2Type.Tab2_Shoes:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.clothing.shoes.style = assetId;
                break;
            case Tab2Type.Tab2_Gloves:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.clothing.gloves.style = assetId;
                break;
            case Tab2Type.Tab2_Pet:
                // this.localPlayer.character.description.advance.clothing.upperCloth.style = assetId;
                break;
            case Tab3Type.Tab3_PupilStyle:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.style.pupilStyle = assetId;
                break;
            case Tab3Type.Tab3_Lens:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilStyle = assetId;
                break;
            case Tab3Type.Tab3_UpperHighlight:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle = assetId;
                break;
            case Tab3Type.Tab3_LowerHighlight:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle = assetId;
                break;
            case Tab3Type.Tab3_Eyelashes:
                this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle = assetId;
                break;
            case Tab3Type.Tab3_Eyeshadow:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshadowStyle = assetId;
                break;
            case Tab3Type.Tab3_Blush:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.blush.blushStyle = assetId;
                break;
            case Tab3Type.Tab3_LipMakeup:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.makeup.lipstick.lipstickStyle = assetId;
                break;
            case Tab3Type.Tab3_FaceTattoo:
                // this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle = assetId;
                break;
            case Tab3Type.Tab3_FullHair:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.hair.backHair.style = assetId;
                break;
            case Tab3Type.Tab3_FrontHair:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.hair.frontHair.style = assetId;
                break;
            case Tab3Type.Tab3_BackHair:
                await Utils.asyncDownloadAsset(assetId);
                this.localPlayer.character.description.advance.hair.backHair.style = assetId;
                break;
            case Tab3Type.Tab3_LeftHand:
                let leftHandElement = GameConfig.LeftHand.getElement(assetId);
                if (!leftHandElement) return;
                await this.changeSlotAndDecoration(tabId, leftHandElement.AssetId, Utils.stringArrayToTransform(leftHandElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_RightHand:
                let rightHandElement = GameConfig.RightHand.getElement(assetId);
                if (!rightHandElement) return;
                await this.changeSlotAndDecoration(tabId, rightHandElement.AssetId, Utils.stringArrayToTransform(rightHandElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Back:
                let backElement = GameConfig.Back.getElement(assetId);
                if (!backElement) return;
                await this.changeSlotAndDecoration(tabId, backElement.AssetId, Utils.stringArrayToTransform(backElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Ear:
                let earElement = GameConfig.Ear.getElement(assetId);
                if (!earElement) return;
                await this.changeSlotAndDecoration(tabId, earElement.AssetId, Utils.stringArrayToTransform(earElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Face:
                let facingElement = GameConfig.Facing.getElement(assetId);
                if (!facingElement) return;
                await this.changeSlotAndDecoration(tabId, facingElement.AssetId, Utils.stringArrayToTransform(facingElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Hip:
                let hipElement = GameConfig.Hip.getElement(assetId);
                if (!hipElement) return;
                await this.changeSlotAndDecoration(tabId, hipElement.AssetId, Utils.stringArrayToTransform(hipElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Shoulder:
                let shoulderElement = GameConfig.Shoulder.getElement(assetId);
                if (!shoulderElement) return;
                await this.changeSlotAndDecoration(tabId, shoulderElement.AssetId, Utils.stringArrayToTransform(shoulderElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Effects:
                let effectsElement = GameConfig.Effects.getElement(assetId);
                if (!effectsElement) return;
                await this.changeSlotAndDecoration(tabId, effectsElement.AssetId, Utils.stringArrayToTransform(effectsElement.Transform), mw.HumanoidSlotType.Root);
                break;
            case Tab3Type.Tab3_Trailing:
                let trailingElement = GameConfig.Trailing.getElement(assetId);
                if (!trailingElement) return;
                await this.changeSlotAndDecoration(tabId, trailingElement.AssetId, Utils.stringArrayToTransform(trailingElement.Transform), mw.HumanoidSlotType.Root);
                break;
            default:
                break;
        }
        await this.localPlayer.character.asyncReady();
        // this.localPlayer.character.syncDescription();
    }

    private async changeOutfit(configId: string): Promise<void> {
        let outfitElement: IOutfitElement = GameConfig.Outfit.getElement(configId);
        let currentSomatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
        await Utils.asyncDownloadAsset(outfitElement.AssetId);
        if (currentSomatotype == outfitElement.SexType) {
            if (outfitElement.IsTransition > 0) {
                await this.changeOutfitTransition(outfitElement.AssetId);
            } else {
                this.localPlayer.character.setDescription([outfitElement.AssetId]);
            }
        } else {
            if (outfitElement.SexType % 2 == 0) {
                this.localPlayer.character.setDescription(this.feMaleNpc.getDescription());
            } else {
                this.localPlayer.character.setDescription(this.maleNpc.getDescription());
            }
            await this.localPlayer.character.asyncReady();
            if (outfitElement.IsTransition > 0) {
                await this.changeOutfitTransition(outfitElement.AssetId);
            } else {
                this.localPlayer.character.setDescription([outfitElement.AssetId]);
            }
            await this.localPlayer.character.asyncReady();
            currentSomatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            if (currentSomatotype != outfitElement.SexType) this.localPlayer.character.description.advance.base.characterSetting.somatotype = outfitElement.SexType;
        }
        await this.localPlayer.character.asyncReady();
    }

    private async changeOutfitTransition(assetId: string): Promise<void> {
        if (!this.transitionNpc) await this.initTransitionNpc();
        this.transitionNpc.setDescription([assetId]);
        await this.transitionNpc.asyncReady();
        await Mall.copyCharacterClothingAndHair(this.transitionNpc, this.localPlayer.character);
        await Mall.copyCharacterSlot(this.transitionNpc, this.localPlayer.character);
    }

    private decorationIndexMap: Map<number, number> = new Map<number, number>();
    private async changeSlotAndDecoration(tagId: number, assetId: string, transform: mw.Transform, slotIndex: number): Promise<void> {
        await Utils.asyncDownloadAsset(assetId);
        let decorationIndex: number = -1;
        if (this.decorationIndexMap.has(tagId)) {
            decorationIndex = this.decorationIndexMap.get(tagId);
            let decoration = this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration[decorationIndex - 1].attachmentGameObject;
            this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration.delete(decoration, true);
        } else {
        }
        let model = await GameObject.asyncSpawn(assetId) as mw.Model;
        if (!model) return;
        model.setCollision(mw.PropertyStatus.Off, true);
        decorationIndex = this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration.add(model, transform);
        this.decorationIndexMap.set(tagId, decorationIndex);
    }

    private getSlotAndDecoration(tagId: number, slotIndex: number): string {
        if (this.decorationIndexMap.has(tagId)) {
            let decorationIndex = this.decorationIndexMap.get(tagId);
            return this.localPlayer.character.description.advance.slotAndDecoration.slot[slotIndex].decoration[decorationIndex - 1].attachmentAssetId;
        } else {
            return null;
        }
    }

    public async getCharacterAssetId(configId: number): Promise<string | mw.LinearColor> {
        await this.localPlayer.character.asyncReady();
        switch (configId) {
            case Tab2Type.Tab2_BodyType:
                let heightRatio: number = this.localPlayer.character.description.advance.bodyFeatures.body.height;
                let scale: string = heightRatio.toFixed(1);
                let bodyTypeElement = GameConfig.BodyType.findElement(`Scale`, scale);
                if (!bodyTypeElement) return null;
                return bodyTypeElement.ID.toString();
            case Tab2Type.Tab2_SkinTone:
                return this.localPlayer.character.description.advance.makeup.skinTone.skinColor;
            case Tab2Type.Tab2_Face:
                return this.localPlayer.character.description.advance.headFeatures.head.style;
            case Tab2Type.Tab2_Eyebrows:
                return this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowStyle;
            case Tab2Type.Tab2_Expression:
                let expressionType = this.localPlayer.character.description.advance.headFeatures.expressions.changeExpression;
                if (expressionType < 0 || expressionType > 9) return null;
                let faceExpressionElement: IFaceExpressionElement = GameConfig.FaceExpression.findElement(`ExpressionType`, expressionType);
                if (!faceExpressionElement) return null;
                return faceExpressionElement.ID.toString();
            case Tab2Type.Tab2_Outfit:
                return null;
            case Tab2Type.Tab2_Top:
                return this.localPlayer.character.description.advance.clothing.upperCloth.style;
            case Tab2Type.Tab2_Bottom:
                return this.localPlayer.character.description.advance.clothing.lowerCloth.style;
            case Tab2Type.Tab2_Shoes:
                return this.localPlayer.character.description.advance.clothing.shoes.style;
            case Tab2Type.Tab2_Gloves:
                return this.localPlayer.character.description.advance.clothing.gloves.style;
            case Tab2Type.Tab2_Pet:
                // return this.localPlayer.character.description.advance.clothing.upperCloth.style = assetId;
                break;
            case Tab3Type.Tab3_PupilStyle:
                return this.localPlayer.character.description.advance.makeup.coloredContacts.style.pupilStyle;
            case Tab3Type.Tab3_Lens:
                return this.localPlayer.character.description.advance.makeup.coloredContacts.decal.pupilStyle;
            case Tab3Type.Tab3_UpperHighlight:
                return this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.upperHighlightStyle;
            case Tab3Type.Tab3_LowerHighlight:
                return this.localPlayer.character.description.advance.makeup.coloredContacts.highlight.lowerHighlightStyle;
            case Tab3Type.Tab3_Eyelashes:
                return this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle;
            case Tab3Type.Tab3_Eyeshadow:
                return this.localPlayer.character.description.advance.makeup.eyeShadow.eyeshadowStyle;
            case Tab3Type.Tab3_Blush:
                return this.localPlayer.character.description.advance.makeup.blush.blushStyle;
            case Tab3Type.Tab3_LipMakeup:
                return this.localPlayer.character.description.advance.makeup.lipstick.lipstickStyle;
            case Tab3Type.Tab3_FaceTattoo:
                //return this.localPlayer.character.description.advance.makeup.eyelashes.eyelashStyle = assetId;
                break;
            case Tab3Type.Tab3_FullHair:
                return this.localPlayer.character.description.advance.hair.backHair.style;
            case Tab3Type.Tab3_FrontHair:
                return this.localPlayer.character.description.advance.hair.frontHair.style;
            case Tab3Type.Tab3_BackHair:
                return this.localPlayer.character.description.advance.hair.backHair.style;
            case Tab3Type.Tab3_LeftHand:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.LeftHand);
            case Tab3Type.Tab3_RightHand:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.RightHand);
            case Tab3Type.Tab3_Back:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.BackOrnamental);
            case Tab3Type.Tab3_Ear:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.LeftHead);
            case Tab3Type.Tab3_Face:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.FaceOrnamental);
            case Tab3Type.Tab3_Hip:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Buttocks);
            case Tab3Type.Tab3_Shoulder:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.RightBack);
            case Tab3Type.Tab3_Effects:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Root);
            case Tab3Type.Tab3_Trailing:
                return this.getSlotAndDecoration(configId, mw.HumanoidSlotType.Root);
            default:
                return null;
        }
    }

    public onSwitchCameraAction: Action1<number> = new Action1<number>();
    private async initShopCamera(): Promise<void> {
        let myCamera = Camera.currentCamera;
        let shopCamera: mw.Camera = await GameObject.asyncSpawn<mw.Camera>(`Camera`);
        shopCamera.parent = Player.localPlayer.character;
        shopCamera.localTransform.position = new mw.Vector(200, -10, 30);
        shopCamera.localTransform.rotation = new mw.Rotation(0, -5, 200);
        this.onSwitchCameraAction.add((cameraType: number) => {
            if (cameraType == 0) {
                Camera.switch(myCamera);
            } else {
                Camera.switch(shopCamera, 0.5, mw.CameraSwitchBlendFunction.Linear);
            }
        });
    }

    private maleNpc: mw.Character = null;
    private feMaleNpc: mw.Character = null;
    private transitionNpc: mw.Character = null;
    private copyNpc: mw.Character = null;
    private async initNpc(): Promise<void> {
        this.maleNpc = await mw.GameObject.asyncFindGameObjectById(`3A3B7F1A`) as mw.Character;
        this.feMaleNpc = await mw.GameObject.asyncFindGameObjectById(`047AA580`) as mw.Character;
        this.transitionNpc = await mw.GameObject.asyncFindGameObjectById(`1D9FAAD2`) as mw.Character;
        this.copyNpc = await mw.GameObject.asyncFindGameObjectById(`118AA52F`) as mw.Character;
        await this.localPlayer.character.asyncReady();
        let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
        this.recordSex(somatotype);
        if (somatotype % 2 == 0) {
            await this.feMaleNpc.asyncReady();
            this.feMaleNpc.setDescription(this.localPlayer.character.getDescription());
        } else {
            await this.maleNpc.asyncReady();
            this.maleNpc.setDescription(this.localPlayer.character.getDescription());
        }
    }

    private saveSomatotype: number = 2;
    private recordSex(somatotype: number): void {
        this.saveSomatotype = somatotype;
    }

    private async initTransitionNpc(): Promise<void> {
        this.transitionNpc = await mw.GameObject.asyncSpawn(`Character`) as mw.Character;
        await this.transitionNpc.asyncReady();
    }

    private addOpenColorPickAction(tabType: TabType, tabId: number): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.localPlayer.character.asyncReady();
            this.openColorPickPanel(tabId);
        });
    }

    private addSaveAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            await this.localPlayer.character.asyncReady();
            let somatotype = this.localPlayer.character.description.advance.base.characterSetting.somatotype;
            this.recordSex(somatotype);
            if (somatotype % 2 == 0) {
                this.feMaleNpc.setDescription(this.localPlayer.character.getDescription());
                await this.feMaleNpc.asyncReady();
            } else {
                this.maleNpc.setDescription(this.localPlayer.character.getDescription());
                await this.maleNpc.asyncReady();
            }
        });
    }

    private addCloseAction(): void {
        ExecutorManager.instance.pushAsyncExecutor(async () => {
            if (this.saveSomatotype % 2 == 0) {
                this.localPlayer.character.setDescription(this.feMaleNpc.getDescription());
            } else {
                this.localPlayer.character.setDescription(this.maleNpc.getDescription());
            }
            await this.localPlayer.character.asyncReady();
        });
    }

    private colorPickTabId: number = -1;
    private colorPickTab2Datas: ColorPickTab2Data[] = [];
    private colorPickTab3Colors: string[] = [];
    private openColorPickPanel(tabId: number): void {
        this.colorPickTabId = tabId;

        this.colorPickTab2Index = 0;
        this.colorPickTab2Datas.length = 0;

        this.colorPickTab3Colors.length = 0;
        switch (tabId) {
            case Tab2Type.Tab2_SkinTone:
                this.openSkinToneColorPickPanel();
                break;
            case Tab2Type.Tab2_Eyebrows:
                this.openEyebrowsColorPickPanel();
                break;
            case Tab2Type.Tab2_Top:
                this.openTopColorPickPanel();
                break;
            case Tab3Type.Tab3_FrontHair:
                this.openFrontHairColorPickPanel();
                break;
            default:
                break;
        }
    }

    private colorPickTab2Index: number = 0;
    private addSelectColorPickTab2Action(index: number): void {
        if (this.colorPickTab2Index == index) return;
        this.colorPickTab2Index = index;
        this.getColorPickPanel.checkColorPickTab3AndColorPick(this.colorPickTab2Datas[this.colorPickTab2Index].color);
    }

    private addSelectColorPickTab3Action(index: number): void {
        let color = mw.LinearColor.colorHexToLinearColor(this.colorPickTab3Colors[index]);
        this.getColorPickPanel.refreshColorPickTab2AndColorPick(color);
        this.changeCharacterColor(color);
    }

    private openSkinToneColorPickPanel(): void {
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${GameConfig.Language.Text_Tab2_102.Value}`;

        let colorPickTab2Data = new ColorPickTab2Data(GameConfig.Language.Text_Tab2_102.Value,
            this.localPlayer.character.description.advance.makeup.skinTone.skinColor as mw.LinearColor);
        this.colorPickTab2Datas.push(colorPickTab2Data);

        GameConfig.ColorValue.getAllElement().forEach((value: IColorValueElement) => {
            this.colorPickTab3Colors.push(value.SkinToneColor);
        });
        this.getColorPickPanel.showColorPickPanel(tab1Text, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }

    private openEyebrowsColorPickPanel(): void {
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${GameConfig.Language.Text_Tab2_105.Value}`;

        let colorPickTab2Data = new ColorPickTab2Data(GameConfig.Language.Text_Tab2_105.Value,
            this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowColor as mw.LinearColor);
        this.colorPickTab2Datas.push(colorPickTab2Data);

        GameConfig.ColorValue.getAllElement().forEach((value: IColorValueElement) => {
            this.colorPickTab3Colors.push(value.EyebrowsColor);
        });
        this.getColorPickPanel.showColorPickPanel(tab1Text, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }

    private openTopColorPickPanel(): void {
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${GameConfig.Language.Text_Tab2_110.Value}`;

        let part = this.localPlayer.character.description.advance.clothing.upperCloth?.part;
        if (!part || part.length == 0) {
            Notice.showDownNotice(`不能调色`);
            return;
        }
        for (let i = 0; i < part.length; ++i) {
            let color: mw.LinearColor = mw.LinearColor.white;
            if (part[i]?.color?.areaColor) color = part[i]?.color?.areaColor as mw.LinearColor;
            this.colorPickTab2Datas.push(new ColorPickTab2Data(StringUtil.format(GameConfig.Language.Text_ColorPart.Value, i + 1), color));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(`不能调色`);
            return;
        }

        GameConfig.ColorValue.getAllElement().forEach((value: IColorValueElement) => {
            this.colorPickTab3Colors.push(value.TopColor);
        });
        this.getColorPickPanel.showColorPickPanel(tab1Text, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }

    private openFrontHairColorPickPanel(): void {
        let tab1Text = `${GameConfig.Language.Text_ColorPick.Value} - ${GameConfig.Language.Text_Tab3_1011.Value}`;

        let hairColor = this.localPlayer.character.description.advance.hair.frontHair.color;
        if (!hairColor) {
            Notice.showDownNotice(`不能调色`);
            return;
        }
        if (hairColor?.color && hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(`单色`, hairColor?.color as mw.LinearColor));
        }
        if (hairColor?.color) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(`发顶色`, hairColor?.color as mw.LinearColor));
        }
        if (hairColor?.gradientColor) {
            this.colorPickTab2Datas.push(new ColorPickTab2Data(`发尾色`, hairColor?.gradientColor as mw.LinearColor));
        }
        if (!this.colorPickTab2Datas || this.colorPickTab2Datas.length == 0) {
            Notice.showDownNotice(`不能调色`);
            return;
        }

        GameConfig.ColorValue.getAllElement().forEach((value: IColorValueElement) => {
            this.colorPickTab3Colors.push(value.HairColor);
        });
        this.getColorPickPanel.showColorPickPanel(tab1Text, this.colorPickTab2Datas, this.colorPickTab3Colors);
    }

    private changeCharacterColor(color: mw.LinearColor): void {
        switch (this.colorPickTabId) {
            case Tab2Type.Tab2_SkinTone:
                this.localPlayer.character.description.advance.makeup.skinTone.skinColor = color;
                break;
            case Tab2Type.Tab2_Eyebrows:
                this.localPlayer.character.description.advance.makeup.eyebrows.eyebrowColor = color;
                break;
            case Tab2Type.Tab2_Top:
                this.localPlayer.character.description.advance.clothing.upperCloth.part[this.colorPickTab2Index].color.areaColor = color;
                break;
            case Tab3Type.Tab3_FrontHair:
                switch (this.colorPickTab2Index) {
                    case 0:
                        this.localPlayer.character.description.advance.hair.frontHair.color.color = color;
                        this.localPlayer.character.description.advance.hair.frontHair.color.gradientColor = color;
                        break;
                    case 1:
                        this.localPlayer.character.description.advance.hair.frontHair.color.color = color;
                        break;
                    case 2:
                        this.localPlayer.character.description.advance.hair.frontHair.color.gradientColor = color;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    }
}