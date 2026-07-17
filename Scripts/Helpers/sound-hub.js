import { ElementHub } from "./element-hub.js";

/**
 * @class
 * Helper class that stores all the path for the various sounds as global variables so they can easily be called anywhere in the code
 */
export class SoundHub {
    //#region Properties
    static PEPE_DAMAGE = new Audio(
        "./Assets/sounds/sounds/character/characterDamage.mp3",
    );
    static PEPE_DEAD = new Audio(
        "./Assets/sounds/sounds/character/characterDead.wav",
    );
    static PEPE_JUMP = new Audio(
        "./Assets/sounds/sounds/character/characterJump.wav",
    );
    static PEPE_RUN = new Audio(
        "./Assets/sounds/sounds/character/characterRun.mp3",
    );
    static PEPE_SNORING = new Audio(
        "./Assets/sounds/sounds/character/characterSnoring.mp3",
    );
    static CHICKEN_DEAD = new Audio(
        "./Assets/sounds/sounds/chicken/chickenDead.mp3",
    );
    static CHICK_DEAD = new Audio(
        "./Assets/sounds/sounds/chicken/chickenDead2.mp3",
    );
    static ENDBOSS_APPROACH = new Audio(
        "./Assets/sounds/sounds/endboss/endbossApproach.wav",
    );
    static BOTTLE_COLLECT = new Audio(
        "./Assets/sounds/sounds/collectibles/bottleCollectSound.wav",
    );
    static BOTTLE_THROW = new Audio(
        "./Assets/sounds/sounds/throwable/bottleBreak.mp3",
    );
    static COIN_COLLECT = new Audio(
        "./Assets/sounds/sounds/collectibles/collectSound.wav",
    );
    static GAME_START = new Audio("./Assets/sounds/sounds/game/gameStart.mp3");
    static BACKGROUND = new Audio(
        "./Assets/sounds/sounds/background/chickenDance.mp3",
    );
    static ALL_SOUNDS = [
        SoundHub.PEPE_DAMAGE,
        SoundHub.PEPE_DEAD,
        SoundHub.PEPE_JUMP,
        SoundHub.PEPE_RUN,
        SoundHub.PEPE_SNORING,
        SoundHub.CHICKEN_DEAD,
        SoundHub.CHICK_DEAD,
        SoundHub.ENDBOSS_APPROACH,
        SoundHub.BOTTLE_COLLECT,
        SoundHub.BOTTLE_THROW,
        SoundHub.COIN_COLLECT,
        SoundHub.GAME_START,
        SoundHub.BACKGROUND,
    ];
    static VOLUME;
    static SOUND_MUTED;
    //#endregion

    //#region Methods
    /**
     * Method that gets the value of the variable that says tells us if the sound is muted from the local storage if there's a value stored
     * @returns {boolean}
     */
    static getSoundSettingFromLocalStorage() {
        let StoredSoundSetting = localStorage.getItem("soundSetting");

        if (StoredSoundSetting !== null) {
            SoundHub.SOUND_MUTED = JSON.parse(StoredSoundSetting);
        }
        return SoundHub.SOUND_MUTED;
    }

    /**
     * Method that initalised the sound setting based on what's in the local storage
     * Depending on what is stored in the local storage (if at all), the sounds are either played or muted when the game is started
     * Depending on what is stored in the local storage (if at all), the correct icons for the sound is displayed, the other hidden
     */
    static initialiseSound() {
        SoundHub.getSoundSettingFromLocalStorage();
        if (SoundHub.SOUND_MUTED) {
            SoundHub.ALL_SOUNDS.forEach((sound) => {
                sound.muted = true;
                ElementHub.muteButtonRef.classList.add("display-none");
                ElementHub.unmuteButtonRef.classList.remove("display-none");
            });
        } else if (!SoundHub.SOUND_MUTED) {
            SoundHub.ALL_SOUNDS.forEach((sound) => {
                sound.muted = false;
                ElementHub.muteButtonRef.classList.remove("display-none");
                ElementHub.unmuteButtonRef.classList.add("display-none");
            });
        }
    }

    /**
     * Method that toggle the sound setting value from mute/unmute based on the initial status
     * The current value is updated in the local storage
     */
    static toogleSoundSetting() {
        if (SoundHub.SOUND_MUTED) {
            SoundHub.ALL_SOUNDS.forEach((sound) => {
                sound.muted = false;
            });
            SoundHub.SOUND_MUTED = false;
            SoundHub.saveSoundSettingToLocalStorage();
        } else if (!SoundHub.SOUND_MUTED) {
            SoundHub.ALL_SOUNDS.forEach((sound) => {
                sound.muted = true;
            });
            SoundHub.SOUND_MUTED = true;
            SoundHub.saveSoundSettingToLocalStorage();
        }
    }

    /**
     * Method that saves the value of the sound setting (mute or unmute) in the local storage
     */
    static saveSoundSettingToLocalStorage() {
        localStorage.setItem(
            "soundSetting",
            JSON.stringify(SoundHub.SOUND_MUTED),
        );
    }

    /**
     * Plays one sound based on the path
     * @param {string} sound - relative path to the sound
     * currentTime defines where the sound is started (0= start/ 5 = 5 sec.)
     * volume defines the volume at which the sound is played (0.2 = 20% / 1 = 100%)
     */
    static playOne(sound) {
        sound.volume = this.VOLUME * 0.5;
        sound.currentTime = 0;
        sound.play();
    }

    /**
     * Plays one sound based on the path
     * @param {string} sound - relative path to the sound
     * same as playOne method except that the start time is removed for continuous play
     */
    static playOneContinuously(sound) {
        sound.volume = 0.3;
        sound.play();
    }

    /**
     * Plays one sound on a loop based on the path
     * @param {string} sound - relative path to the sound
     * For the background music, the volume is set lower
     */
    static playOneLoop(sound) {
        sound.loop = true;
        sound.play();
        if (sound === this.BACKGROUND) {
            sound.volume = this.VOLUME * 0.1;
        } else {
            sound.volume = this.VOLUME * 0.5;
        }
    }

    /**
     * Method that pauses all sounds at once with a for each loop that goes through every sound in the allSounds array
     */
    static pauseAll() {
        SoundHub.ALL_SOUNDS.forEach((sound) => {
            sound.pause();
        });
    }

    /**
     * Method that pauses one specific sound based on its path
     * @param {string} sound - relative path to the sound
     */
    static pauseOne(sound) {
        sound.pause();
    }
    //#endregion
}
