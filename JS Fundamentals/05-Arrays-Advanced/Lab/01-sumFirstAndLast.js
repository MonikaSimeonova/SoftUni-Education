function sumOfNumbers(arrayOfNums){

    let firstNum = arrayOfNums[0];
    let lastNum = arrayOfNums.pop();
    let sumOfNums = Number(firstNum) + Number(lastNum);
    
    console.log(sumOfNums);
}

sumOfNumbers(['20', '30', '40'])

/*Write a function that calculates and prints the sum of the first and the last elements in an array.

The input comes as an array of string elements holding numbers.

The output is printed on the console. */