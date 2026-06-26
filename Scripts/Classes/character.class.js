import { ImageHub } from "../Helpers/image-hub.js";
import { MovableObject } from "./movable-object.class.js";


export class Character extends MovableObject{

    constructor(){
        super().loadImage(ImageHub.PEPE.walking[0]);
        this.loadImages(ImageHub.PEPE.walking);

        this.position_x = 20;
        this.position_y = 235;
        this.height = 200;
        this.width = 100;

        this.animate();
    }

    animate(){
        setInterval(() => {
            let i = this.currentImage % ImageHub.PEPE.walking.length; // Modulo only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ...
            let path = ImageHub.PEPE.walking[i];
            this.image = this.imageCache[path];
            this.currentImage++;
        }, 200);
    }
}
