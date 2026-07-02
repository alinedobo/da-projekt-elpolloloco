import { World } from "./world.class.js";

export class DrawableObject {
    //#region Properties
    position_x = 0;
    position_y = 0;
    height = 100;
    width = 100;
    image;
    imageCache = {};
    currentImage = 0;
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
    //#endregion Methods
}
