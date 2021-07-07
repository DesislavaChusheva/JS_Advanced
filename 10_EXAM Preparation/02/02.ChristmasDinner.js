class ChristmasDinner {
    constructor(budget){
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() {
        return this._budget
    }
    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    shopping(product) {
        let type = product[0];
        let price = product[1];

        if (price > this.budget) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }
    recipes(recipe) {
        let name = recipe.recipeName;
        let neededProducts = recipe.productsList;

        let flag = true;

        for (const product of neededProducts) {
            if (!this.products.some(p => p === product)) {
                flag = false;
                break;
            }
        }
        if (!flag) {
            throw new Error('We do not have this product');
        }
        this.dishes.push(recipe);
        return `${name} has been successfully cooked!`
    }
    inviteGuests(name, dish) {
        if (!this.dishes.some(d => d.recipeName === dish)) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = this.dishes[dish];
        return `You have successfully invited ${name}!`;
    }
    showAttendance() {
        let result = [];

        // Object.entries(this.guests).forEach(([guest, dish]) => {
        //     result.push(`${guest} will eat ${dish.recipeName}, which consists of ${dish.productsList.join()}`)
        // })

        console.log(Object.entries(this.guests));
        for (let key in this.guests) {
            console.log(this.guests[key]);
            let guestDish = this.guests[key].recipe.recipeName;
            let dishProducts = this.guests[key].recipe.productsList;
            let guestString = `${key} will eat ${guestDish}, which consists of ${dishProducts.join()}`
            result.push(guestString);
        }
        return result.join('\n');
    }
}



let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
