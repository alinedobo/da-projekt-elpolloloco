import { World } from "./Scripts/Classes/world.class.js";
import { ElementHub } from "./Scripts/Helpers/element-hub.js";
import { Keyboard } from "./Scripts/Helpers/keyboard.js";
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
    SoundHub.initialiseSound();
    SoundHub.playOne(SoundHub.GAME_START);
}

ElementHub.playAgainButtonRef.addEventListener("click", startGame);
ElementHub.tryAgainButtonRef.addEventListener("click", startGame);
ElementHub.muteButtonRef.addEventListener("click", toggleSound);
ElementHub.unmuteButtonRef.addEventListener("click", toggleSound);
ElementHub.homePageRef.addEventListener("click", reloadPage);
ElementHub.impressumOpenButtonRespRef.addEventListener("click", showImpressum);
ElementHub.impressumCloseButtonRef.addEventListener('click', closeImpressum);


ElementHub.moveLeftRef.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Keyboard.KEY_LEFT = true;
});

ElementHub.moveLeftRef.addEventListener("touchend", (e) => {
    e.preventDefault();
    Keyboard.KEY_LEFT = false;
});

ElementHub.moveRightRef.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Keyboard.KEY_RIGHT = true;
});

ElementHub.moveRightRef.addEventListener("touchend", (e) => {
    e.preventDefault();
    Keyboard.KEY_RIGHT = false;
});

ElementHub.jumpRef.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Keyboard.KEY_SPACE = true;
});

ElementHub.jumpRef.addEventListener("touchend", (e) => {
    e.preventDefault();
    Keyboard.KEY_SPACE = false;
});

ElementHub.throwBottleRef.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Keyboard.KEY_D = true;
});

ElementHub.throwBottleRef.addEventListener("touchend", (e) => {
    e.preventDefault();
    Keyboard.KEY_D = false;
});

ElementHub.muteButtonRef.addEventListener("touchend", (e) => {
    e.preventDefault();
    toggleSound();
});

ElementHub.unmuteButtonRef.addEventListener("touchend", (e) => {
    e.preventDefault();
    toggleSound();
});

function reloadPage() {
    window.location.reload();
}

function showCanvas() {
    ElementHub.canvasRef.classList.remove("display-none");
    ElementHub.canvasContainerRef.classList.remove("display-none");
}

function hideCanvas() {
    ElementHub.canvasRef.classList.add("display-none");
    ElementHub.canvasContainerRef.classList.add("display-none");
}

function hideAllScreens() {
    ElementHub.startScreenRef.classList.add("display-none");
    ElementHub.loserScreenRef.classList.add("display-none");
    ElementHub.winnerScreenRef.classList.add("display-none");
}

function toggleSound() {
    SoundHub.toogleSoundSetting();
    if (SoundHub.SOUND_MUTED) {
        ElementHub.muteButtonRef.classList.add("display-none");
        ElementHub.unmuteButtonRef.classList.remove("display-none");
    } else {
        ElementHub.muteButtonRef.classList.remove("display-none");
        ElementHub.unmuteButtonRef.classList.add("display-none");
    }
}

function showImpressum(){
    ElementHub.impressumRef.classList.remove('display-none');
}

function closeImpressum(){
    ElementHub.impressumRef.classList.add('display-none');
}