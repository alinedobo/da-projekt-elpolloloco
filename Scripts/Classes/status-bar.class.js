import { ImageHub } from "../Helpers/image-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

/**
 * @class
 * Class for the various status bars
 * Inherits from DrawableObject
 */
export class StatusBar extends DrawableObject {
    //#region Properties
    percentage = 100;
    position_x = 0;
    position_y = 0;
    height = 50;
    width = 200;
    imageArray = [];
    //#endregion

    //#region Constructor
    /**
     * Calls the methods from the super class (DrawableObject)
     */
    constructor() {
        super();
    }
    //#endregion

    //#region Methods
    /**
     * Method that get the index of the image in the array of images to display based on the calculated percentage
     * @param {number} percentage - the calculated percentage
     */
    showPercentageStatusBar(percentage) {
        this.percentage = percentage;
        let path = this.imageArray[this.getImageIndex()];
        this.image.src = path;
    }

    /**
     * Returns the number used as indew to select an image in an array of images
     * @returns {number} - index number for the array
     */
    getImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 5;
        } else if (this.percentage > 60) {
            return 4;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
    //#endregion
}



/**
 * @class
 * Sub-class for the Character's health bar
 * Inherits from StatusBar
 */
export class HealthBar extends StatusBar {
    //#region Properties
    position_x = 10;
    position_y = 0;
    imageArray = ImageHub.STATUS_BAR.health;
    //#endregion

    //#region Constructor
    /**
     * Calls the methods of the super class
     * Loads the images to draw into the canvas
     * Loads the array of images used based on percentage
     * Displays the the correct image for the start, in this case 100% energy/health
     */
    constructor() {
        super();
        this.loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(100);
    }
    //#endregion
}



/**
 * @class
 * Sub-class for the collected coins bar
 * Inherits from StatusBar
 */
export class CoinBar extends StatusBar {
    //#region Properties
    position_x = 10;
    position_y = 50;
    imageArray = ImageHub.STATUS_BAR.coins;
    //#endregion

    //region Constructor
    /**
     * Calls the methods of the super class
     * Loads the images to draw into the canvas
     * Loads the array of images used based on percentage
     * Displays the the correct image for the start, in this case 0% collected coins
     */
    constructor() {
        super().loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(0);
    }
    //#endregion
}



/**
 * @class
 * Sub-class for the collected bottles
 * Inherits from StatusBar
 */
export class BottleBar extends StatusBar {
    //#region Properties
    position_x = 10;
    position_y = 100;
    imageArray = ImageHub.STATUS_BAR.bottles;
    //#endregion

    //#region Constructor
    /**
     * Calls the methods of the super class
     * Loads the images to draw into the canvas
     * Loads the array of images used based on percentage
     * Displays the the correct image for the start, in this case 0% collected bottles
     */
    constructor() {
        super().loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(0);
    }
    //#endregion
}



/**
 * @class
 * Sub-class for the Endboss's health bar
 * Inherits from StatusBar
 */
export class EndbossHealthBar extends StatusBar {
    //#region Properties
    position_x = 500;
    position_y = 5;
    imageArray = ImageHub.STATUS_BAR.bossHealth;
    //#endregion

    //#region Constructor
    /**
     * Calls the methods of the super class
     * Loads the images to draw into the canvas
     * Loads the array of images used based on percentage
     * Displays the the correct image for the start, in this case 100% energy/health
     */
    constructor() {
        super().loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(100);
    }
    //#endregion
}
