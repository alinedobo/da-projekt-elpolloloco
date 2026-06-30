
export class IntervalHub {
    static allIntervals = [];

    // Startet ein neues Intervall und
    // fügt es dem Array allIntervals hinzu
    // All intervals are saved (their ID) in the allIntervals array
    static startInterval(func, timer) {
        const newInterval = setInterval(func, timer);
        IntervalHub.allIntervals.push(newInterval);
    }

    //Stoppt alle registrierten Intervalle und leert die Registry.
    static stopAllIntervals() {
        console.log(IntervalHub.allIntervals.length);
        IntervalHub.allIntervals.forEach(clearInterval);
        IntervalHub.allIntervals = [];
    }
}
