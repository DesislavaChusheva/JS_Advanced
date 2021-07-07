function solve(array, count) {
    let rotations = count % array.length;
    for (i = 0; i < rotations; i++) {
        let a = array.pop();
        array.unshift(a);
    }
    return array.join(' ');
}


//console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));