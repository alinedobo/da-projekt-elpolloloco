import { ImageHub } from "../Helpers/image-hub.js";
import { level1 } from "../Levels/level-01.js";
import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Clouds } from "./clouds.class.js";
import { Enemy } from "./enemy.class.js";
import { Level } from "./level.class.js";
import { MovableObject } from "./movable-object.class.js";

export class World {
    //#region Properties
    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    ctx;
    canvas;
    camera_x = -0;

    static CANVAS_WIDTH = 720; //doesn't work
    static CANVAS_HEIGHT = 480; //doesn't work
    //#endregion

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    //#region Methods
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);

        this.ctx.translate(-this.camera_x, 0);

        requestAnimationFrame(() => this.draw()); //repeat the redraw of the canvas based on graphics card ability
    }


    addObjectToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        if(mo.reverseDirection){
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.position_x = mo.position_x * -1;
        }
        this.ctx.drawImage(mo.image, mo.position_x, mo.position_y, mo.width, mo.height,);

        if(mo.reverseDirection){
            mo.position_x = mo.position_x * -1;
            this.ctx.restore();
        }
    }
    //#endregion
}



