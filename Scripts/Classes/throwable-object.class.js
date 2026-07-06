import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";
IntervalHub

export class ThrowableObject extends MovableObject {
    position_x = 200;
    position_y = 350;
    showFrame = true;
    throwableObject = true;

    offset = {
        top: 20,
        right: 20,
        bottom: 10,
        left: 45,
    };

    constructor() {
        super().loadImage(
            "./Assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        );
        this.throw(200, 219);
    }

    throw(x, y){
        this.position_x = x;
        this.position_y = y;
        this.speed_Y = 30;
        this.speed = 30;
        IntervalHub.startInterval(this.applyGravity, 1000/25);
        setInterval(() => {
            this.position_x += 10;
        }, 1000/25);
    }
}
