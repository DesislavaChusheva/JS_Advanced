function solve(array) {
    let newArray = [];
    for (i = 1; i < array.length; i += 2) {
        newArray.push(array[i] * 2);
    }
    return newArray.reverse().join(' ');
}


console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));