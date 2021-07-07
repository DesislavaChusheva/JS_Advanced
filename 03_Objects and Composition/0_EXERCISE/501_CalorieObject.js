function solve(array) {
    let object = {};
    for (let index = 0; index < array.length; index += 2) {
        object[array[index]] = Number(array[index+1]);
    }
    return object;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));