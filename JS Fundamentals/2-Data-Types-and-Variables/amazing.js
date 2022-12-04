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