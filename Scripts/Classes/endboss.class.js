import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Endboss extends MovableObject {
    constructor() {
        super().loadImage(ImageHub.ENDBOSS.alert[0]);
        this.loadImages(ImageHub.ENDBOSS.alert);

        this.position_x = 1500;
        this.position_y = 150;
        this.width = 300;
        this.height = 300;
        this.speed = 0.1 + Math.random();
        this.MOVABLE_OBJECT = true;
        
        this.animate();
    }

    animate() {
        IntervalHub.startInterval(() => {
            this.playAnimation(ImageHub.ENDBOSS.alert);
        }, 200);
    }
}