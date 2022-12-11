function train(arr){

    let passengersIntrain = arr.shift().split(' ').map(Number);
    let maxCapacity = (arr.shift())

    for(let index = 0; index < arr.length; index ++){
        let currentRow = arr[index].split(' ')

        if(currentRow[0] === 'Add'){
            let newWaganPassengers = Number(currentRow[1])
            passengersIntrain.push(newWaganPassengers)
        }else{
            for(let j = 0; j < passengersIntrain.length; j++){
                let passengersINcurrentWagon = passengersIntrain[j]

                if(passengersINcurrentWagon + Number(currentRow[0]) <= maxCapacity){
                    passengersIntrain[j] += Number(currentRow[0])
                    break;
                }

            }
        }
    }
    console.log(passengersIntrain.join(' '));

}
train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])