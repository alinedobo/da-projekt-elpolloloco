import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Endboss extends MovableObject {
    showFrame = true;

    constructor() {
        super().loadImage(ImageHub.ENDBOSS.alert[0]);
        this.loadImages(ImageHub.ENDBOSS.alert);
        this.loadImages(ImageHub.ENDBOSS.walking);

        this.position_x = 3000;
        this.position_y = 150;
        this.width = 300;
        this.height = 300;
        this.offset = {
            top: 60,
            right: 50,
            bottom: 50,
            left: 30,
        };
        this.speed_X = 0.5 + Math.random();

        IntervalHub.startInterval(this.animate, 1000);
    }

    animate = () => {
        this.playAnimation(ImageHub.ENDBOSS.walking);
        this.moveLeft();
    };
}
