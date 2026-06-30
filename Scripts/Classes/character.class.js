import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Keyboard } from "../Helpers/keyboard.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";
import { World } from "./world.class.js";


export class Character extends MovableObject{
    world;

    constructor(){
        super().loadImage(ImageHub.PEPE.walking[0]);
        this.loadImages(ImageHub.PEPE.walking);
        this.loadImages(ImageHub.PEPE.jumping);

        this.position_x = 20;
        this.position_y = 50;
        this.height = 200;
        this.width = 100;
        this.speed = 2;

        this.applyGravity();
        this.animate();
    }

    animate(){
        IntervalHub.startInterval(() => {
            if(Keyboard.KEY_RIGHT && this.position_x < this.world.level.level_end_x){ 
                // level_end_x is part of the level, the level is part of the world
                // for the character to access the value level_end_x in level, we need to go up into the world and back down into the world
                this.reverseDirection = false;
                this.position_x += this.speed;
            }
            
            if(Keyboard.KEY_LEFT && this.position_x > 0){
                this.reverseDirection = true;
                this.position_x -= this.speed;
            }
/* 
            console.log(this.speed_Y); */

            if(Keyboard.KEY_UP){
                this.speed_Y = 20;
            }

            this.world.camera_x = -this.position_x + 100;
            
        }, 1000/60);

        IntervalHub.startInterval(() => {
            if(this.isAboveGround()){
                this.playAnimation(ImageHub.PEPE.jumping);
            } else if(Keyboard.KEY_RIGHT || Keyboard.KEY_LEFT){
                this.playAnimation(ImageHub.PEPE.walking);
            }
        }, 100);
    }
}

