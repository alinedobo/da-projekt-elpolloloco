import { World } from "./Scripts/Classes/world.class.js";

let canvas;
let world;

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);
}

window.onload = init;


