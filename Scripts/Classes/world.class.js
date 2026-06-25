import { Character } from "./character.class.js";
import { Enemy } from "./enemy.class.js";

export class World {
    character = new Character();
    enemies = [new Enemy(), new Enemy(), new Enemy()];
    ctx;

    constructor(canvas){
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.drawImage(this.character.image, this.character.position_x, this.character.postion_y, this.character.width, this.character.height);
    }
}
