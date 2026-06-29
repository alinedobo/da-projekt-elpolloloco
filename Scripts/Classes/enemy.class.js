import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Enemy extends MovableObject {
    constructor() {
        super().loadImage(ImageHub.CHICKEN.walking[0]);
        this.loadImages(ImageHub.CHICKEN.walking);

        this.position_x = 200 + Math.random() * 500;
        this.position_y = 380;
        this.width = 50;
        this.height = 50;
        this.speed = 0.1 + Math.random();

        this.animate();
    }

    animate(){
        this.moveLeft();

        IntervalHub.startInterval(() => {
            let i = this.currentImage % ImageHub.CHICKEN.walking.length; // Modulo only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ...
            let path = ImageHub.CHICKEN.walking[i];
            this.image = this.imageCache[path];
            this.currentImage++;
        }, 200);


    }
}


