function counterStrike(arr) {

    let fullEnergy = Number(arr.shift())
    let counter = 0
    let currentEnergy = ''

    for (let i = 0; i < arr.length; i++) {

        currentEnergy = arr[i];

        if (currentEnergy != 'End of battle') {

            currentEnergy = Number(arr[i])

            if (fullEnergy - currentEnergy < 0) {
                console.log(`Not enough energy! Game ends with ${counter} won battles and ${fullEnergy} energy`);
                return;
            }
            fullEnergy -= currentEnergy
            counter++
        } else {
            console.log(`Won battles: ${counter}. Energy left: ${fullEnergy}`);
        }
        if (counter % 3 == 0) {
            fullEnergy += counter
        }
    }
}
counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
