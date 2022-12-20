function shotForWin(arr){

    let targets = arr.shift().split(' ').map(Number)
    let currentShot = arr.shift()
    counter = 0

    while(currentShot !== 'End'){
        currentShot = Number(currentShot)
        
        if(targets[currentShot] !== undefined && targets[currentShot] != -1){
            counter++
            let numberReduced = targets[currentShot]
            targets.splice(currentShot,1,-1)

            for(let i = 0; i < targets.length;i++){

                if(numberReduced < targets[i] && targets[i] !== -1 ){
                    targets[i] -= numberReduced
                } else if (numberReduced >= targets[i] && targets[i] !== -1){
                    targets[i] += numberReduced
                }
            }
        } 
        currentShot = arr.shift()

    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
}
shotForWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])
