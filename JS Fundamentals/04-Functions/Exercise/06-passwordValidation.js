function passwordValidation(passInput){

    let digitsCounter = 0;
    let isSymbol = false;

    for(let i = 0; i < passInput.length; i++){
        let charNumber = passInput[i].charCodeAt();
        let isDigit = charNumber >= 48 && charNumber <= 57;
        let isSmallLetter = charNumber >= 97 && charNumber <= 122;
        let isBigLetter = charNumber >= 65 && charNumber <= 90;

        if(isDigit){
            digitsCounter++
        }
        if(!isDigit && !isSmallLetter && !isBigLetter){
            isSymbol = true
        }
    }
    if(passInput.length < 6 || passInput.length > 10){
        console.log('Password must be between 6 and 10 characters');
    }
    if(isSymbol){
        console.log('Password must consist only of letters and digits');
    }
    if(digitsCounter < 2){
        console.log(`Password must have at least 2 digits`);
    }
    if(digitsCounter >= 2 && !isSymbol && passInput.length >= 6 && passInput.length <= 10 ){
        console.log('Password is valid');
    }

}
passwordValidation('logIn')

/*A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.

Output

· If the current integer is a palindrome, print: "true"

· Otherwise, print: "false" */