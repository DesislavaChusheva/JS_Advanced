function solve(array){
    let newArr = [];
    for(i = 0; i < array.length; i+=2) {
        newArr.push(array[i]);
    }
    return newArr.join(' ');
}


console.log(solve(['20', '30', '40', '50', '60']));