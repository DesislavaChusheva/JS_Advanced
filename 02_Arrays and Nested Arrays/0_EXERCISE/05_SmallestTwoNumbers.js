function solve(array) {
    array.sort((a, b) => a - b);
    let newArray = array.splice(0, 2);
    return newArray.join(' ');
}


console.log(solve([30, 15, 50, 5]));
console.log(solve([3, 0, 10, 4, 7, 3]));