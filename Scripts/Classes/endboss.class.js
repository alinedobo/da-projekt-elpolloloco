import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { MovableObject } from "./movable-object.class.js";
import { World } from "./world.class.js";

/**
 * @class
 * Class for the endboss enemy of the level
 * Inherits from MovableObject
 */
export class Endboss extends MovableObject {
    //#region Properties
    position_x = 3200;
    position_y = 150;
    width = 300;
    height = 300;
    offset = {
        top: 70,
        right: 50,
        bottom: 60,
        left: 50,
    };
    speed_X = 7.5;
    energy = 100;
    dyingSound = SoundHub.CHICKEN_DEAD;
    hitSound = SoundHub.CHICKEN_DEAD;
    showFrame = false;
    //#endregion

    //#region Constructor
    /**
     * Loads the image used to draw the endboass in the canvas
     * Loads the various images based on the state of the endboss
     * Starts an interval to animate the endboss based on the relevant images
     */
    constructor() {
        super().loadImage(ImageHub.ENDBOSS.alert[0]);
        this.loadImage(ImageHub.ENDBOSS.dead[2]);
        this.loadImages(ImageHub.ENDBOSS.alert);
        this.loadImages(ImageHub.ENDBOSS.walking);
        this.loadImages(ImageHub.ENDBOSS.hurt);
        this.loadImages(ImageHub.ENDBOSS.dead);
        IntervalHub.startInterval(this.animate, 200);
    }
    //#region

    //#region Methods
    /**
     * Method that animates the endboss based on its state
     */
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
    //#endregion
}
