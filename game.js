import { World } from "./Scripts/Classes/world.class.js";
import { ElementHub } from "./Scripts/Helpers/element-hub.js";
import { Keyboard } from "./Scripts/Helpers/keyboard.js";
import { SoundHub } from "./Scripts/Helpers/sound-hub.js";
import { initLevel, level1 } from "./Scripts/Levels/level-01.js";

let canvas;
let world;

/**
 * @function
 * Function that initialises the game by hiding the start screen and starting the game
 */
function init() {
    ElementHub.startScreenRef.classList.remove("display-none");
    ElementHub.startButtonRef.addEventListener("click", startGame);
}

window.onload = init;

/**
 * @function
 * Function that starts the game by assigning the location of the canvas html element to the canvas value
 * Calls the initLevel method to updated the content of the level
 * Created a new world based on the World class
 * Show the canvas screen
 * Hides all the other screen in the container (start, won, lost)
 * Initialised the sound setting (mute/unmute)
 * Plays the "start" sound
 */
function startGame() {
    canvas = document.getElementById("canvas");
    initLevel();
    world = new World(canvas);

    showCanvas();
    hideAllScreens();
    SoundHub.initialiseSound();
    SoundHub.playOne(SoundHub.GAME_START);
}

/**
 * @function
 * Reloads the page
 */
function reloadPage() {
    window.location.reload();
}

/**
 * @function
 * Updates the class of the canvas html element to display it
 */
function showCanvas() {
    ElementHub.canvasRef.classList.remove("display-none");
    ElementHub.canvasContainerRef.classList.remove("display-none");
}

/**
 * @function
 * Updates the class of the canvas html element to hide it
 */
function hideCanvas() {
    ElementHub.canvasRef.classList.add("display-none");
    ElementHub.canvasContainerRef.classList.add("display-none");
}

/**
 * @function
 * Updates the classes of the other screens html element to hide them
 */
function hideAllScreens() {
    ElementHub.startScreenRef.classList.add("display-none");
    ElementHub.loserScreenRef.classList.add("display-none");
    ElementHub.winnerScreenRef.classList.add("display-none");
}

/**
 * @function
 * Toggles the sound setting (mute/unmute)
 * Updated the icon that is being shown
 */
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

/**
 * @function
 * Show the container for the impressum by updating the class of the html element
 */
function showImpressum(){
    ElementHub.impressumRef.classList.remove('display-none');
}

/**
 * @function
 * Hides the container for the impressum by updating the class of the html element
 */
function closeImpressum(){
    ElementHub.impressumRef.classList.add('display-none');
}

/**
 * Various event listeners for the page
 */
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