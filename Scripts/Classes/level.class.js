export class Level {
    enemies;
    enemyBabies;
    clouds;
    backgroundObjects;
    throwableObjects;
    collectableObjects;
    level_end_x = 3000;

    constructor(
        enemies,
        clouds,
        backgroundObjects,
        throwableObjects,
        collectableObjects
    ) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.throwableObjects = throwableObjects;
        this.collectableObjects = collectableObjects;
    }
}
