import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Clouds } from "./clouds.class.js";
import { Enemy } from "./enemy.class.js";

export class World {
    character = new Character();
    enemies = [new Enemy(), new Enemy(), new Enemy()];
    clouds = [new Clouds()];
    backgroundObjects = [
        new BackgroundObject(
            "../Assets/img/5_background/layers/1_first_layer/1.png",
        ),
    ];
    ctx;
    canvas;

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
    }

    
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);
        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.clouds);
        this.addObjectToMap(this.enemies);

        //#region Draw() is being called over and over again with this:
        //"this" is not reqcognised within the function so we need to declare and define a new variable "self" that we can then use within the requestAnimationFrame function.
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
        //#endregion
    }


    addObjectToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        })
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
}
