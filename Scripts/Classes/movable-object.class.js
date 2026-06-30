import { IntervalHub } from "../Helpers/interval-hub.js";

export class MovableObject {
    //#region Properties
    position_x = 0;
    position_y = 0;
    height = 100;
    width = 50;
    image;
    imageCache = {};
    currentImage = 0;
    speed = 0;
    reverseDirection = false;
    world;
    speed_Y = 0;
    accelaration = 2.5;
    //#endregion

    //#region Methods
    applyGravity() {
        IntervalHub.startInterval(() => {
            if(this.isAboveGround()){
                this.position_y -= this.speed_Y;
                this.speed_Y -= this.accelaration;
            }
        }, 1000/25);
    }

    isAboveGround(){
        return this.position_y < 230;
    }

    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // Modulo only keeps the rest of the div -> i = 0, 1, 2, 3, 4, 5, 0, 1, ...
        let path = images[i];
        this.image = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log("moving right");
    }

    moveLeft() {
        console.log("moving left");
    }

    moveLeft() {
        IntervalHub.startInterval(() => {
            this.position_x -= this.speed;
        }, 1000 / 60);
    }
    //#endregion
}
