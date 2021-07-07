function solve(inputArray) {
    let register = {};
    for (const townAsString of inputArray) {
        let [name, population] = townAsString.split(' <-> ');
        population = Number(population);
        if (register[name] != undefined) {
            population += register[name]
        }
        register[name] = population;
    }
    for (const town in register) {
        console.log(`${town} : ${register[town]}`);
    }
}


solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)