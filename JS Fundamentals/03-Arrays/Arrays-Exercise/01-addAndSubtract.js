function addAndSubstract(input){
     
    let resultArray = []
    let inputArraySum = 0
    let resultArraySum = 0
    let inputLength = input.length

    for(let i = 0; i < inputLength; i++){

        let currentNumber = input[i]
        let odd = currentNumber - i
        let even = currentNumber + i
        
        if(currentNumber % 2 == 0){
            resultArray.push(even)
        } else {
            resultArray.push(odd)
        }

        inputArraySum += currentNumber
        resultArraySum += resultArray[i]
    }
    console.log(resultArray);
    console.log(inputArraySum)
    console.log(resultArraySum)
}
addAndSubstract([5, 15, 23, 56, 35])

/*Write a function, which changes the value of odd and even numbers in an array of numbers.

· If the number is even - add to its value its index position

· If the number is odd - subtract to its value its index positi */