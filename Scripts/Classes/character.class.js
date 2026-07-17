import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Keyboard } from "../Helpers/keyboard.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";
import { World } from "./world.class.js";

/**
 * @class
 * Class that contains all the properties and methods that relate to our main character.
 * Inherits from MovableObject
 */
export class Character extends MovableObject {
    //#region Properties
    world;
    position_x = 20;
    position_y = 240;
    height = 200;
    width = 100;
    speed_X = 5;
    offset = {
        top: 100,
        right: 30,
        bottom: 20,
        left: 30,
    };
    showFrame = false;
    energy = 100;
    hitSound = SoundHub.PEPE_DAMAGE;
    dyingSound = SoundHub.PEPE_DEAD;
    lastMovement;
    //#endregion

    //#region Constructor
    /**
     * Calls various methods from MovableObject to load and show the pictures of our character
     * Starts several intervals to animate the character
     * Calculate the real frame of our character for the Collision calculation
     */
    constructor() {
        super().loadImage(ImageHub.PEPE.walking[0]);
        this.loadImages(ImageHub.PEPE.walking);
        this.loadImages(ImageHub.PEPE.jumping);
        this.loadImages(ImageHub.PEPE.hurt);
        this.loadImages(ImageHub.PEPE.dead);
        this.loadImages(ImageHub.PEPE.idle);
        this.loadImages(ImageHub.PEPE.sleeping);

        IntervalHub.startInterval(this.moveCharacter, 1000 / 60);
        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
        IntervalHub.startInterval(this.playSound, 1000 / 25);
        IntervalHub.startInterval(this.animateCharacter, 100);
        this.getRealFrame();
    }

    //#region Methods
    /**
     * Method that selects which images to use for the character animation based on its state
     */
    animateCharacter = () => {
        if (this.isAboveGround()) {
            this.playAnimation(ImageHub.PEPE.jumping);
        } else if (this.isHurt()) {
            this.playAnimation(ImageHub.PEPE.hurt);
        } else if (this.isDead()) {
            this.playAnimation(ImageHub.PEPE.dead);
            this.speed_X = 0;
        } else if (Keyboard.KEY_RIGHT || Keyboard.KEY_LEFT) {
            this.playAnimation(ImageHub.PEPE.walking);
        } else if (this.checkIfSleeping()) {
            this.playAnimation(ImageHub.PEPE.sleeping);
        } else {
            this.playAnimation(ImageHub.PEPE.idle);
        }
    };

    /**
     * Method that selects which sound to play based on the state of the character
     */
    playSound = () => {
        if (this.checkIfSleeping()) {
            SoundHub.playOneContinuously(SoundHub.PEPE_SNORING);
        }

        if (!this.checkIfSleeping()) {
            SoundHub.pauseOne(SoundHub.PEPE_SNORING);
        }

        if (Keyboard.KEY_RIGHT || Keyboard.KEY_LEFT) {
            SoundHub.playOneContinuously(SoundHub.PEPE_RUN);
        }

        if (!Keyboard.KEY_RIGHT && !Keyboard.KEY_LEFT) {
            SoundHub.pauseOne(SoundHub.PEPE_RUN);
        }
    };

    /**
     * Method that allows the character to move (left, right, up) based on keyboard or responsive button input
     * reverseDirection variable allows us to move backwards (x decreasing)
     * Level_end_x is part of the level, the level is part of the world
     * For the character to access the value level_end_x in level, we need to go up into the world and back down into the world
     */
    moveCharacter = () => {
        if (
            Keyboard.KEY_RIGHT &&
            this.position_x < this.world.level.level_end_x
        ) {
            this.moveRight();
            this.reverseDirection = false;
        }

        if (Keyboard.KEY_LEFT && this.position_x > 0) {
            this.moveLeft();
            this.reverseDirection = true;
        }

        if ((Keyboard.KEY_UP || Keyboard.KEY_SPACE) && !this.isAboveGround()) {
            this.jump();
            SoundHub.playOne(SoundHub.PEPE_JUMP);
        }
        this.world.camera_x = -this.position_x + 100;
    };
    //#endregion
}
