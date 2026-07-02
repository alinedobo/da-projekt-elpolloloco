import { ImageHub } from "../Helpers/image-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

export class StatusBar extends DrawableObject {
    //#region Properties
    percentage = 100;

    //#endregion

    constructor() {
        super();
        this.loadImage(ImageHub.STATUS_BAR.health[0])
        this.loadImages(ImageHub.STATUS_BAR.health);
        this.setPercentage(100);
        this.position_x = 100;
        this.position_y = 100;
    }

    //#region Methods
    setPercentage(percentage) {
        this.percentage = this.percentage;
        let path = ImageHub.STATUS_BAR.health[this.getImageIndex()];
        this.img = this.imageCache[path];
    }


    getImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
    //#endregion
}
