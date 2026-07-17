import { MovableObject } from "./movable-object.class.js";

/**
 * @class
 * Creates the background of the level
 *  */
export class BackgroundObject extends MovableObject{
    //#region Properties
    width = 720;
    height = 480;
    //#endregion

    //#region Constructor
    /**
     * 
     * @param {string} path - relative path to the background image
     * @param {number} x - number that gives the start position of the image on the x axis
     * @param {number} y - number that gives the start position of the image on the y axis
     */
    constructor(imagePath, x, y){
        super().loadImage(imagePath);
        this.position_x = x;
        this.position_y = 480 - this.height;
    }
    //#endregion
}