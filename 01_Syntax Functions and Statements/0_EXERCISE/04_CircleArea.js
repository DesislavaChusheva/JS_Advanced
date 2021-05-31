function solve(input) {
    let inputType = typeof(input);

    if (inputType != 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
    else {
        //let circleArea = Math.PI*Math.pow(input, 2);
        let circleArea = Math.PI*(input**2);
        console.log(circleArea.toFixed(2));
    }
}

solve(5);
solve('name');