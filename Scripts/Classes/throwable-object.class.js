import { MovableObject } from "./movable-object.class.js";

export class ThrowableObject extends MovableObject {
    position_x = 200;
    position_y = 350;
    showFrame = true;
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
    }
}
