import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    constructor() {
        super().loadImage("../Assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    }
}
