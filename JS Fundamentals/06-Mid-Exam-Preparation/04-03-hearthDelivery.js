function hearthDelivery(arr){

    let neighborhoodArr = arr.shift().split('@').map(Number);
    let command = arr.shift();
    let currentHouse = 0;

    while(command != 'Love!'){

        let commandArr = command.split(' ');
        let jumpIndex = Number(commandArr[1]);

        if(currentHouse + jumpIndex >= neighborhoodArr.length){
            currentHouse = 0
        } else {
            currentHouse += jumpIndex
        }

        if(neighborhoodArr[currentHouse] > 0){
            neighborhoodArr[currentHouse] -= 2;

            if(neighborhoodArr[currentHouse] <= 0){
                console.log(`Place ${currentHouse} has Valentine's day.`);
            }
        }else{
            console.log(`Place ${currentHouse} already had Valentine's day.`);
        }

        command = arr.shift();
    }
    console.log(`Cupid's last position was ${currentHouse}.`);
    let isSuccessful = true 
    let counter = 0
    for(let i = 0; i < neighborhoodArr.length; i++){

        if(neighborhoodArr[i] > 0){
            isSuccessful = false
            counter++
        }

    }
    if(isSuccessful){
        console.log('Mission was successful.');
    }else{
        console.log(`Cupid has failed ${counter} places.`);
    }

}
        