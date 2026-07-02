import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { level1 } from "../Levels/level-01.js";
import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Clouds } from "./clouds.class.js";
import { DrawableObject } from "./drawable-object.class.js";
import { Enemy } from "./enemy.class.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";
import { StatusBar } from "./status-bar.class.js";

export class World {
    //#region Properties
    character = new Character();
    level = level1;
    ctx;
    canvas;
    camera_x = 0;
    static MOVABLE_OBJECT = false;
    // Needed to replace "instanceof" in video S3V9 because there is a dependency (A needs B to be created but B needs A to be created first)
    // Using Daniel's idea of a variable that allows to define if an object is a movable object or not
    statusBar = new StatusBar();
    //#endregion

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    //#region Methods
    setWorld() {
        this.character.world = this;
        // Everything that gets created, get created in the world, so the world has access to everyting
        // The character is in the world, and only sees itself in the world
        // If we want to character t have access to the world (i.e. the camera showing the world), we need to give it access to said world
        // this method says: "this character's world (property 'world') is this world (this instance of the class World)"
        // meaning the character has now access to everyhting in the world
    }

    checkCollisions() {
        IntervalHub.startInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                }
            });
        }, 200);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemies);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBar);

        requestAnimationFrame(() => this.draw()); //repeat the redraw of the canvas based on graphics card ability
    }


    addToMap(mo) {
        if (mo.reverseDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        if (mo.reverseDirection) {
            this.flipImageBack(mo);
        }
        
        mo.drawFrame(this.ctx);
    }


    addObjectToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }


    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.position_x = mo.position_x * -1;
    }

    flipImageBack(mo) {
        mo.position_x = mo.position_x * -1;
        this.ctx.restore();
    }
    //#endregion
}
