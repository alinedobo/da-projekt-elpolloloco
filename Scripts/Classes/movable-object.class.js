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
    //#endregion

    //#region Methods
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