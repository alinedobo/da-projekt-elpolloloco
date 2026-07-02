export class DrawableObject {
    //#region Properties
    position_x = 0;
    position_y = 0;
    height = 100;
    width = 100;
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

    getRealFrame() {
        this.rX = this.position_x + this.offset.left;
        this.rY = this.position_y + this.offset.top;
        this.rH = this.height - this.offset.top - this.offset.bottom;
        this.rW = this.width - this.offset.left - this.offset.right;
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
