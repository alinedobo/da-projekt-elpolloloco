export class Keyboard {
    static KEY_LEFT = false;
    static KEY_RIGHT = false;
    static KEY_UP = false;
    static KEY_DOWN = false;
    static KEY_SPACE = false;
}

// https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript


document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            Keyboard.KEY_LEFT = true;
            break;
        case "ArrowUp":
            Keyboard.KEY_UP = true;
            break;
        case "ArrowRight":
            Keyboard.KEY_RIGHT = true;
            break;
        case "ArrowDown":
            Keyboard.KEY_DOWN = true;
            break;
        case " ":
            Keyboard.KEY_SPACE = true;
            break;
        default:
            // Ignore other keys
            return;
    }
    event.preventDefault();
});


document.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            Keyboard.KEY_LEFT = false;
            break;
        case "ArrowUp":
            Keyboard.KEY_UP = false;
            break;
        case "ArrowRight":
            Keyboard.KEY_RIGHT = false;
            break;
        case "ArrowDown":
            Keyboard.KEY_DOWN = false;
            break;
        case " ":
            Keyboard.KEY_SPACE = false;
            break;
        default:
            // Ignore other keys
            return;
    }
    event.preventDefault();
});
