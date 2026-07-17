
/**
 * @class
 * Defines what objects are contained in the level and where the level ends
 */
export class Level {
    //#region Properties
    enemyBabies;
    enemies;
    endBosses;
    clouds;
    backgroundObjects;
    coins;
    collectableBottles;
    level_end_x = 2900;
    //#endregion

    //#region Constructor
    /**
     * 
     * @param {array} enemyBabies - smallest enemies the character has to defeat
     * @param {array} enemies - enemies the character has to defeat
     * @param {array} endBosses - endboss enemy the character has to defeat
     * @param {array} clouds - backgound clouds
     * @param {array} backgroundObjects - background images
     * @param {array} coins - collectable item
     * @param {array} collectableBottles - collectable item
     */
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
    //#endregion
}
