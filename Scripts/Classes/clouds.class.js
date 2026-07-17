import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";


/**
 * @class
 * Load the images of the clouds and displays them in the background of the game
 * Inherits from MovableObject
 */
export class Clouds extends MovableObject {
    //#region Properties
    position_y = 0;
    width = 600;
    height = 350;
    speed_X = 0.15;
    showFrame = false;
    //#endregion

    //#region Constructor
    /**
     * Load the images for the cloud
     * Positions the the start of the cloud image randomly
     * Starts an interval to animate the clouds and mave them move right to left
     */
    constructor() {
        super().loadImage("./Assets/img/5_background/layers/4_clouds/1.png");
        this.position_x = Math.random() * 500;
        IntervalHub.startInterval(this.animate, 1000/60);
    }

    //#region Methods
    /**
     * Method that calls the moveLeft method that allows the cloud to move from right to left by decreasing the x value
     */
    animate = () => {
        this.moveLeft();
    }
    //#endregion
}
