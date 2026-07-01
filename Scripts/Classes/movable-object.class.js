import { IntervalHub } from "../Helpers/interval-hub.js";

export class MovableObject {
    //#region Properties
    position_x = 0;
    position_y = 0;
    height = 100;
    width = 100;
    image;
    imageCache = {};
    currentImage = 0;
    speed = 0;
    reverseDirection = false;
    world;
    speed_Y = 0;
    acceleration = 2.5;
    energy = 1000;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    };
    rX;
    rY;
    rH;
    rW;
    //#endregion

    //#region Methods
    getRealFrame() {
        this.rX = this.position_x + this.offset.left;
        this.rY = this.position_y + this.offset.top;
        this.rH = this.height - this.offset.top - this.offset.bottom;
        this.rW = this.width - this.offset.left - this.offset.right;
    }


    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position_x,
            this.position_y,
            this.width,
            this.height,
        );
    }


    drawFrame(ctx) {
        // Drawing a rectangle: https://www.w3schools.com/tags/canvas_rect.asp
        if (this.MOVABLE_OBJECT) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect(this.rX, this.rY, this.rW, this.rH);
            ctx.stroke();
        }
    }


    applyGravity() {
        IntervalHub.startInterval(() => {
            if (this.isAboveGround() || this.speed_Y > 0) {
                this.position_y -= this.speed_Y;
                this.speed_Y -= this.acceleration;
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
        this.position_x += this.speed;
    }


    jump() {
        this.speed_Y = 30;
    }


    isColliding(mo) {
        return (
            this.rX + this.rH > mo.rX &&
            this.rY + this.rH > mo.rY &&
            this.rX < mo.rX &&
            this.rY < mo.rY + mo.rH
        );
    }


    hit() {
        this.energy -= 2;
        console.log(this.energy);
        if (this.energy < 0) {
            this.energy = 0;
        }
    }


    isDead() {
        return this.energy == 0;
    }
    //#endregion
}
