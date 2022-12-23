function calculator (number1, character, number2){
    let res = 0
    if (character == '+'){
        res = (number1 + number2);
    } else if (character == '-'){
        res =(number1 - number2);
    } else if (character == '*'){
        res = (number1 * number2);
    } else {
        res =(number1 / number2);
    }

    console.log(res.toFixed(2));
}
calculator(5,

    '+',
    
    10)

    /*Write a function that receives 3 parameters: a number, an operator (string), and another number.

The operator can be: '+', '-', '/', '*'. Print the result of the calculation on the console formatted to the second decimal point. */