function factorialNum(num1,num2){

    let resultOne = num1
    let resultTwo = num2

    for(let i = num1 - 1; i >= 1; i--){
        resultOne *= i
       
    }
    //resultOne = num1
    for(let j = num2 -1; j >= 1; j--){
        resultTwo *= j
    }
    //resultTwo = num2
    console.log((resultOne / resultTwo).toFixed(2));

}
factorialNum(5,2)

/*Write a function that receives two integer numbers. Calculate the factorial of each number. Divide the first result by the second and print the division formatted to the second decimal point. */