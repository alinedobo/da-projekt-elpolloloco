import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    showFrame = true;

    constructor() {
        super().loadImage(ImageHub.CHICKEN.walking[0]);
        this.loadImages(ImageHub.CHICKEN.walking);
        this.loadImages(ImageHub.CHICKEN.dead);

        this.position_x = 400 + Math.random() * 3000;
        this.position_y = 380;
        this.width = 50;
        this.height = 50;
        this.offset = {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        };
        this.speed_X = 0.75 + Math.random();
        this.energy = 40;
        this.dyingSound = SoundHub.CHICKEN_DEAD;

        IntervalHub.startInterval(this.animate, 100);
    }

    animate = () => {
        if (this.energy > 0) {
            this.playAnimation(ImageHub.CHICKEN.walking);
            this.moveLeft();
        } else{
            this.position_y = 400;
            this.playAnimation(ImageHub.CHICKEN.dead);
            this.offset = {
                top: 30,
                right: 5,
                bottom: 0,
                left: 5,
            };
        }
    };
}
