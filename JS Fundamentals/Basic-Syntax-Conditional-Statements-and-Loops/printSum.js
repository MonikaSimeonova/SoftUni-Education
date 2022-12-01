function printSum (startNumber, endNumber){

    let sum = 0;
    let output = '';
    for(let i = startNumber; i <= endNumber; i++){
        sum += i
        output += `${i} `;
    }
    console.log(output)
    console.log(`Sum: ${sum}`)

}
printSum(5, 10)

// Write a function that displays numbers from given start to given end and their sum. 
// The input comes as two number parameters. Print the result like the examples below
