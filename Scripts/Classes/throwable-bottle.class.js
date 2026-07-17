import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

/**
 * @class
 * Class for the bottles that can be thrown at the endboss
 */
export class ThrowableBottle extends MovableObject {
    //#region Properties
    height = 60;
    width = 50;
    speed_X = 10;
    speed_Y = 30;
    acceleration = 3;
    //#endregion

    //#region Constructor
    /**
     * Loads the image of the bottle that will be thrown
     * @param {number} x - current Y postion of the top left corner of the character from where to throw
     * @param {number} y - current Y postion of the top left corner of the character from where to throw
     * Calls the throwBottle method
     */
    constructor(x, y) {
        super().loadImage(ImageHub.BOTTLE.normal[0]);
        this.position_x = x;
        this.position_y = y;
        this.throwBottle();
    }
    //#endregion

    //#region Methods
    /**
     * Starts and interval that applies phyical laws to the bottle that has been thrown
     */
    throwBottle() {
        IntervalHub.startInterval(this.applyPhysics, 50);
    }

    /**
     * Method that calculates the trajectory of the thrown bottle and changes the Y and X values accoridngly
     */
    applyPhysics = () => {
        this.position_y -= this.speed_Y;
        this.speed_Y -= this.acceleration;
        this.position_x += this.speed_X;
    };
    //#endregion
}
