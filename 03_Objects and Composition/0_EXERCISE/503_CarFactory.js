function solve(carObject) {
    let storage = {
        engine: {
            'smallEngine': { power: 90, volume: 1800 },
            'normalEngine': { power: 120, volume: 2400 },
            'monsterEngine': { power: 200, volume: 3500 },
        },
        carriege: {
            hatchback: { type: 'hatchback', color: '' },
            coupe: { type: 'coupe', color: '' },
        },
        getEngine(power) {
            for (const eng in this.engine) {
                if (this.engine[eng].power >= power) {
                    return this.engine[eng];
                }
            }
        },
        getCarriege(carr, color) {
            let objCarr = this.carriege[carr];
            objCarr.color = color;
            return objCarr;
        },
        getWheels(size) {
            let wheels = new Array(4);
            if (size % 2 == 0) {
                size -= 1;
            }
            wheels.fill(size);
            return wheels;
        },
    };
    return {
        model: carObject.model,
        engine: storage.getEngine(carObject.power),
        carriage: storage.getCarriege(carObject.carriage, carObject.color),
        wheels: storage.getWheels(carObject.wheelsize),
    };
}


console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))