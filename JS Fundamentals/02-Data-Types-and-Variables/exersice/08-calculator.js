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