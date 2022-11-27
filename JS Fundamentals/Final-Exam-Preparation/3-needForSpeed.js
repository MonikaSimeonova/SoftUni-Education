function needForSpeed(input){

    let carNumber = Number(input.shift());
    let cars = {};
    let maxFuel = 75;

    for(let i = 0; i < carNumber; i++){
        let line = input.shift().split('|');
        let car = line[0];
        let mileage = Number(line[1]);
        let fuel = Number(line[2]);

        cars[car] = {
            mileage: mileage,
            fuel: fuel,
        }
    }
    let command = input.shift();
    while(command !== 'Stop'){
        let lineOfCommand = command.split(' : ');
        let action = lineOfCommand[0];

        switch(action){
            case 'Drive':
                let car = lineOfCommand[1];
                let distance = Number(lineOfCommand[2]);
                let fuelNeeded = Number(lineOfCommand[3]);

                if(cars[car].fuel < fuelNeeded){
                    console.log('Not enough fuel to make that ride');
                }else{
                    cars[car].mileage += distance;
                    cars[car].fuel -= fuelNeeded;
                    console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                }
                if(cars[car].mileage >= 100000){
                    //delete this car
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
                break;

            case 'Refuel':
                let carToRefuel = lineOfCommand[1];
                let quantityGas = Number(lineOfCommand[2]);

                if((cars[carToRefuel].fuel + quantityGas) > maxFuel){
                    let gas = maxFuel - cars[carToRefuel].fuel;
                    cars[carToRefuel].fuel = maxFuel;
                    // print the gas refueled, if the tank is over 75l
                    console.log(`${carToRefuel} refueled with ${gas} liters`);
                }else{
                    cars[carToRefuel].fuel += quantityGas;
                    console.log(`${carToRefuel} refueled with ${quantityGas} liters`);
                }
                break;
                
            case 'Revert':
                let carToRevert = lineOfCommand[1];
                let km = Number(lineOfCommand[2]);

                cars[carToRevert].mileage -= km;
                if(cars[carToRevert].mileage < 10000){
                    cars[carToRevert].mileage = 10000
                }else{
                    console.log(`${carToRevert} mileage decreased by ${km} kilometers`);
                }
                break;

        }
        command = input.shift();
    }
    let carsInfo = Object.entries(cars);

    for (const [car,info] of carsInfo) {
        console.log(`${car} -> Mileage: ${info.mileage} kms, Fuel in the tank: ${info.fuel} lt.`);
    }
    

}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )
// On the first line of the standard input, you will receive an integer n – the number of cars that you can obtain. On the next n lines, the cars themselves will follow with their mileage and fuel available, separated by "|" in the following format:
// "{car}|{mileage}|{fuel}"
// Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:
// •	"Drive : {car} : {distance} : {fuel}":
// o	You need to drive the given distance, and you will need the given fuel to do that. If the car doesn't have enough fuel, print: "Not enough fuel to make that ride"
// o	If the car has the required fuel available in the tank, increase its mileage with the given distance, decrease its fuel with the given fuel, and print: 
// "{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
// o	You like driving new cars only, so if a car's mileage reaches 100 000 km, remove it from the collection(s) and print: "Time to sell the {car}!"
// •	"Refuel : {car} : {fuel}":
// o	Refill the tank of your car. 
// o	Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than you can fit in the tank, take only what is required to fill it up. 
// o	Print a message in the following format: "{car} refueled with {fuel} liters"
// •	"Revert : {car} : {kilometers}":
// o	Decrease the mileage of the given car with the given kilometers and print the kilometers you have decreased it with in the following format:
// "{car} mileage decreased by {amount reverted} kilometers"
// o	If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
// DO NOT print anything.
// Upon receiving the "Stop" command, you need to print all cars in your possession in the following format:
// "{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

