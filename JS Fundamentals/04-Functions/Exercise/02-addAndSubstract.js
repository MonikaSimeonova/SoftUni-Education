function addAndSubstract(firstNumber,secondNumber,lastNum){

    function add(firstNum,secondNum){

        let sum = firstNum + secondNum
        return sum;
    }
    let result = add(firstNumber,secondNumber)

    function substract(sumOfTwo, lastNum){
        return sumOfTwo - lastNum
    }
    let finalRes = substract(result,lastNum)

    console.log(finalRes);

}
addAndSubstract(23,
    6,
    10
    )
/*You will receive three integer numbers.

Write a function sum() to calculate the sum of the first two integers and a function subtract(), which subtracts the result of the function the sum() and the third integer. */