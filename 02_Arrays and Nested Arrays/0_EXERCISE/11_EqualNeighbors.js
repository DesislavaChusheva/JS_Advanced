function solve(matrix) {
    let count = 0;
    for (row = 0; row < matrix.length - 1; row++) {
        for (col = 0; col < matrix[row].length - 1; col++) {
            if (matrix[row][col] === matrix[row + 1][col]) {
                count++;
            }
            if (matrix[row][col] === matrix[row][col + 1]) {
                count++;
            }
        }
    }
    let lastEl = matrix[matrix.length - 1][matrix[matrix.length - 1].length - 1];
    let lastColEl = matrix[matrix.length - 1][matrix[matrix.length - 1].length - 2];
    let lastRowEl = matrix[matrix.length - 2][matrix[matrix.length - 2].length - 1];
    if (lastEl === lastColEl) {
        count++;
    }
    if (lastEl === lastRowEl) {
        count++;
    }
        return count;
}


//console.log(solve([['2', '3', '4', '7', '0'],
//['4', '0', '5', '3', '4'],
//['2', '3', '5', '4', '2'],
//['9', '8', '7', '5', '4']]
//));
//console.log(solve([['test', 'yes', 'yo', 'ho'],
//['well', 'done', 'yo', '6'],
//['not', 'done', 'yet', '5']]
//));
console.log(solve([['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2']]));