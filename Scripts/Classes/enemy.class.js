import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

/**
 * @class
 * Class for the mid sized eneimies of our character
 * iInherits from Movable Object
 */
export class Enemy extends MovableObject {
    //#region Properties
    position_x = 400 + Math.random() * 3000;
    position_y = 385;
    width = 50;
    height = 50;
    offset = {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
    };
    speed_X = 0.75 + Math.random();
    energy = 40;
    dyingSound = SoundHub.CHICKEN_DEAD;
    hitSound = SoundHub.CHICKEN_DEAD;
    showFrame = false;
    //#endregion

    //#region Constructor
    /**
     * Loads the images of the enemy to draw in the canvas
     * Loads the images used for the animations of different states
     * Starts an interval for the animation
     */
    constructor() {
        super().loadImage(ImageHub.CHICKEN.walking[0]);
        this.loadImages(ImageHub.CHICKEN.walking);
        this.loadImages(ImageHub.CHICKEN.dead);
        IntervalHub.startInterval(this.animate, 100);
    }
    //#endregion

    //#region Methods
    /**
     * Method that animates the enemy based on its state and makes it move from right to left in the canvas
     */
    animate = () => {
        if (this.energy > 0) {
            this.playAnimation(ImageHub.CHICKEN.walking);
            this.moveLeft();
        } else {
            this.position_y = 415;
            this.playAnimation(ImageHub.CHICKEN.dead);
            this.offset = {
                top: 50,
                right: 5,
                bottom: 5,
                left: 5,
            };
        }
    };
    //#endregion
}
