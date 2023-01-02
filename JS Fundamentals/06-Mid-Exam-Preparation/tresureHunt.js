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
