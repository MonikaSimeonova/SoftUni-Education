function muOnline(commands){

    let health = 100
    let bitcoins = 0
    let comandsArr = commands.split('|')

    for(let i = 0; i < comandsArr.length;i++){
        let fullCommand = comandsArr[i].split(' ')
        let frontWord = fullCommand[0]
        let number = Number(fullCommand[1])

        if(frontWord == 'potion'){
            
            if(health + number > 100){
                number = 100 - health
                health = 100;
            } else {
                health += number;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(frontWord == 'chest'){
            console.log(`You found ${number} bitcoins.`);
            bitcoins += number;
        }else{
            health -= number;
            if(health > 0){
                console.log(`You slayed ${frontWord}.`);
            } else if (health <= 0){
                console.log(`You died! Killed by ${frontWord}.`);
                console.log(`Best room: ${i+1}`);
                break;
            }
        }
    }
    if(health > 0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }


}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")

/* Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
Input
•	Read from the console a single line holding space-separated integers.
Output
•	Print the above-described numbers on a single line, space-separated. 
•	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
•	Print "No" if no numbers hold the above property.
Constraints
•	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
•	The count of numbers is in the range [1…10 000].
*/
