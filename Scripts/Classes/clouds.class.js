import { MovableObject } from "./movable-object.class.js";

export class Clouds extends MovableObject {
    position_y = 0;
    width = 600;
    height = 350;

    constructor() {
        super().loadImage("./Assets/img/5_background/layers/4_clouds/1.png");
        this.position_x = Math.random() * 500;
        this.animate();
        this.speed = 0.15;
    }

    animate() {
        this.moveLeft();
    }
}
