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