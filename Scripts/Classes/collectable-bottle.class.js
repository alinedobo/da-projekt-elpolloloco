import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

/**
 * @class
 * Class for the bottles that are on the ground and can be collected by the character upon collison
 * Extends DrawableObject
 */
export class CollectableBottle extends DrawableObject {
    //#region Properties
    position_x = 500 + Math.random() * 2000;
    position_y = 370 + Math.random() * 5;
    height = 60;
    width = 50;
    showFrame = false;
    offset = {
        top: 10,
        right: 10,
        bottom: 5,
        left: 20,
    };
    //#endregion

    //#region Constructor
    /**
     * Loads the images of the bottles and positions them based on the random x & y values
     */
    constructor() {
        super().loadImage(ImageHub.BOTTLE.onTheGround[0]);
    }
    //#endregion
}
