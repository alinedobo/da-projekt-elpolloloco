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
    energy = 100;
    //#endregion

    //#region Methods
    draw(ctx){
        ctx.drawImage(this.image, this.position_x, this.position_y, this.width, this.height,);
    }
    

    drawFrame(ctx){
        // Drawing a rectangle: https://www.w3schools.com/tags/canvas_rect.asp
        if(this.MOVABLE_OBJECT){
            ctx.beginPath();
            ctx.lineWidth = '2';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.position_x, this.position_y, this.width, this.height);
            ctx.stroke();
        }
    }


    applyGravity() {
        IntervalHub.startInterval(() => {
            if (this.isAboveGround() || this.speed_Y > 0) {
                this.position_y -= this.speed_Y;
                this.speed_Y -= this.accelaration;
            }
        }, 1000 / 25);
    }


    isAboveGround() {
        return this.position_y < 220;
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


    moveLeft() {
        this.position_x -= this.speed;
    }

    moveRight() {
        this.position_x += this.speed
    }

    jump() {
        this.speed_Y = 30;
    }


    isColliding(mo){
        return this.position_x + this.width > mo.position_x &&
        this.position_y + this.height > mo.position_y &&
        this.position_x < mo.position_x &&
        this.position_y < mo.position_y + mo.height;
    }
    //#endregion
}
