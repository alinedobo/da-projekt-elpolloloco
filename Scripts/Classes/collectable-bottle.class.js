import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { DrawableObject } from "./drawable-object.class.js";


export class CollectableBottle extends DrawableObject {
    position_x = 500 + Math.random() * 2250;
    position_y = 370;
    height = 60;
    width = 50;
    showFrame = true;
    offset = {
        top: 10,
        right: 10,
        bottom: 5,
        left: 20,
    };

    constructor() {
        super().loadImage(ImageHub.BOTTLE.onTheGround[0]);
    }
    
}
