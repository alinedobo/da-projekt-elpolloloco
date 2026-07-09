import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";


export class ThrowableBottle extends MovableObject {
    height = 60;
    width = 50;

    constructor(x, y) {
        super().loadImage(ImageHub.BOTTLE.normal[0]);
        this.position_x = x;
        this.position_y = y;
        this.speed_X = 10;
        this.speed_Y = 30;
        this.acceleration = 3;
        this.throwBottle();
    }

    throwBottle() {
        IntervalHub.startInterval(this.applyPhysics, 50);
    }

    applyPhysics = () => {
        this.position_y -= this.speed_Y;
        this.speed_Y -= this.acceleration;
        this.position_x += this.speed_X;
    };

}

