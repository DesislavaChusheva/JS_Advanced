function solve(matrix) {
    let sum = 0;
    for (i = 0; i < matrix[0].length; i++) {
        sum += matrix[0][i];
    }
    let flag = true;
    for (row = 0; row < matrix.length; row++) {
        let currSum = 0;
        for (col = 0; col < matrix[row].length; col++) {
            currSum += matrix[row][col];
        }
        if(currSum != sum) {
            flag = false;
        }
    }
    let flippedMatrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    for (row = 0; row < flippedMatrix.length; row++) {
        let currSum = 0;
        for (col = 0; col < flippedMatrix[row].length; col++) {
            currSum += flippedMatrix[row][col];
        }
        if(currSum != sum) {
            flag = false;
        }
    }
    return flag;
}


console.log(solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
))
console.log(solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
))
console.log(solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
))