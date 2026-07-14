export class SoundHub {
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

    // Spielt eine einzelne Audiodatei ab
    static playOne(sound) {
        sound.volume = 0.2; // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.currentTime = 0; // Startet ab einer bestimmten stelle (0=Anfang/ 5 = 5 sec.)
        sound.play(); // Spielt das übergebene Sound-Objekt ab
    }

    static playOneContinuously(sound) {
        sound.volume = 0.2; // Setzt die Lautstärke auf 0.2 = 20% / 1 = 100%
        sound.play(); // Spielt das übergebene Sound-Objekt ab
    }

    static playOneLoop(sound) {
        sound.loop = true;
        sound.play();
        if (sound === this.BACKGROUND) {
            sound.volume = 0.02;
        } else {
            sound.volume = 0.2;
        }
    }

    static playOneError(sound) {
        setInterval(() => {
            // Wiederholt die Überprüfung alle 200ms
            if (sound.readyState == 4) {
                // Überprüft, ob die Audiodatei vollständig geladen ist, wenn man die if abfrage rausnehmen würde, würde es bei start & drücken auf den pause Knopf einen Fehler werfen. (am besten low-tier throttling nutzen!)
                console.log("Sound ready");
                sound.volume = 0.2; // Setzt die Lautstärke auf 50%
                sound.play(); // Spielt das übergebene Sound-Objekt ab
            } else {
                console.log("Sound not ready");
            }
        }, 200);
    }

    // Pausiert das Abspielen aller Audiodateien
    static pauseAll() {
        SoundHub.ALL_SOUNDS.forEach((sound) => {
            sound.pause(); // Pausiert jedes Audio in der Liste
        });
    }

    // Pausiert das Abspielen einer einzelnen Audiodatei
    static pauseOne(sound) {
        sound.pause(); // Pausiert das übergebene Audio
    }

    // ##########################################################################################################################
    // ################################################  Sound Slider - BONUS !  ################################################
    // Setzt die Lautstärke für alle Audiodateien
    static objSetVolume(sounds) {
        // sounds ist das array: allSounds welches hier als Parameter ankommt
        let volumeValue = document.getElementById("volume").value; // Holt den aktuellen Lautstärkewert aus dem Inputfeld
        sounds.forEach((sound) => {
            sound.volume = volumeValue; // Setzt die Lautstärke für jedes Audio wie im Slider angegeben
        });
    }
}
