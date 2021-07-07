function solve(array) {
    array.sort().sort((a, b) => a.length - b.length);
    return array.join('\r\n');
}


console.log(solve(['alpha', 'beta', 'gamma']))
//console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']))
//console.log(solve(['test', 'Deny', 'omen', 'Default']))