function solve(array) {
    array.sort();
    let numbers = [];
    for (i = 1; i <= array.length; i++) {
        numbers.push(`${i}.`);
    }
    let result = [];
    for (i = 0; i < array.length; i++) {
        result.push(numbers[i] + array[i]);
    }
    return result.join('/')
}


console.log(solve(["John", "Bob", "Christina", "Ema"]));