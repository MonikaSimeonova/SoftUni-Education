function oddEvenNum(number){

    let numberAsString = number.toString();
    let evenNum = 0
    let oddNum = 0
    let numberAsStringLenght = numberAsString.length

    for(let index = 0; index < numberAsStringLenght; index++){

        let singleNum = Number(numberAsString[index])

        if(singleNum % 2 == 0){
            evenNum += singleNum
        } else {
            oddNum += singleNum
        }
    }

    console.log(`Odd sum = ${oddNum}, Even sum = ${evenNum}`)

}
oddEvenNum(1000435)

/*You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number. */