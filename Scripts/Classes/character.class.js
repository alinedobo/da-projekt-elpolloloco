import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Keyboard } from "../Helpers/keyboard.js";
import { MovableObject } from "./movable-object.class.js";
import { World } from "./world.class.js";


export class Character extends MovableObject{
    world;

    constructor(){
        super().loadImage(ImageHub.PEPE.walking[0]);
        this.loadImages(ImageHub.PEPE.walking);

        this.position_x = 20;
        this.position_y = 235;
        this.height = 200;
        this.width = 100;
        this.speed = 2;

        this.animate();
    }

    animate(){
        IntervalHub.startInterval(() => {
            if(Keyboard.KEY_RIGHT){
                this.reverseDirection = false;
                this.position_x += this.speed;
            }
            else if(Keyboard.KEY_LEFT){
                this.reverseDirection = true;
                this.position_x -= this.speed;
            }

            this.world.camera_x = -this.position_x + 100;
            
        }, 1000/60);

        IntervalHub.startInterval(() => {
            if(Keyboard.KEY_RIGHT || Keyboard.KEY_LEFT){
                let i = this.currentImage % ImageHub.PEPE.walking.length; // Modulo only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ...
                let path = ImageHub.PEPE.walking[i];
                this.image = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }
}