function single (number){
    let stringNum = number.toString()
    let sum = 0

    for(let i = 0; i < stringNum.length; i++){
        let digit = Number(stringNum[i])
        sum += digit
    }
    console.log(sum)
}
single(111)