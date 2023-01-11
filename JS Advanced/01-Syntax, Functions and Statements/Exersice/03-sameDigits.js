function sameDigits(number) {

    let numToString = number.toString();
    let sum = 0;
    let isSame = true;
    let firstLetter = numToString[0];
    for (let i = 0; i < numToString.length; i++) {
        if (firstLetter !== numToString[i]) {
            isSame = false;
        }
        sum += Number(numToString[i]);
    }

    console.log(isSame);
    console.log(sum);

}
sameDigits(2222222)

function sameDigitFunc(number) {

    let arr = String(number).split('').map(n => Number(n))
    let isEqual = arr.filter(n => n !== arr[0]).length ? false : true;
    let sum = arr.reduce((acc, num) => acc + num);

    console.log(isEqual);
    console.log(sum);
}
sameDigitFunc(2222222)

/*Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
The input comes as an integer number.
The output should be printed on the console. */