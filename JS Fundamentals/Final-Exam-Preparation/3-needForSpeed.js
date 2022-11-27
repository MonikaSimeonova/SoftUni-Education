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