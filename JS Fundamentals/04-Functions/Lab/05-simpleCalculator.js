function simplyCalculator(num1, num2, operator){

    switch (operator) {
        case 'multiply':
            console.log(num1*num2);
            break;
        case 'divide': 
        console.log(num1/num2);
            break;

        case 'add': 
        console.log(num1+num2);
            break

        case 'subtract':
            console.log(num1-num2);
    
            break;
    }

}
simplyCalculator(5,

    5,
    
    'multiply')

    /*Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions. */