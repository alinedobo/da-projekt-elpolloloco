export class Level {
    enemies;
    enemyBabies;
    clouds;
    backgroundObjects;
    throwableObjects;
    level_end_x = 2200;

    constructor(
        enemies,
        clouds,
        backgroundObjects,
        throwableObjects,
        enemyBabies,
    ) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.throwableObjects = throwableObjects;
        this.enemyBabies = enemyBabies;
    }
}
