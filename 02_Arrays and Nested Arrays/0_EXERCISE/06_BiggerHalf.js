function solve(array) {
    array.sort((a, b) => a - b);
    let index = Math.floor(array.length / 2);
    let length = Math.ceil(array.length / 2);
    return array.splice(index, length);
}


console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))