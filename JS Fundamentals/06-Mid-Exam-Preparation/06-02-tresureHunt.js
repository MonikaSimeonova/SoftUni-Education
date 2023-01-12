function tresureHunt(arr){

    let tresureArr = arr.shift().split('|');
    let currentMoves = arr.shift();

    while(currentMoves != 'Yohoho!'){
        let diffInputs = currentMoves.split(' ');
        let firstCommand = diffInputs.shift();

        if(firstCommand == 'Loot'){
            for(let i = 0; i < diffInputs.length;i++){
                if(!tresureArr.includes(diffInputs[i])){
                    tresureArr.unshift(diffInputs[i])
                }
            }
        }else if (firstCommand == 'Drop'){
            let index = Number(diffInputs[0]);
            if(tresureArr[index]){
               let removed = tresureArr.splice(index,1)
               tresureArr.push(removed[0])
            }
        }else if(firstCommand == 'Steal'){
            let index = Number(diffInputs[0]);
            let stolenArr = [];
            if(tresureArr.length - index <= 0){
                index = index - tresureArr.length;
                let startIndex = 0;
                stolenArr = tresureArr.splice(startIndex,tresureArr.length);
            } else {
                stolenArr = tresureArr.splice(tresureArr.length - index,index);
            } 
            console.log(stolenArr.join(', '));
        }

        currentMoves = arr.shift()

    }
    let sum = 0
   for(let i = 0; i < tresureArr.length; i++){
    let currentCounting = tresureArr[i]
    sum += currentCounting.length
   }
   if(tresureArr.length <= 0){
    console.log('Failed treasure hunt.');
   }else {
   console.log(`Average treasure gain: ${(sum / tresureArr.length).toFixed(2)} pirate credits.`);
   }
}

tresureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

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
