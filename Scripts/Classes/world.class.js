import { ElementHub } from "../Helpers/element-hub.js";
import { ImageHub } from "../Helpers/image-hub.js";
import { IntervalHub } from "../Helpers/interval-hub.js";
import { Keyboard } from "../Helpers/keyboard.js";
import { SoundHub } from "../Helpers/sound-hub.js";
import { level1 } from "../Levels/level-01.js";
import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Clouds } from "./clouds.class.js";
import { CollectableBottle } from "./collectable-bottle.class.js";
import { Endboss } from "./endboss.class.js";
import { EnemyBaby } from "./enemy-baby.class.js";
import { Enemy } from "./enemy.class.js";
import { Level } from "./level.class.js";
import {
    CoinBar,
    HealthBar,
    StatusBar,
    BottleBar,
    EndbossHealthBar,
} from "./status-bar.class.js";
import { ThrowableBottle } from "./throwable-bottle.class.js";

/**
 * @class
 * Class that builds the world in which the game takes place
 */
export class World {
    //#region Properties
    character = new Character();
    level;
    ctx;
    canvas;
    camera_x = 0;
    healthBar = new HealthBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossHealthBar = new EndbossHealthBar();
    collectedBottles = 0;
    totalBottles = 5;
    collectedCoins = 0;
    totalCoins = 10;
    throwableBottles = [];
    lastThrow = 0;
    //#endregion

    //#region Constructor
    /**
     * Created the world one method at a time
     * Set sound volume
     * Defines what the level should include
     * Calls the canvas
     * Calls the Draw method to draw the various game elements in the canvas
     * Calls the setWorld method that gives the Character class access to the variables in the World class
     * Calls the checkCollisions method
     * Starts interval to check bottle collisions
     * Starts 2 intervals to check to if the game has been lost or won
     * Start the background music
     * @param {HTMLCanvasElement} canvas - the canvas in which the world if being created
     */
    constructor(canvas) {
        SoundHub.VOLUME = 1;
        this.level = level1;
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        IntervalHub.startInterval(this.checkThrowBottle, 50);
        IntervalHub.startInterval(this.checkGameLost, 50);
        IntervalHub.startInterval(this.checkGameWon, 50);
        SoundHub.playOneLoop(SoundHub.BACKGROUND);
    }
    //#endregion

