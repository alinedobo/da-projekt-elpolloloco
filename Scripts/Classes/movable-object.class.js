export class MovableObject {
    //#region Properties
    position_x = 0;
    postion_y = 0;
    height = 100;
    width = 50;
    image;
    //#endregion

    /*     constructor{

    } */

    //#region Methods

    loadImage(path) {
        this.image = new Image();
        this.image.src = path;
    }

    moveRight() {
        console.log("moving right");
    }

    moveLeft() {
        console.log("moving left");
    }

    moveLeft() {}
    //#endregion
}
