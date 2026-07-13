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

export class World {
    //#region Properties
    character = new Character();
    level = level1;
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

    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        IntervalHub.startInterval(this.checkThrowBottle, 50);
        IntervalHub.startInterval(this.checkGameLost, 50);
        IntervalHub.startInterval(this.checkGameWon, 50);
        SoundHub.playOne(SoundHub.GAME_START);
    }

    //#region Methods
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.level.backgroundObjects);
        this.addObjectToMap(this.level.clouds);
        this.addToMap(this.character);
        this.addObjectToMap(this.level.enemyBabies);
        this.addObjectToMap(this.level.enemies);
        this.addObjectToMap(this.level.endBosses);
        this.addObjectToMap(this.level.coins);
        this.addObjectToMap(this.level.collectableBottles);
        this.addObjectToMap(this.throwableBottles);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.healthBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.endbossHealthBar);

        requestAnimationFrame(() => this.draw()); //repeat the redraw of the canvas based on graphics card ability
    }

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

    addObjectToMap(objects) {
        objects.forEach((o) => {
            this.addToMap(o);
        });
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.position_x = mo.position_x * -1;
    }

    flipImageBack(mo) {
        mo.position_x = mo.position_x * -1;
        this.ctx.restore();
    }

    setWorld() {
        this.character.world = this;
        // Everything that gets created, get created in the world, so the world has access to everyting
        // The character is in the world, and only sees itself in the world
        // If we want to character t have access to the world (i.e. the camera showing the world), we need to give it access to said world
        // this method says: "this character's world (property 'world') is this world (this instance of the class World)"
        // meaning the character has now access to everyhting in the world
/*         this.level.enemies.forEach((enemy) => {
            enemy.world = this;
        });
        this.level.enemyBabies.forEach((enemy) => {
            enemy.world = this;
        });
        this.level.endBosses.forEach((enemy) => {
            enemy.world = this;
        }); */
    }

    checkCollisions() {
        IntervalHub.startInterval(this.checkCollisionWithBabyEnemy, 50);
        IntervalHub.startInterval(this.checkCollisionWithEnemy, 50);
        IntervalHub.startInterval(this.checkCollisionWithEndboss, 50);
        IntervalHub.startInterval(this.checkCollisionWithBottle, 50);
        IntervalHub.startInterval(this.checkCollisionWithCoin, 50);
        IntervalHub.startInterval(this.checkBottleCollisionWithEnemies, 50);
    }

    checkCollisionWithBabyEnemy = () => {
        this.level.enemyBabies.forEach((enemy) => {
            if (this.character.isCollidingFromAbove(enemy)) {
                enemy.energy = 0;
            } else if (this.character.isColliding(enemy)) {
                this.character.isHit(1);
                SoundHub.playOne(this.character.hitSound);
                this.healthBar.showPercentageStatusBar(this.character.energy);
            }
        });
    };

    checkCollisionWithEnemy = () => {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isCollidingFromAbove(enemy)) {
                enemy.energy = 0;
                SoundHub.playOne(enemy.dyingSound);
            } else if (this.character.isColliding(enemy)) {
                this.character.isHit(1);
                this.healthBar.showPercentageStatusBar(this.character.energy);
            }
        });
    };

    checkCollisionWithEndboss = () => {
        this.level.endBosses.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.isHit(5);
                this.healthBar.showPercentageStatusBar(this.character.energy);
            }
        });
    };

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

    checkBottleCollisionWithEnemies = () => {
        this.throwableBottles.forEach((bottle, i) => {
            this.level.enemyBabies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    this.throwableBottles.splice(i, 1);
                    SoundHub.playOne(SoundHub.BOTTLE_THROW);
                    enemy.isHit(20);
                    SoundHub.playOne(enemy.dyingSound);
                }
            });

            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle, i)) {
                    this.throwableBottles.splice(i, 1);
                    SoundHub.playOne(SoundHub.BOTTLE_THROW);
                    enemy.isHit(20);
                    SoundHub.playOne(enemy.dyingSound);
                }
            });

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

    checkThrowingDelay() {
        let currentTime = new Date().getTime();
        let timePassedSinceLastThrow = (currentTime - this.lastThrow) / 1000;
        return timePassedSinceLastThrow > 0.75;
    }

    updateBottleStatusBar() {
        let percentage = (this.collectedBottles / this.totalBottles) * 100;
        this.bottleBar.showPercentageStatusBar(percentage);
    }

    checkGameLost = () => {
        if (this.character.isDead() && this.character.checkIfDeadLongEnough()) {
            IntervalHub.stopAllIntervals();
            SoundHub.pauseAll();

            ElementHub.canvasRef.classList.add("display-none");
            ElementHub.loserScreenRef.classList.remove("display-none");
        }
    };

    checkGameWon = () => {
        this.level.endBosses.forEach((enemy) => {
            if (enemy.isDead() && enemy.checkIfDeadLongEnough()) {
                IntervalHub.stopAllIntervals();
                SoundHub.pauseAll();

                ElementHub.canvasRef.classList.add("display-none");
                ElementHub.winnerScreenRef.classList.remove("display-none");
            }
        });
    };

    //#endregion
}
