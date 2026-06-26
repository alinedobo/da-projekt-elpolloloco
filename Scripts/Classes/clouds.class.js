import { MovableObject } from "./movable-object.class.js";

export class Clouds extends MovableObject {
    position_y = 0;
    width = 600;
    height = 350;

    constructor() {
        super().loadImage("./Assets/img/5_background/layers/4_clouds/1.png");
        this.position_x = Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.position_x -= 0.15;
        }, 1000 / 60);
    }

    /*     startInterval(func, timer) {
        const newInterval = setInterval(func, timer);
        IntervalHub.allIntervals.push(newInterval);
    } */
}
