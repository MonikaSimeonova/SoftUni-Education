class Garden {
	constructor(spaceAvailable){
        this.spaceAvailable = spaceAvailable;
        this.plants = []
        this.storage = []
    }
    addPlant (plantName, spaceRequired){

        let space = this.spaceAvailable - spaceRequired
        if(space < 0 ){
            throw new Error("Not enough space in the garden.")
        }
        this.plants.push({plantName, 
            spaceRequired, 
            ripe: false, 
            quantity: spaceRequired})
            this.spaceAvailable -= spaceRequired

            return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity){
        let isFound = this.plants.find(p=>p.plantName == plantName)
        if(!isFound){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(isFound){

            if(isFound.ripe == true){
                throw new Error(`The ${plantName} is already ripe.`)
            }
            if(quantity <= 0){
                throw new Error("The quantity cannot be zero or negative.")
            }
            isFound.ripe = true
            isFound.quantity += quantity
            if(quantity == 1){
                return `${quantity} ${plantName} has successfully ripened.`
            }
            if(quantity > 1){
                return `${quantity} ${plantName}s have successfully ripened.`
            }

            
        }



    }
    harvestPlant(plantName) {
        if(this.plants.length == 0){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let isFound = this.plants.find(p=>p.plantName == plantName)
        if(!isFound){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        let isfoundIndex = this.plants.findIndex(x=>x.plantName == plantName)
        if(isFound){
            if(isFound.ripe == false){
                throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
            }
            this.storage.push(isFound.plantName, isFound.quantity)
            this.spaceAvailable -= isFound.quantity
            delete this.plants[isfoundIndex]

            return `The ${plantName} has been successfully harvested.`
        }
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// The apple has been successfully planted in the garden.
// The orange has been successfully planted in the garden.
// Uncaught Error Error: Not enough space in the garden.

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('olive'));




