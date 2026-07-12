import { World } from "./Scripts/Classes/world.class.js";

let canvas;
let world;

const startScreenRef = document.getElementById("start-screen");
const canvasRef = document.getElementById("canvas");
const startButtonRef = document.getElementById("start-button");


function init() {
    canvas = document.getElementById("canvas");
    world = new World(canvas);
    canvasRef.classList.add("display-none");

    startScreenRef.classList.remove("display-none");
    startButtonRef.addEventListener("click", startGame);
}

window.onload = init;

function startGame() {
    startScreenRef.classList.add("display-none");
    canvasRef.classList.remove("display-none");
}