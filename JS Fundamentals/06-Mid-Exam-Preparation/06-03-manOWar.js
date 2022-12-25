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

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])


    /*Create a program that tracks the battle and either chooses a winner or prints a stalemate. On the first line, you will receive the status of the pirate ship, which is a string representing integer sections separated by ">". On the second line, you will receive the same type of status, but for the warship: 
"{section1}>{section2}>{section3}… {sectionn}"
On the third line, you will receive the maximum health capacity a section of the ship can reach. 
The following lines represent commands until "Retire":
•	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) the warship sinks, print the following and stop the program: "You won! The enemy ship has sunken."
•	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
"You lost! The pirate ship has sunken."
•	"Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not, skip the command. The health of the section cannot exceed the maximum health capacity.
•	"Status" - prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. Print the following:
"{count} sections need repair."
In the end, if a stalemate occurs, print the status of both ships, which is the sum of their individual sections, in the following format:
"Pirate ship status: {pirateShipSum}
Warship status: {warshipSum}"
Input
•	On the 1st line, you are going to receive the status of the pirate ship (integers separated by '>')
•	On the 2nd line, you are going to receive the status of the warship
•	On the 3rd line, you will receive the maximum health a section of a ship can reach.
•	On the following lines, until "Retire", you will be receiving commands.
Output
•	Print the output in the format described above.
Constraints
•	The section numbers will be integers in the range [1….1000]
•	The indexes will be integers [-200….200]
•	The damage will be an integer in the range [1….1000]
•	The health will be an integer in the range [1….1000]
 */