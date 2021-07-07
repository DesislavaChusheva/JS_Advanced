function solve(array) {
    array.sort((a, b) => a - b);
    let firstLength = Math.ceil(array.length / 2);
    let firstArr = array.slice(0, firstLength);
    let secondArr = array.slice(firstLength, array.length);
    secondArr.reverse();
    let result = [];
    let length = secondArr.length;
    for (i = 0; i < length; i++) {
        result.push(firstArr.shift());
        result.push(secondArr.shift());
    }
    if (firstArr.length > 0) {
        result.push(firstArr.shift());
    }
    return result;
}


console.log(solve([0, 1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));