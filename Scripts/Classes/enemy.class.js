import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    showFrame = true;

    constructor() {
        super().loadImage(ImageHub.CHICKEN.walking[0]);
        this.loadImages(ImageHub.CHICKEN.walking);

        this.position_x = 200 + Math.random() * 1000;
        this.position_y = 380;
        this.width = 50;
        this.height = 50;
        this.offset = {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        };
        this.speed = 0.75 + Math.random();

        IntervalHub.startInterval(this.animate, 100);
    }

    animate = () => {
        this.playAnimation(ImageHub.CHICKEN.walking);
        this.moveLeft();
    }
}
