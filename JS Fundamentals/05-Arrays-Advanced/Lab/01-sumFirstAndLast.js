function sumOfNumbers(arrayOfNums){

    let firstNum = arrayOfNums[0];
    let lastNum = arrayOfNums.pop();
    let sumOfNums = Number(firstNum) + Number(lastNum);
    
    console.log(sumOfNums);
}

sumOfNumbers(['20', '30', '40'])