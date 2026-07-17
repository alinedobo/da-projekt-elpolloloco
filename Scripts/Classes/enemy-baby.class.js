import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

/**
 * @class
 * Class for the smallest enemies of our character
 * Inherits from MovableObject
 */
export class EnemyBaby extends MovableObject {
    //#region Properties
    position_x = 400 + Math.random() * 3000;
    position_y = 405;
    width = 25;
    height = 25;
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
    };
    speed_X = 0.1 + Math.random();
    energy = 15;
    dyingSound = SoundHub.CHICK_DEAD;
    showFrame = false;
    //#endregion

    //#region Constructor
    /**
     * Loads the images of the enemy to draw in the canvas
     * Loads the images used for the animations of different states
     * Starts an interval for the animation
     */
    constructor() {
        super().loadImage(ImageHub.CHICK.walking[0]);
        this.loadImages(ImageHub.CHICK.walking);
        this.loadImages(ImageHub.CHICK.dead);

        IntervalHub.startInterval(this.animate, 50);
    }
    //#endregion

    //#region Methods
    /**
     * Method that animates the enemy based on its state and makes it move from right to left in the canvas
     */
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
        }
    };
    //#endregion
}
