function solve(matrix) {
    let biggestEl = Number.MIN_VALUE;
    for (row = 0; row < matrix.length; row++) {
        for (col = 0; col < matrix[row].length; col++) {
            if (Number(matrix[row][col]) >= biggestEl) {
                biggestEl = Number(matrix[row][col]);
            }
        }
    }
    return biggestEl;
}


//console.log(solve([[20, 50, 10], [8, 33, 145]]));
console.log(solve([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]
));