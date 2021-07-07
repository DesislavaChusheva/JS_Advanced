function solve(array) {
    let newArray = [];
    for(i = 0; i < array.length; i++) {
        let currNum = array[i];
        if(currNum < 0) {
            newArray.unshift(currNum);
        } else {
            newArray.push(currNum);
        }
    }
    return newArray.join('\r\n');
}


console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));