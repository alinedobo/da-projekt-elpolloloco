import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

export class enemyBaby extends MovableObject {
    showFrame = true;

    constructor() {
        super().loadImage(ImageHub.CHICK.walking[0]);
        this.loadImages(ImageHub.CHICK.walking);

        this.position_x = 200 + Math.random() * 1000;
        this.position_y = 400;
        this.width = 25;
        this.height = 25;
        this.offset = {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        };
        this.speed = 0.1 + Math.random();

        IntervalHub.startInterval(this.animate, 50);
    }

    animate = () => {
        this.playAnimation(ImageHub.CHICK.walking);
        this.moveLeft();
    }
}
