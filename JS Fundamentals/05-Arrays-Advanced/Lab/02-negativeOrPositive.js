function numberSign(arrayOfNums){

    let finalNums = [];

    for (const element of arrayOfNums) {
        let firstNum = Number(element);

        if(firstNum < 0){
            finalNums.unshift(firstNum);
        } else {
            finalNums.push(firstNum);
        }
    }

    for (const number of finalNums) {
        let logNumber = Number(number)
        console.log(logNumber);
    }
}

numberSign(['3', '-2', '0', '-1'])

/*Write a function that processes the elements in an array one by one and produces a new array. 
Prepend each negative element at the front of the array (as the first element)
and append each positive (or 0) element at the end of the array.

The input comes as an array of string elements holding numbers.

The output is printed on the console, each element on a new line. */