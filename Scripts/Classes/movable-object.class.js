import { IntervalHub } from "../Helpers/interval-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

export class MovableObject extends DrawableObject {
    //#region Properties
    speed = 0;
    reverseDirection = false;
    world;
    speed_Y = 0;
    acceleration = 2.5;
    energy = 1000;
    lastHit = 0;
    //#endregion

    //#region Methods

    applyGravity() {
        IntervalHub.startInterval(() => {
            if (this.isAboveGround() || this.speed_Y > 0) {
                this.position_y -= this.speed_Y;
                this.speed_Y -= this.acceleration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.position_y < 220;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length; // Modulo only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ...
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImage++;
    }


    moveLeft() {
        this.position_x -= this.speed;
    }


    moveRight() {
        this.position_x += this.speed;
    }


    jump() {
        this.speed_Y = 30;
    }


    isColliding(mo) {
        this.getRealFrame();
        mo.getRealFrame();
        return (
            this.rX + this.rH > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX &&
            this.rY < mo.rY + mo.rH
        );
    }

    
    hit() {
        this.energy -= 2;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); //timestamp: seconds passed since 01.01.1970
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000; // time passed in ms
        return timePassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }
    //#endregion
}
