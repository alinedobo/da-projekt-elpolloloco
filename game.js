import { World } from "./Scripts/Classes/world.class.js";
import { ElementHub } from "./Scripts/Helpers/element-hub.js";
import { SoundHub } from "./Scripts/Helpers/sound-hub.js";
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
    SoundHub.playOne(SoundHub.GAME_START);
}

ElementHub.playAgainButtonRef.addEventListener("click", startGame);
ElementHub.tryAgainButtonRef.addEventListener("click", startGame);
ElementHub.muteButtonRef.addEventListener("click", muteSound);
ElementHub.unmuteButtonRef.addEventListener("click", unmuteSound);


function showCanvas(){
    ElementHub.canvasRef.classList.remove("display-none");
    ElementHub.canvasContainerRef.classList.remove("display-none");
}

function hideCanvas(){
    ElementHub.canvasRef.classList.add("display-none");
    ElementHub.canvasContainerRef.classList.add("display-none");
}

function hideAllScreens() {
    ElementHub.startScreenRef.classList.add("display-none");
    ElementHub.loserScreenRef.classList.add("display-none");
    ElementHub.winnerScreenRef.classList.add("display-none");
}


function muteSound(){
    SoundHub.muteAllSounds();
    ElementHub.muteButtonRef.classList.add("display-none");
    ElementHub.unmuteButtonRef.classList.remove("display-none");
}

function unmuteSound(){
    SoundHub.unmuteAllSounds();
    ElementHub.muteButtonRef.classList.remove("display-none");
    ElementHub.unmuteButtonRef.classList.add("display-none");
}