function solve(steps, lengthStep, speedKmPerH) {
    let speedMperSec = speedKmPerH / 3.6;
    let distance = steps * lengthStep;
    let timeSec = distance / speedMperSec;
    timeSec += Math.trunc(distance / 500) * 60;

    let hours = Math.trunc(timeSec / 3600);
    let minutes = Math.trunc((timeSec % 3600) / 60);
    let seconds = Math.round(timeSec % 60);

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);