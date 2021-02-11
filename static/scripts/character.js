import { loadImage } from "./utils.js"
import { RenderCache } from "./rendercache.js";

export class Character
{
    constructor(name, format, isHidden, scale)
    {
        this.characterName = name;
        this.format = format;
        this.isHidden = isHidden
        this.scale = scale || 0.5
    }

    async loadImages()
    {
        const promises = [
            loadImage("characters/" + this.characterName + "/front-sitting." + this.format),
            loadImage("characters/" + this.characterName + "/front-standing." + this.format),
            loadImage("characters/" + this.characterName + "/front-walking-1." + this.format),
            loadImage("characters/" + this.characterName + "/front-walking-2." + this.format),
            loadImage("characters/" + this.characterName + "/back-sitting." + this.format),
            loadImage("characters/" + this.characterName + "/back-standing." + this.format),
            loadImage("characters/" + this.characterName + "/back-walking-1." + this.format),
            loadImage("characters/" + this.characterName + "/back-walking-2." + this.format),
        ]

        if (this.characterName == "giko")
            promises.push(loadImage("characters/" + this.characterName + "/front-standing-alternate-mouth." + this.format))

        const results = await Promise.all(promises)

        this.frontSittingImage = RenderCache.Image(results[0], this.scale)
        this.frontStandingImage = RenderCache.Image(results[1], this.scale)
        this.frontWalking1Image = RenderCache.Image(results[2], this.scale)
        this.frontWalking2Image = RenderCache.Image(results[3], this.scale)
        this.backSittingImage = RenderCache.Image(results[4], this.scale)
        this.backStandingImage = RenderCache.Image(results[5], this.scale)
        this.backWalking1Image = RenderCache.Image(results[6], this.scale)
        this.backWalking2Image = RenderCache.Image(results[7], this.scale)
        if (results[8])
            this.frontStandingAlternateMouthImage = RenderCache.Image(results[8], this.scale)

        this.frontSittingFlippedImage = RenderCache.Image(results[0], this.scale, true)
        this.frontStandingFlippedImage = RenderCache.Image(results[1], this.scale, true)
        this.frontWalking1FlippedImage = RenderCache.Image(results[2], this.scale, true)
        this.frontWalking2FlippedImage = RenderCache.Image(results[3], this.scale, true)
        this.backSittingFlippedImage = RenderCache.Image(results[4], this.scale, true)
        this.backStandingFlippedImage = RenderCache.Image(results[5], this.scale, true)
        this.backWalking1FlippedImage = RenderCache.Image(results[6], this.scale, true)
        this.backWalking2FlippedImage = RenderCache.Image(results[7], this.scale, true)
        if (results[8])
            this.frontStandingAlternateMouthFlippedImage = RenderCache.Image(results[8], this.scale, true)
    }
}

export const characters = {
    giko: new Character("giko", "svg", false),
    naito: new Character("naito", "svg", false),
    funkynaito: new Character("funkynaito", "png", false),
    furoshiki: new Character("furoshiki", "svg", false),
    naitoapple: new Character("naitoapple", "svg", false),
    hikki: new Character("hikki", "svg", false),
    tinpopo: new Character("tinpopo", "svg", false),
    shii: new Character("shii", "svg", false),
    shii_pianica: new Character("shii_pianica", "svg", false),
    giko_hat: new Character("giko_hat", "svg", false),
    shii_hat: new Character("shii_hat", "svg", false),
    hungry_giko: new Character("hungry_giko", "svg", true),
    rikishi_naito: new Character("rikishi_naito", "svg", true),
    hentai_giko: new Character("hentai_giko", "svg", true),
    shar_naito: new Character("shar_naito", "svg", true),
    dark_naito_walking: new Character("dark_naito_walking", "svg", true),
    shobon: new Character("shobon", "svg", false),
    furoshiki_shobon: new Character("furoshiki_shobon", "png", false),
    nida: new Character("nida", "svg", false),
    ika: new Character("ika", "svg", true),
}
