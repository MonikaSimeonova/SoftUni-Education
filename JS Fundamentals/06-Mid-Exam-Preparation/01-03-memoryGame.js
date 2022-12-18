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
         "end"
    ]
    )