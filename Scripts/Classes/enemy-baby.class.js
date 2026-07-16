import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

export class EnemyBaby extends MovableObject {
    showFrame = false;

    constructor() {
        super().loadImage(ImageHub.CHICK.walking[0]);
        this.loadImages(ImageHub.CHICK.walking);
        this.loadImages(ImageHub.CHICK.dead);

        this.position_x = 400 + Math.random() * 3000;
        this.position_y = 405;
        this.width = 25;
        this.height = 25;
        this.offset = {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
        };
        this.speed_X = 0.1 + Math.random();
        this.energy = 20;
        this.dyingSound = SoundHub.CHICK_DEAD;

        IntervalHub.startInterval(this.animate, 50);
    }

    animate = () => {
        if (this.energy > 0) {
            this.playAnimation(ImageHub.CHICK.walking);
            this.moveLeft();
        } else {
            this.position_y = 420;
            this.playAnimation(ImageHub.CHICK.dead);
            this.offset = {
                top: 25,
                right: 5,
                bottom: 0,
                left: 5,
            };

            /* this.showFrame = false; */
        }
    };
}
