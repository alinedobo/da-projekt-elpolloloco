import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

export class MovableObject extends DrawableObject {
    //#region Properties
    speed_X = 0;
    speed_Y = 0;
    reverseDirection = false;
    world;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    showFrame = false;
    throwableObject = false;
    timeOfDeath = 0;
    timeOfLastMovement = 0;
    dyingSound;
    hitSound;
    //#endregion

    //#region Methods
    applyGravity = () => {
        if (this.isAboveGround() || this.speed_Y > 0) {
            this.position_y -= this.speed_Y;
            this.speed_Y -= this.acceleration;
        }
    };

    isAboveGround() {
        if (this.throwableObject) {
            return true;
        } else {
            return this.position_y < 220;
        }
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // Modulo only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ...
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft() {
        this.position_x -= this.speed_X;
        this.timeOfLastMovement = new Date().getTime();
    }

    moveRight() {
        this.position_x += this.speed_X;
        this.timeOfLastMovement = new Date().getTime();
    }

    checkIfSleeping(){
        let currentTime = new Date().getTime();
        return (currentTime - this.timeOfLastMovement)/1000 > 15
    }

    jump() {
        this.speed_Y = 30;
    }

    isColliding(mo) {
        this.getRealFrame();
        mo.getRealFrame();
        return (
            this.rX + this.rW > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX + mo.rW &&
            this.rY < mo.rY + mo.rH
        );
    }

    isCollidingFromAbove(mo) {
        this.getRealFrame();
        mo.getRealFrame();
        return (
            this.rX + this.rW > mo.rX &&
            this.rY + this.rH < mo.rY - 1 &&
            this.rY + this.rH > mo.rY - 40 &&
            this.rX < mo.rX + mo.rW
        );
    }

    isHit(damage) {
        this.energy -= damage;
        if (this.energy <= 0) {
            this.energy = 0;
            this.timeOfDeath = new Date().getTime();
            SoundHub.playOne(this.dyingSound);
        } else {
            this.lastHit = new Date().getTime(); //timestamp: seconds passed since 01.01.1970
            SoundHub.playOne(this.hitSound);
        }
    }

    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000; // time passed in ms
        return timePassed < 1;
    }

    checkIfDeadLongEnough = () => {
        let timePassed = new Date().getTime() - this.timeOfDeath;
        timePassed = timePassed / 1000; // time passed in ms
        return timePassed > 2;
    };

    isDead() {
        return this.energy == 0;
    }
    //#endregion
}
