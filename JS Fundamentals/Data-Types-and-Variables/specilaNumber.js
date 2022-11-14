function specialNumbers(number) {
    
    for (let i = 1; i <= number; i++) {
        let secondNum = i % 10;
        let firstNum = Math.trunc(i / 10);
        let result = firstNum + secondNum;

        if (result == 5 || result == 7 || result == 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }

    }
}