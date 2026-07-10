import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Endboss extends MovableObject {
    showFrame = true;

    constructor() {
        super().loadImage(ImageHub.ENDBOSS.alert[0]);
        this.loadImages(ImageHub.ENDBOSS.alert);
        this.loadImages(ImageHub.ENDBOSS.walking);
        this.loadImages(ImageHub.ENDBOSS.hurt);
        this.loadImages(ImageHub.ENDBOSS.dead);


        this.position_x = 3000;
        this.position_y = 150;
        this.width = 300;
        this.height = 300;
        this.offset = {
            top: 70,
            right: 50,
            bottom: 60,
            left: 50,
        };
        this.speed_X = 0.5;
        this.energy = 300;

        IntervalHub.startInterval(this.animate, 200);
    }

    animate = () => {
        if (this.isHurt()) {
            this.playAnimation(ImageHub.ENDBOSS.hurt);
        } else if (this.isDead()) {
            this.playAnimation(ImageHub.ENDBOSS.dead);
        } else {
            this.playAnimation(ImageHub.ENDBOSS.walking);
            this.moveLeft();
        }
    };
}
