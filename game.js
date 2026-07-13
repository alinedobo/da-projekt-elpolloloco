import { World } from "./Scripts/Classes/world.class.js";
import { ElementHub } from "./Scripts/Helpers/element-hub.js";
import { initLevel, level1 } from "./Scripts/Levels/level-01.js";


let canvas;
let world;

function init() {
    ElementHub.startScreenRef.classList.remove("display-none");
    ElementHub.startButtonRef.addEventListener("click", startGame);
}

window.onload = init;

function startGame() {
    canvas = document.getElementById("canvas");
    initLevel();
    world = new World(canvas);

    showCanvas();
    hideAllScreens();
}

ElementHub.playAgainButtonRef.addEventListener("click", startGame);
ElementHub.tryAgainButtonRef.addEventListener("click", startGame);

function showCanvas(){
    ElementHub.canvasRef.classList.remove("display-none");
}

function hideAllScreens() {
    ElementHub.startScreenRef.classList.add("display-none");
    ElementHub.loserScreenRef.classList.add("display-none");
    ElementHub.winnerScreenRef.classList.add("display-none");
}
