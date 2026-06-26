import { ImageHub } from "../Helpers/image-hub.js";
import { MovableObject } from "./movable-object.class.js";


export class Character extends MovableObject{

    constructor(){
        super().loadImage(ImageHub.PEPE.walking[0]);
        this.position_x = 20;
        this.position_y = 235;
        this.height = 200;
        this.width = 100;
    }
}
