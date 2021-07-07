function solve(array) {
    let catalogue = {};
    for (const str of array) {
        let [product, price] = str.split(' : ');
        price = Number(price);
        catalogue[product] = price;
    }
    catalogue.sort();
}


console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));