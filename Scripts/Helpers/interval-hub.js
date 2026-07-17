
/**
 * @class
 * Helper class that helps managing all the intervals in the game
 * 
 */
export class IntervalHub {
    //#region Properties
    static allIntervals = [];
    //#endregion

    //#region Methods
    /**
     * Method that starts a new interval and adds it to the allIntervals array
     * All intervals are saved (their ID) in the allIntervals array
     * @param {function} func - function to which the interval is applied
     * @param {number} timer - frequency at which the interval is being run
     */
    static startInterval(func, timer) {
        const newInterval = setInterval(func, timer);
        IntervalHub.allIntervals.push(newInterval);
    }

    /**
     * Method that stops all interval in the allIntervals array at once and clears the array
     */
    static stopAllIntervals() {
        IntervalHub.allIntervals.forEach(clearInterval);
        IntervalHub.allIntervals = [];
    }
    //#endregion
}
