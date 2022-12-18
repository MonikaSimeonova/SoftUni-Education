function manOWar(arr) {

    let statusPirateShip = arr.shift().split('>').map(Number);
    let statusWarship = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());

    let currentCommand = arr.shift();
    let isBreak = false;
    let isDownPirateShip = false;

    while (currentCommand != 'Retire') {
        let command = currentCommand.split(' ');
        let firstWord = command.shift();

        if (firstWord == 'Fire') {
            let index = Number(command.shift())
            let damage = Number(command.shift())

            if (statusWarship[index] !== undefined) {
                statusWarship[index] -= damage

                if (statusWarship[index] <= 0) {
                    isBreak = true;
                    break;
                }
            }

        } else if (firstWord == 'Defend') {
            let startIndex = Number(command.shift());
            let endIndex = Number(command.shift());
            let damage2 = Number(command.shift());

            if (statusPirateShip[startIndex] != undefined && statusPirateShip[endIndex] != undefined && startIndex !== endIndex) {

                for (let i = startIndex; i <= endIndex; i++) {
                    statusPirateShip[i] -= damage2;

                    if (statusPirateShip[i] <= 0) {
                        isDownPirateShip = true;
                        break;
                    }
                }
            }
        } else if (firstWord == 'Repair') {
            let index = Number(command.shift())
            let health = Number(command.shift())

            if (statusPirateShip[index] !== undefined) {

                statusPirateShip[index] += health
                if (statusPirateShip[index] > maxHealth) {
                    statusPirateShip[index] = maxHealth
                }
            }
        } else if (firstWord == 'Status') {
            let statusNum = 0
            for (let i = 0; i < statusPirateShip.length; i++) {
                let percent = maxHealth * 0.2

                if (statusPirateShip[i] < percent) {
                    statusNum++
                }
            }
            console.log(`${statusNum} sections need repair.`);
        }

        if (isBreak) {
            console.log('You won! The enemy ship has sunken.');
            break;
        }
        if (isDownPirateShip) {
            console.log('You lost! The pirate ship has sunken.');
            break;
        }

        currentCommand = arr.shift();
    }

    if ((!isBreak) && (!isDownPirateShip)) {
        let pirateSum = 0;
        for (let i = 0; i < statusPirateShip.length; i++) {
            pirateSum += statusPirateShip[i];
        }

        let warShipSum = 0
        for (let i = 0; i < statusWarship.length; i++) {
            warShipSum += statusWarship[i];
        }

        console.log(`Pirate ship status: ${pirateSum}\nWarship status: ${warShipSum}`);
    }


}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])