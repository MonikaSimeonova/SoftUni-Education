function memoryGame(arr){

    let sequenceArr = arr.shift().split(' ')
    let numbersIndex = arr.shift()
    let counter = 0
    
    while(numbersIndex != 'end'){
        

        let arrSeparated = numbersIndex.split(' ');
        let firstIndex = Number(arrSeparated[0]);
        let secondIndex = Number(arrSeparated[1]);
        counter++

        if(arr.length == 1 && sequenceArr.length == 0){
            console.log(`You have won in ${counter-1} turns!`)
            break;
        }
        
        
        if(firstIndex == secondIndex || firstIndex < 0 || secondIndex < 0 || firstIndex >= sequenceArr.length || secondIndex >= sequenceArr.length){
            let long = Math.floor(sequenceArr.length/2)
            let moves = `-${counter}a`
            sequenceArr.splice(long,0,moves,moves)
            console.log("Invalid input! Adding additional elements to the board");
        
        }else if(sequenceArr[firstIndex] == sequenceArr[secondIndex]){
            let matched = (sequenceArr[firstIndex]);
            
            sequenceArr.splice(firstIndex,1)
            let index = sequenceArr.indexOf(matched)
            sequenceArr.splice(index,1)
            
            console.log(`Congrats! You have found matching elements - ${matched}!`);
        } else if(sequenceArr[firstIndex] !== sequenceArr[secondIndex]){
            console.log('Try again!');
        }
    
                           
        numbersIndex = arr.shift();
    }

    if(numbersIndex == 'end'){
    console.log(`Sorry you lose :(
        ${sequenceArr.join(' ')}`);
    } 
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])
memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])
memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])
    
/*Write a program that recreates the Memory game.
On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence, you should add two matching elements at the middle of the sequence in the following format:
"-{number of moves until now}a" 
Then print this message on the console:
"Invalid input! Adding additional elements to the board"
Input
•	On the first line, you will receive a sequence of elements
•	On the following lines, you will receive integers until the command "end"
Output
•	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
"Congrats! You have found matching elements - ${element}!"
•	If the player hit two different elements, you should print on the console the following message:
"Try again!"
•	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: 
"You have won in {number of moves until now} turns!"
•	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
"Sorry you lose :(
{the current sequence's state}"
Constraints
•	All elements in the sequence will always have a matching element.
 */