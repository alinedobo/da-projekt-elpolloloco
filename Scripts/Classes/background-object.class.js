import { MovableObject } from "./movable-object.class.js";


export class BackgroundObject extends MovableObject{

    constructor(imagePath){
        super().loadImage(imagePath);

    }

}