    //#region Methods
    /**
     * Method that draws the element into the canvas
     * Creates the canvas frame
     * Defines the X position that the camera will follow
     * Adds the various objects to the map
     * Adds the status bars to the map
     * Calls the requestionAnimationFrame method and tells it to repeat the redraw of the canvas based on graphics card ability with () => this.draw()
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsAndCharacterToMap();
        this.ctx.translate(-this.camera_x, 0);
        this.addStatusBarsToMap();
        requestAnimationFrame(() => this.draw());
    }

    /**
     * Calls the addObjectToMap method for each background and moveable object that needs to be added to the game
     */
    addObjectsAndCharacterToMap() {
        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemyBabies);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endBosses);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.collectableBottles);
        this.addObjectToMap(this.throwableBottles);
    }

    /**
     * Calls the addToMap method for each status bar that needs to be added to the game
     */
    addStatusBarsToMap() {
        this.addToMap(this.healthBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.endbossHealthBar);
    }

    /**
     * Method that adds the movable object to the map by calling the draw method
     * Check the direction of the movable object to define the draw direction
     * @param {*} mo
     */
    addToMap(mo) {
        if (mo.reverseDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.reverseDirection) {
            this.flipImageBack(mo);
        }
        mo.drawFrame(this.ctx);
    }

    /**
     * Method that adds individual objects in an array to the map by looping the addToMap method through the array
     * @param {array} objects - array of objects
     */
    addObjectToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }

    /**
     * Method that mirrors the image of the movable object
     * @param {*} mo - movable object
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.position_x = mo.position_x * -1;
    }

    /**
     * Method that mirrors the image of the movable object to flip it back to the original orientation
     * @param {*} mo - movable object
     */
    flipImageBack(mo) {
        mo.position_x = mo.position_x * -1;
        this.ctx.restore();
    }

    /**
     * Method that "gives the world to the character"
     * Everything that gets created, get created in the world, so the world has access to everyting
     * The character is in the world, and only sees itself in the world
     * If we want to character t have access to the world (i.e. the camera showing the world), we need to give it access to said world
     * his method says: "this character's world (property 'world') is this world (this instance of the class World)" meaning the character has now access to everyhting in the world
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Method that starts an interval for each checkCollision method
     */
    checkCollisions() {
        IntervalHub.startInterval(this.checkCollisionWithBabyEnemy, 10);
        IntervalHub.startInterval(this.checkCollisionWithEnemy, 10);
        IntervalHub.startInterval(this.checkCollisionWithEndboss, 10);
        IntervalHub.startInterval(this.checkCollisionWithBottle, 10);
        IntervalHub.startInterval(this.checkCollisionWithCoin, 10);
        IntervalHub.startInterval(this.checkBottleCollisionWithEnemies, 5);
        IntervalHub.startInterval(this.checkBottleCollisionWithBabyEnemies, 5);
        IntervalHub.startInterval(this.checkBottleCollisionWithEndboss, 5);
    }

    /**
     * Methods that check if the character is colliding with the small enemies
     * For each enemy it calls the isCollidingFromAbove method to check if the character is above the enemy
     * For each enemy it calls the isAboveGround method to check if the character is above the ground and falling (Y under 0)
     * If there is collision from above the enemy dies
     * If there is collision from the sides the character gets damage and the damage value is passed to the hit method
     * The relevant sound is played according to the case
     * The energy bar of the character is updated accoridng to the case
     */
    checkCollisionWithBabyEnemy = () => {
        this.level.enemyBabies.forEach((enemy) => {
            if (
                this.character.isCollidingFromAbove(enemy) &&
                this.character.isAboveGround() &&
                this.character.speed_Y < 0
            ) {
                enemy.energy = 0;
                SoundHub.playOne(enemy.dyingSound);
            } else if (this.character.isColliding(enemy)) {
                this.character.isHit(0.25);
                SoundHub.playOne(this.character.hitSound);
                this.healthBar.showPercentageStatusBar(this.character.energy);
            }
        });
    };

    /**
     * Methods that check if the character is colliding with the enemies
     * For each enemy it calls the isCollidingFromAbove method to check if the character is above the enemy
     * For each enemy it calls the isAboveGround method to check if the character is above the ground and falling (Y under 0)
     * If there is collision from above the enemy dies
     * If there is collision from the sides the character gets damage and the damage value is passed to the hit method
     * The relevant sound is played according to the case
     * The energy bar of the character is updated accoridng to the case
     */
    checkCollisionWithEnemy = () => {
        this.level.enemies.forEach((enemy) => {
            if (
                this.character.isCollidingFromAbove(enemy) &&
                this.character.isAboveGround() &&
                this.character.speed_Y < 0
            ) {
                enemy.energy = 0;
                SoundHub.playOne(enemy.dyingSound);
            } else if (this.character.isColliding(enemy)) {
                this.character.isHit(0.5);
                this.healthBar.showPercentageStatusBar(this.character.energy);
            }
        });
    };

    /**
     * Methods that check if the character is colliding with the enemies
     * If there is collisionthe character gets damage and the damage value is passed to the hit method
     * The relevant sound is played according to the case
     * The energy bar of the character is updated accoridng to the case
     */
    checkCollisionWithEndboss = () => {
        this.level.endBosses.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.isHit(0.75);
                this.healthBar.showPercentageStatusBar(this.character.energy);
            }
        });
    };

    /**
     * Method check if there is a collision between the character and a bottle on the ground
     * If there is collision, that specific bottle is removed from the game and the bottle counter goes up by one
     * The collected bottle status bar is updated and a sound is played to signify collection
     */
    checkCollisionWithBottle = () => {
        for (let i = 0; i < this.level.collectableBottles.length; i++) {
            let bottle = this.level.collectableBottles[i];

            if (this.character.isColliding(bottle)) {
                this.level.collectableBottles.splice(i, 1);
                this.collectedBottles++;
                this.updateBottleStatusBar();
                SoundHub.playOne(SoundHub.BOTTLE_COLLECT);
            }
        }
    };

    /**
     * Method check if there is a collision between the character and a coin in the air
     * If there is collision, that specific soin is removed from the game and the coin counter goes up by one
     * The collected soin status bar is updated and a sound is played to signify collection
     */
    checkCollisionWithCoin = () => {
        for (let i = 0; i < this.level.coins.length; i++) {
            let coin = this.level.coins[i];

            if (this.character.isColliding(coin)) {
                this.level.coins.splice(i, 1);
                this.collectedCoins++;
                SoundHub.playOne(SoundHub.COIN_COLLECT);

                let percentage =
                    ((this.collectedCoins - 1) / this.totalCoins) * 100;
                this.coinBar.showPercentageStatusBar(percentage);
            }
        }
    };

    /**
     * Method that checks if a thrown bottle is colliding with an enemy
     * If there is collision, that specific enemy gets hit with 20 points damage and that specific bottle is removed from the bottle inventory
     * A sound is played the signify the bottle breaking
     * Another sound is played to signify enemy damage - sound is sepcific to enemy type
     */
    checkBottleCollisionWithBabyEnemies = () => {
        this.throwableBottles.forEach((bottle, i) => {
            this.level.enemyBabies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    this.throwableBottles.splice(i, 1);
                    SoundHub.playOne(SoundHub.BOTTLE_THROW);
                    enemy.isHit(20);
                    SoundHub.playOne(enemy.dyingSound);
                }
            });
        });
    };

    /**
     * Method that checks if a thrown bottle is colliding with an enemy
     * If there is collision, that specific enemy gets hit with 20 points damage and that specific bottle is removed from the bottle inventory
     * A sound is played the signify the bottle breaking
     * Another sound is played to signify enemy damage - sound is sepcific to enemy type
     */
    checkBottleCollisionWithEnemies = () => {
        this.throwableBottles.forEach((bottle, i) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle, i)) {
                    this.throwableBottles.splice(i, 1);
                    SoundHub.playOne(SoundHub.BOTTLE_THROW);
                    enemy.isHit(20);
                    SoundHub.playOne(enemy.hitSound);
                }
            });
        });
    };

    /**
     * Method that checks if a thrown bottle is colliding with an enemy
     * If there is collision, that specific enemy gets hit with 20 points damage and that specific bottle is removed from the bottle inventory
     * A sound is played the signify the bottle breaking
     * Another sound is played to signify enemy damage - sound is sepcific to enemy type
     * Additionally, for the endboss the health bar gets updated
     */
    checkBottleCollisionWithEndboss = () => {
        this.throwableBottles.forEach((bottle, i) => {
            this.level.endBosses.forEach((enemy) => {
                if (enemy.isColliding(bottle, i)) {
                    this.throwableBottles.splice(i, 1);
                    SoundHub.playOne(SoundHub.BOTTLE_THROW);
                    enemy.isHit(20);
                    SoundHub.playOne(enemy.dyingSound);
                    this.endbossHealthBar.showPercentageStatusBar(enemy.energy);
                }
            });
        });
    };

    /**
     * Method that check if the key D is being pressed based on the boolean from the eventlistener in the keybord class
     * If the key D is pressed, a bottle is thrown from the position of the top right corner of the character
     * The thrown bottle is added to the throw bottle array
     * To prevent constant throwing when D is pressed, a delay is built
     * The collected bottle counter is reduced by one
     * The time of the throw is timestamped (for the delay)
     */
    checkThrowBottle = () => {
        if (
            Keyboard.KEY_D &&
            this.collectedBottles > 0 &&
            this.checkThrowingDelay()
        ) {
            let bottle = new ThrowableBottle(
                this.character.position_x + 100,
                this.character.position_y + 100,
            );
            this.throwableBottles.push(bottle);

            this.collectedBottles--;
            this.updateBottleStatusBar();
            this.lastThrow = new Date().getTime();
        }
    };

    /**
     * Method that checks if the duration between current timestamp and the timestamp of the last bottle throw is more than 75% of a second
     * Returns true or false
     * @returns {boolean}
     */
    checkThrowingDelay() {
        let currentTime = new Date().getTime();
        let timePassedSinceLastThrow = (currentTime - this.lastThrow) / 1000;
        return timePassedSinceLastThrow > 0.75;
    }

    /**
     * Method that updates the status bar by calculating the number of collected bottles in the inventory and passing that percentage to the showPercentageStatusBar method
     */
    updateBottleStatusBar() {
        let percentage = (this.collectedBottles / this.totalBottles) * 100;
        this.bottleBar.showPercentageStatusBar(percentage);
    }

    /**
     * Method that check if the game is lost
     * The game is lost when the character has been dead for long enough (3 seconds)
     * Dying sound is played for the character
     * All intervals are stopped
     * Background music is stopped
     * Canvas is hidden and instead losing screen is displayed
     */
    checkGameLost = () => {
        if (this.character.isDead() && this.character.checkIfDeadLongEnough()) {
            IntervalHub.stopAllIntervals();

            SoundHub.playOne(SoundHub.PEPE_DEAD);
            SoundHub.pauseOne(SoundHub.BACKGROUND);

            ElementHub.canvasRef.classList.add("display-none");
            ElementHub.canvasContainerRef.classList.add("display-none");
            ElementHub.loserScreenRef.classList.remove("display-none");
        }
    };

    /**
     * Method that check if the game is lost
     * The game is lost when each endboss has been dead for long enough (3 seconds) - in level 1 there is only one
     * Winning ding is played for the character
     * All intervals are stopped
     * Background music is stopped
     * Canvas is hidden and instead winning screen is displayed
     */
    checkGameWon = () => {
        this.level.endBosses.forEach((enemy) => {
            if (enemy.isDead() && enemy.checkIfDeadLongEnough()) {
                IntervalHub.stopAllIntervals();

                SoundHub.playOne(SoundHub.GAME_START);
                SoundHub.pauseOne(SoundHub.BACKGROUND);

                ElementHub.canvasRef.classList.add("display-none");
                ElementHub.canvasContainerRef.classList.add("display-none");
                ElementHub.winnerScreenRef.classList.remove("display-none");
            }
        });
    };
    //#endregion
}
