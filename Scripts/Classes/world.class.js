import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Clouds } from "./clouds.class.js";
import { Enemy } from "./enemy.class.js";

export class World {
    //#region Properties
    character = new Character();
    enemies = [new Enemy(), new Enemy(), new Enemy()];
    clouds = [new Clouds()];
    backgroundObjects = [
        new BackgroundObject(
            "../Assets/img/5_background/layers/3_third_layer/1.png",
            0,
        ),
    ];
    ctx;
    canvas;
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

        this.addObjectToMap(this.clouds);
        this.addObjectToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);

        requestAnimationFrame(() => this.draw()); //repeat the redraw of the canvas based on graphics card ability
    }


    addObjectToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        this.ctx.drawImage(
            mo.image,
            mo.position_x,
            mo.position_y,
            mo.width,
            mo.height,
        );
    }
    //#endregion
}
