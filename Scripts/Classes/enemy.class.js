import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    constructor() {
        super().loadImage("../Assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");

        this.position_x = 200 + Math.random() * 500;
        this.position_y = 380;
        this.width = 50;
        this.height = 50;
    }
}
