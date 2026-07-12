import { World } from "./Scripts/Classes/world.class.js";

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

    startScreenRef.classList.add("display-none");
    canvasRef.classList.remove("display-none");
}


const playAgainButtonRef = document.getElementById('play-again');
playAgainButtonRef.addEventListener("click", restartGame);

const tryAgainButtonRef = document.getElementById('try-again');
tryAgainButtonRef.addEventListener("click", restartGame);


function restartGame(){
    window.location.reload();
}