function solve (array) {
    let first = Number(array[0]);
    let last = Number(array[array.length - 1]);

    return first + last;
}


console.log(solve(['20', '30', '40']));
console.log(solve(['5', '10']));