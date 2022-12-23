function letter(number) {

    for (let first = 0; first < number; first++) {
        let firstLetter = String.fromCharCode(97 + first);
        for (let second = 0; second < number; second++) {
            let secondLetter = String.fromCharCode(97 + second);
            for (let third = 0; third < number; third++) {
                let thirdLetter = String.fromCharCode(97 + third);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`)
            }
        }
    }
}