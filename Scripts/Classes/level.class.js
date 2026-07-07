export class Level {
    enemyBabies;
    enemies;
    endBosses;
    clouds;
    backgroundObjects;
    coins;
    collectableBottles;
    level_end_x = 3000;

    constructor(
        enemyBabies,
        enemies,
        endBosses,
        clouds,
        backgroundObjects,
        coins,
        collectableBottles,
    ) {
        this.enemyBabies = enemyBabies;
        this.enemies = enemies;
        this.endBosses = endBosses;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.collectableBottles = collectableBottles;
    }
}
