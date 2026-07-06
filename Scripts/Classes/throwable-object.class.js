import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";
IntervalHub

export class ThrowableObject extends MovableObject {
    position_x = 500 + Math.random() * 1250;
    position_y = 370;
    height = 60;
    width = 50;
    showFrame = true;
    throwableObject = true;

    offset = {
        top: 10,
        right: 10,
        bottom: 5,
        left: 20,
    };

    constructor() {
        super().loadImage(
            "./Assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
        );
    }

/*     throw(x, y){
        this.position_x = x;
        this.position_y = y;
        this.speed_Y = 30;
        this.speed = 30;
        IntervalHub.startInterval(this.applyGravity, 1000/25);
        setInterval(() => {
            this.position_x += 10;
        }, 1000/25);
    } */
}
