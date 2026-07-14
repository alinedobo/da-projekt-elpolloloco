import { DrawableObject } from "./drawable-object.class.js";

export class Coin extends DrawableObject{
    position_x = 500 + Math.random() * 2250;
    position_y = 220 - Math.random() * 100;
    height = 150;
    width = 150;
    showFrame = false;
    throwableObject = false;

    offset = {
        top: 55,
        right: 55,
        bottom: 55,
        left: 55,
    };

    constructor() {
        super().loadImage(
            "./Assets/img/8_coin/coin_1.png",
        );
    }
}
