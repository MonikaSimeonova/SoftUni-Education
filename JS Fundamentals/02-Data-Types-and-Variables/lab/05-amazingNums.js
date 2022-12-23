function checkAmazing (number){
    let sum = 0
    let isAmazing = false

    let textNumber = number.toString();

    for (let i = 0; i < textNumber.length; i++){
        let currentNumber = Number(textNumber[i]);
        sum += currentNumber;
    }

    let sumText = sum.toString();
    for (let i = 0; i < sumText.length; i++){
        let curentDigit = sumText [i];
        if (curentDigit == '9'){
        isAmazing = true;
        break;
    }
}
console.log(`${number} Amazing? ${isAmazing ? 'True' : 'False'}`)
}
checkAmazing(1233)

/*Write a function, which as input will receive a number.
Check and print if it is amazing or not into the following format:
"{number} Amazing? {True or False}"
An amazing number includes the digit 9 the sum of its digits.
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29) */