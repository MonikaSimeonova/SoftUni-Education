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
specialNumbers(15)

/*Write a program that receives a number n. For all numbers in the range [1…n] print the number and if it is special or not (True / False).

· A number is special when its sum of digits is 5, 7 or 11. */