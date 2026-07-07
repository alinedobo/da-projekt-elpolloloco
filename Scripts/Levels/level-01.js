import { BackgroundObject } from "../Classes/background-object.class.js";
import { Clouds } from "../Classes/clouds.class.js";
import { Coin } from "../Classes/coin.class.js";
import { CollectableBottle } from "../Classes/collectable-bottle.class.js";
import { Endboss } from "../Classes/endboss.class.js";
import { EnemyBaby } from "../Classes/enemy-baby.class.js";
import { Enemy } from "../Classes/enemy.class.js";
import { Level } from "../Classes/level.class.js";
CollectableBottle

export const level1 = new Level(
    [
        new EnemyBaby(),
        new EnemyBaby(),
        new EnemyBaby(),
        new EnemyBaby(),
        new EnemyBaby(),
        new EnemyBaby(),
        new EnemyBaby(),
        new EnemyBaby(),
    ],
    [
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ],

    [new Endboss()],

    [new Clouds()],

    [
        new BackgroundObject("./Assets/img/5_background/layers/air.png", -719),
        new BackgroundObject(
            "./Assets/img/5_background/layers/3_third_layer/2.png",
            -719,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/2_second_layer/2.png",
            -719,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/1_first_layer/2.png",
            -719,
        ),
        new BackgroundObject("./Assets/img/5_background/layers/air.png", 0),
        new BackgroundObject(
            "./Assets/img/5_background/layers/3_third_layer/1.png",
            0,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/2_second_layer/1.png",
            0,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/1_first_layer/1.png",
            0,
        ),

        new BackgroundObject("./Assets/img/5_background/layers/air.png", 720),
        new BackgroundObject(
            "./Assets/img/5_background/layers/3_third_layer/2.png",
            720,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/2_second_layer/2.png",
            720,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/1_first_layer/2.png",
            720,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/air.png",
            720 * 2,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/3_third_layer/1.png",
            720 * 2,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/2_second_layer/1.png",
            720 * 2,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/1_first_layer/1.png",
            720 * 2,
        ),

        new BackgroundObject(
            "./Assets/img/5_background/layers/air.png",
            720 * 3,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/3_third_layer/2.png",
            720 * 3,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/2_second_layer/2.png",
            720 * 3,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/1_first_layer/2.png",
            720 * 3,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/air.png",
            720 * 4,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/3_third_layer/1.png",
            720 * 4,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/2_second_layer/1.png",
            720 * 4,
        ),
        new BackgroundObject(
            "./Assets/img/5_background/layers/1_first_layer/1.png",
            720 * 4,
        ),
    ],

    [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
    ],

    [new CollectableBottle(), new CollectableBottle(), new CollectableBottle(), new CollectableBottle(), new CollectableBottle()],
);
