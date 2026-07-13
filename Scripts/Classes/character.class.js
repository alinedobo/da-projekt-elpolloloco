import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Keyboard } from "../Helpers/keyboard.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";
import { World } from "./world.class.js";

export class Character extends MovableObject {
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
    showFrame = true;
    energy = 100;

    hitSound = SoundHub.PEPE_DAMAGE;
    dyingSound = SoundHub.PEPE_DEAD;

    lastMovement;

    constructor() {
        super().loadImage(ImageHub.PEPE.walking[0]);
        this.loadImages(ImageHub.PEPE.walking);
        this.loadImages(ImageHub.PEPE.jumping);
        this.loadImages(ImageHub.PEPE.hurt);
        this.loadImages(ImageHub.PEPE.dead);
        this.loadImages(ImageHub.PEPE.idle);
        this.loadImages(ImageHub.PEPE.sleeping);

        IntervalHub.startInterval(this.applyGravity, 1000 / 25);
        IntervalHub.startInterval(this.playSound, 50);
        this.animate();
        this.getRealFrame();
    }

    animate() {
        IntervalHub.startInterval(() => {
            if (
                Keyboard.KEY_RIGHT &&
                this.position_x < this.world.level.level_end_x
            ) {
                // level_end_x is part of the level, the level is part of the world
                // for the character to access the value level_end_x in level, we need to go up into the world and back down into the world
                this.moveRight();
                this.reverseDirection = false;
            }

            if (Keyboard.KEY_LEFT && this.position_x > 0) {
                this.moveLeft();
                this.reverseDirection = true;
            }

            if (
                (Keyboard.KEY_UP || Keyboard.KEY_SPACE) &&
                !this.isAboveGround()
            ) {
                this.jump();
                SoundHub.playOne(SoundHub.PEPE_JUMP);
            }
            this.world.camera_x = -this.position_x + 100;
        }, 1000 / 60);

        IntervalHub.startInterval(() => {
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
        }, 100);
    }

    playSound = () => {
        if (this.checkIfSleeping()) {
            SoundHub.playOne(SoundHub.PEPE_SNORING);
        }
        
        if (!this.checkIfSleeping()) {
            SoundHub.pauseOne(SoundHub.PEPE_SNORING);
        }
        
        if (Keyboard.KEY_RIGHT || Keyboard.KEY_LEFT) {
            SoundHub.playOne(SoundHub.PEPE_RUN);
        }
        
        if (!Keyboard.KEY_RIGHT && !Keyboard.KEY_LEFT) {
            SoundHub.pauseOne(SoundHub.PEPE_RUN);
        }
    };
}
