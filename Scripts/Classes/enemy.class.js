import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    constructor() {
        super().loadImage(ImageHub.CHICKEN.walking[0]);
        this.loadImages(ImageHub.CHICKEN.walking);

        this.position_x = 200 + Math.random() * 1000;
        this.position_y = 380;
        this.width = 50;
        this.height = 50;
        this.speed = 0.1 + Math.random();

        this.MOVABLE_OBJECT = true;

        this.animate();
    }

    animate(){
        this.moveLeft();

        IntervalHub.startInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        IntervalHub.startInterval(() => {
            this.playAnimation(ImageHub.CHICKEN.walking);
        }, 200);
    }
}


