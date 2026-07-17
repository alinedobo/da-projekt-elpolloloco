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
    /**
     * showFrame variable allows us to tag for wich movable object we want to display the real frame.
     * The real frame is used to calculate the collisions.
     * We used this variable instead of the instanceOf solution presented in the video to avoid a dependency between scripts (A needs B to be created but B needs A to be created first)
     */
    showFrame = false;
    //#endregion

    //#region Methods
    /**
     * Loads the image we want to display
     * @param {string} path - Relative path of the image we want to load
     */
    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    /**
     * Loads the various images we want to animate
     * @param {Array} arr - array containing the paths of the various images we want to load
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Methods that draws the loaded images into the canvas based on the context
     * @param {*} ctx - context used for the canvas
     */
    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position_x,
            this.position_y,
            this.width,
            this.height,
        );
    }

    /**
     * Method that calculate the real frame of a movable object (the size of the image frame minus the offsets)
     * The real frame is needed to have accurate collisions based on the seeable size of the movable objects
     */
    getRealFrame() {
        this.rX = this.position_x + this.offset.left;
        this.rY = this.position_y + this.offset.top;
        this.rH = this.height - this.offset.top - this.offset.bottom;
        this.rW = this.width - this.offset.left - this.offset.right;
    }

    /**
     * Methods that draws a frame around the movable objects based on the real frame variables for each object
     * @param {*} ctx - context used for the canvas
     */
    drawFrame(ctx) {
        this.getRealFrame();
        // Drawing a rectangle: https://www.w3schools.com/tags/canvas_rect.asp
        if (this.showFrame) {
            ctx.beginPath();
            ctx.lineWidth = "2";
            ctx.strokeStyle = "red";
            ctx.rect(this.rX, this.rY, this.rW, this.rH);
            ctx.stroke();
        }
    }
    //#endregion Methods
}
