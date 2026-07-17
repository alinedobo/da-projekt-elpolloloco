import { DrawableObject } from "./drawable-object.class.js";

/**
 * @class
 * Class for the coins that can be collected in the game by collidign with them
 * Extends from DrawableObject
 */
export class Coin extends DrawableObject{
    //#region Properties
    position_x = 500 + Math.random() * 2250;
    position_y = 220 - Math.random() * 100;
    height = 150;
    width = 150;
    showFrame = false;
    throwableObject = false;

    offset = {
        top: 55,
        right: 55,
        bottom: 55,
        left: 55,
    };
    //endregion

    //#region Constructor
    /**
     * Loads the image of the coins and positions them based on the random x and y values
     */
    constructor() {
        super().loadImage(
            "./Assets/img/8_coin/coin_1.png",
        );
    }
    //#endregion
}
