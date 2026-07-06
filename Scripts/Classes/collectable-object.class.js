import { MovableObject } from "./movable-object.class.js"

export class CollectableObject extends MovableObject{
    position_x = 500 + Math.random() * 2250;
    position_y = 220 - Math.random() * 100;
    height = 150;
    width = 150;
    showFrame = true;
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
