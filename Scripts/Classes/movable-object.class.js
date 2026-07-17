import { IntervalHub } from "../Helpers/interval-hub.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { DrawableObject } from "./drawable-object.class.js";

/**
 * @class
 * Defines all the properties and methods relevant to all MovableObjects
 * Inherits from Drawableobject
 */
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
    /**
     * Check if the object if above a certain Y position or if its speed if higher than zero and then apply gravity by decreasing speed and increasing the Y value
     */
    applyGravity = () => {
        if (this.isAboveGround() || this.speed_Y > 0) {
            this.position_y -= this.speed_Y;
            this.speed_Y -= this.acceleration;
        }
    };

    /**
     *
     * @returns {boolean}
     * Returns wether or not the object is currently "above ground" (meaning its Y value is smaller than the set value)
     */
    isAboveGround() {
        if (this.throwableObject) {
            return true;
        } else {
            return this.position_y < 220;
        }
    }

    /**
     *
     * @param {array} images - array containing the paths of the images used in the animation
     * We use the modulo operator (%) that only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ... so that the function loops through the array
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Method that allows the object to move from right to left by decreasing the X value based on the object's speed
     */
    moveLeft() {
        this.position_x -= this.speed_X;
        this.timeOfLastMovement = new Date().getTime();
    }

    /**
     * Method that allows the object to move from left to right by decreasing the X value based on the object's speed
     */
    moveRight() {
        this.position_x += this.speed_X;
        this.timeOfLastMovement = new Date().getTime();
    }

    /**
     * Method that checks if the character has been idle longer than 15 seconds based on the timestamp of its latest movement and the current timestamp
     * @returns {boolean}
     */
    checkIfSleeping() {
        let currentTime = new Date().getTime();
        return (currentTime - this.timeOfLastMovement) / 1000 > 15;
    }

    /**
     * Method that allows the character to jump by increasing its speed on the Y axis
     */
    jump() {
        this.speed_Y = 30;
    }

    /**
     * Method that gets the real frames of the character and the movable object it's colliding with
     * Checks if there is a collision based on the different positions
     * Return a true of false for the collision
     * @param {*} mo - Movable object
     * @returns {boolean}
     */
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

    /**
     * Method that gets the real frames of the character and the movable object it's colliding with
     * Checks if the character being above the movable 
     * Return a true of false
     * @param {*} mo - Movable object
     * @returns {boolean}
     */
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

    /**
     * Method that decreases the movable object's energy based on the damage that it's receiving
     * Check if the energy level is above 0 and if not, plays death animation and sound
     * @param {number} damage - damage inflicted during the collision
     */
    isHit(damage) {
        this.energy -= damage;
        if (this.energy <= 0) {
            this.energy = 0;
            this.timeOfDeath = new Date().getTime();
            SoundHub.playOne(this.dyingSound);
            SoundHub.pauseOne(SoundHub.PEPE_DAMAGE);
        } else {
            this.lastHit = new Date().getTime(); //timestamp: seconds passed since 01.01.1970
            SoundHub.playOne(this.hitSound);
        }
    }

    /**
     * Method that checks the last time that a movable object has been hit for the last time
     * Returns true or false if it's been less than a second
     * @returns {boolean}
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000; // time passed in ms
        return timePassed < 1;
    }

    /**
     * Methods that checks if the movable object has been dead more than 2 seconds based on the timestamp for its death and the current timestamp
     * Converts the duration from milliseconds to seconds
     * Returns a true or false
     * @returns {boolean}
     */
    checkIfDeadLongEnough = () => {
        let timePassed = new Date().getTime() - this.timeOfDeath;
        timePassed = timePassed / 1000;
        return timePassed > 2;
    };

    /**
     * Method that checks if the movable object's energy is equal to 0 meaning it's dead
     * Returns a true or false
     * @returns {boolean}
     */
    isDead() {
        return this.energy == 0;
    }
    //#endregion
}
