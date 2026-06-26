import { Character } from "./Scripts/Classes/character.class.js";
import { Enemy } from "./Scripts/Classes/enemy.class.js";
import { MovableObject } from "./Scripts/Classes/movable-object.class.js";
import { World } from "./Scripts/Classes/world.class.js";
import { Keyboard } from "./Scripts/Helpers/keyboard.js";

let canvas;
let world;

function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);
}

window.onload = init;


