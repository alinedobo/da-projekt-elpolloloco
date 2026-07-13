import { World } from "./Scripts/Classes/world.class.js";
import { ElementHub } from "./Scripts/Helpers/element-hub.js";

let canvas;
let world;

const startScreenRef = document.getElementById("start-screen");
const canvasRef = document.getElementById("canvas");
const startButtonRef = document.getElementById("start-button");

function init() {
    startScreenRef.classList.remove("display-none");
    startButtonRef.addEventListener("click", startGame);
}

window.onload = init;

function startGame() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);

    ElementHub.startScreenRef.classList.add("display-none");
    ElementHub.canvas.classList.remove("display-none");
}

ElementHub.playAgainButtonRef.addEventListener("click", restartGame);
ElementHub.tryAgainButtonRef.addEventListener("click", restartGame);


function restartGame() {
    ElementHub.startScreenRef.classList.add("display-none");
    ElementHub.canvas.classList.remove("display-none");
    world = new World(canvas);
}
