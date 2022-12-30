function movingTarget(input){

    let targets = input.shift().split(' ').map(Number)//(x => Number(x))
    
    let currentLine = input.shift();

    while(currentLine != 'End'){
        let lineArr = currentLine.split(' ');
        let command = lineArr[0];
        let index = Number(lineArr[1]);
        let power = Number(lineArr[2]);

        switch (command){
            case 'Shoot': 

            if(targets[index]){
            targets[index] -= power;

            if(targets[index] <= 0){
                targets.splice(index,1)
            }
        }
            break
            case 'Add': 
            if(targets[index]){ // validen li e indeksa
                targets.splice(index, 0, power) // vmukvane na tazi poziciq kato drugiq minava sled tova
            } else {
                console.log('Invalid placement!');
            }
            break
            case 'Strike': 
            // let firstPart = targets.slice(0, index - power);
            // let secodParts = targets.slice(index + power)
            // targets = firstPart.concat(secodParts)
            let lowerIndex = index - power
            let upperIndex = index + power

            if(targets[lowerIndex] && targets[upperIndex]){
            targets.splice(index - power, power * 2 + 1);
            } else {
                console.log('Strike missed!');
            }
            break
        }

        currentLine = input.shift();
    }
    console.log(targets.join('|'));

}
movingTarget(["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"])