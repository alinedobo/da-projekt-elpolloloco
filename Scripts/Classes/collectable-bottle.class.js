import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";


export class CollectableBottle extends MovableObject {
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
        super().loadImage("./Assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    }
    
}
