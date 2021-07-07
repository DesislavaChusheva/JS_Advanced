function solve(n, k) {
    let result = [];
    for (i = 0; i < n; i++) {
        let currSum = 1;
        if (i > 0) {
            currSum = 0;
        }
        let endIndex;
        if (result.length < k) {
            endIndex = 0;
        } else {
            endIndex = result.length - k;
        }
        for (j = result.length - 1; j >= endIndex; j--) {
            currSum += result[j];
        }
        result[i] = currSum;
    }
    return result;
}


console.log(solve(6, 3));
console.log(solve(8, 2));