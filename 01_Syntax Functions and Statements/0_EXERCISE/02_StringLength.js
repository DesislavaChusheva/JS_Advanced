function solve(first, second, third) {
    let sumLength = first.length + second.length + third.length;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');