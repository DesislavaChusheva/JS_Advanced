function solve(array, firstPie, secondPie) {
    let startIndex = array.indexOf(firstPie);
    let lastIndex = array.indexOf(secondPie);
    let length = (lastIndex - startIndex) + 1;
    return array.splice(startIndex, length);
}


console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
));
console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'
));