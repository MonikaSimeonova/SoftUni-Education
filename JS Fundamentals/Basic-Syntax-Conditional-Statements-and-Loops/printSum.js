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