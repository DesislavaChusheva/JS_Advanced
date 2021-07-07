function solve(array) {
    let resultArr = [];

    for (i = 0; i < array.length; i++) {
        if (array[i] === 'add') {
            resultArr.push(1 + i);
        } else {
            resultArr.pop();
        }
    }
    if (resultArr.length > 0) {
        return resultArr.join('\r\n');
    } else {
        return 'Empty';
    }
}


//console.log(solve(['add', 'add', 'add', 'add']));
console.log(solve(['add', 'add', 'remove', 'add', 'add']));
//console.log(solve(['remove', 'remove', 'remove']));