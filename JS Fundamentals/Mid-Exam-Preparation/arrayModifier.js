function modifier (arr){

    let arrToPlay = arr.shift().split(' ').map(Number)
    
    let command = arr.shift()

    while(command !== 'end'){

        let lineArr = command.split(' ');
        let word = lineArr[0]
        let first = Number(lineArr[1])
        let second = Number(lineArr[2])

        if(word == 'swap'){
            let numIndex1 = arrToPlay[first];
            let numIndex2 = arrToPlay[second];
            
            arrToPlay.splice(first,1, numIndex2)
            arrToPlay.splice(second,1,numIndex1)
                          
        }else if(word == 'multiply'){
            let numIndex1 = arrToPlay[first];
            let numIndex2 = arrToPlay[second];
            let multyplyed = numIndex1 * numIndex2
            arrToPlay.splice(first,1,multyplyed)
            //arrToPlay.splice(second,1) 
        } else if (word == 'decrease'){
            let decreased = arrToPlay.map(x => x - 1)
            arrToPlay = decreased
        }
        
        command = arr.shift()
    }
    console.log(arrToPlay.join(', '));

}