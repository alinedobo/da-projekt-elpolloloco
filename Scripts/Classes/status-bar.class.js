import { ImageHub } from "../Helpers/image-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

export class StatusBar extends DrawableObject {
    //#region Properties
    percentage = 100;
    position_x = 0;
    position_y = 0;
    height = 50;
    width = 200;
    imageArray = [];

    //#endregion

    constructor() {
        super();
        this.loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(100);
    }

    //#region Methods
    showPercentageStatusBar(percentage) {
        this.percentage = percentage;
        let path = this.imageArray[this.getImageIndex()];
        this.image.src = path;
    }


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

export class HealthBar extends StatusBar {
    position_x = 10;
    position_y = 0;
    imageArray = ImageHub.STATUS_BAR.health;

    constructor() {
        super();
        this.loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(100);
    }
}


export class CoinBar extends StatusBar {
    position_x = 10;
    position_y = 50;
    imageArray = ImageHub.STATUS_BAR.coins;

    constructor() {
        super().loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(0);
    }
}


export class BottleBar extends StatusBar {
    position_x = 10;
    position_y = 100;
    imageArray = ImageHub.STATUS_BAR.bottles;

    constructor() {
        super().loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(0);
    }
}


export class EndbossHealthBar extends StatusBar {
    position_x = 500;
    position_y = 5;
    imageArray = ImageHub.STATUS_BAR.bossHealth;

    constructor() {
        super().loadImage(this.imageArray[0]);
        this.loadImages(this.imageArray);
        this.showPercentageStatusBar(100);
    }
}
