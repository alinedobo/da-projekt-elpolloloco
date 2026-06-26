import { MovableObject } from "./movable-object.class.js";


export class Character extends MovableObject{

    constructor(){
        super().loadImage('../Assets/img/2_character_pepe/2_walk/W-21.png');
        this.position_x = 20;
        this.position_y = 235;
        this.height = 200;
        this.width = 100;
    }
}