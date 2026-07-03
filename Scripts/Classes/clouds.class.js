import { IntervalHub } from "../Helpers/interval-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Clouds extends MovableObject {
    //#region Properties
    position_y = 0;
    width = 600;
    height = 350;
    speed = 0.3;
    showFrame = false;
    //#endregion

    constructor() {
        super().loadImage("./Assets/img/5_background/layers/4_clouds/1.png");
        this.position_x = Math.random() * 500;
        this.animate();
        IntervalHub.startInterval(this.animate, 50);
    }

    //#region Methods
    animate = () => {
        this.moveLeft();
    }
    //#endregion
}
