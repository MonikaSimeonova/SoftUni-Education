class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!this.#validateModel(model)
            || !this.#validatehorsePower(horsepower)
            || !this.#validatePrice(price)
            || !this.#validatePrice(mileage)
        ) {
            throw new Error('Invalid input!')
        }
        this.availableCars.push({
            model,
            horsepower,
            price,
            mileage
        })
        return `New car added: ${model} - ${horsepower} HP - ${mileage} km - ${price}$`

        // for judge use _
    }
    #validateModel(value) {
        return typeof value == 'string' && value != ''
    }
    #validatehorsePower(value) {
        return Number.isInteger(value) && value >= 0
    }
    #validatePrice(value) {
        return typeof value == 'number' && value >= 0
    }

    sellCar(model, desiredMileage) {
        const index = this.availableCars.findIndex(c=> c.model == model)
        const matchingModel = this.availableCars.find(c => c.model == model)
        if (matchingModel == undefined) {
            throw new ReferenceError(`${model} was not found!`)
        }

        const mielageDels = matchingModel.mileage - desiredMileage;

        const sold = {
            model: matchingModel.model,
            horsepower: matchingModel.horsepower,
        }
        if (mielageDels <= 0) {
            sold.soldPrice = matchingModel.price
        } else if (mielageDels <= 40000) {
            sold.soldPrice = matchingModel.price * 0.95
        } else {
            sold.soldPrice = matchingModel.price * 0.9
            
        }
        this.soldCars.push(sold)
        this.availableCars.splice(index,1)
        this.totalIncome += sold.soldPrice

        return `${model} was sold for ${sold.soldPrice}$ `
    }

    currentCar(){
        if(this.availableCars.length == 0){
            return `There are no available cars`
        }
        const result = this.availableCars.map(c=> `---${c.model} - ${c.horsepower} HP - ${c.mileage} km - ${c.price}$ `)
        result.unshift('-Available cars')

        return result.join('\n')
    }

    salesReport(criteria){
        if(criteria !== "horsepower" && criteria !== "model"){
            throw new TypeError('Invalid criteria')
        }

        if(criteria == 'hoursepower'){
            this.soldCars.sort((a,b)=> b-a)
        }else if(criteria == 'model'){
            this.soldCars.sort((a,b)=> a.model.localeCompare(b.model))

        }
        const result = this.soldCars.map(c=> `---${c.model} - ${c.horsepower} HP - ${c.price}$`)
        result.unshift(`-${this.soldCars.length} cars sold:`)
        result.unshift(`-${this.name} has a total income of ${this.totalIncome}`)


        return result.join('\n')

    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500,
//     190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);