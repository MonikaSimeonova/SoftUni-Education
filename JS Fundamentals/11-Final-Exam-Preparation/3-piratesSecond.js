function pirates(input){

    let currentLine = input.shift();
    let cityObj = {};

    while(currentLine !== 'Sail'){
        let current = currentLine.split('||');
        let city = current[0];
        let population = Number(current[1]);
        let gold = Number(current[2]);

        if(!cityObj.hasOwnProperty(city)){
            cityObj[city] = {
                population: population,
                gold: gold,
            }
        }else{
            cityObj[city].population += population;
            cityObj[city].gold += gold
        }
        currentLine = input.shift();
    }
    let nextLine = input.shift();

    while(nextLine !== 'End'){
        let commandLine = nextLine.split('=>');
        let command = commandLine[0];

        if(command == 'Plunder'){
            let town = commandLine[1];
            let people = Number(commandLine[2]);
            let goldStoled = Number(commandLine[3]);

            cityObj[town].population -= people;
            cityObj[town].gold -= goldStoled;
            console.log(`${town} plundered! ${goldStoled} gold stolen, ${people} citizens killed.`);

            if(cityObj[town].population == 0 || cityObj[town].gold == 0 ){
                delete cityObj[town];
                console.log(`${town} has been wiped off the map!`);
            }


        }else if(command == 'Prosper'){
            let townGrowth = commandLine[1];
            let goldEarned = Number(commandLine[2]);
            if(goldEarned < 0){
                console.log('Gold added cannot be a negative number!');
            }else{
                cityObj[townGrowth].gold += goldEarned;
                console.log(`${goldEarned} gold added to the city treasury. ${townGrowth} now has ${cityObj[townGrowth].gold} gold.`);
            }
        }

        nextLine = input.shift();
    }
    let lengthOfTheKeys = Object.keys(cityObj).length;
    let citiesToPrint = Object.entries(cityObj);
    
    if(lengthOfTheKeys > 0){
        console.log(`Ahoy, Captain! There are ${lengthOfTheKeys} wealthy settlements to go to:`);
        for (const [city,info] of citiesToPrint) {
            console.log(`${city} -> Population: ${info.population} citizens, Gold: ${info.gold} kg`);
        }

    }else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
    

}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])