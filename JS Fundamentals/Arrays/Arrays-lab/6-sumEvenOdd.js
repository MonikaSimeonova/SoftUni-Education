function sumEven(numbers){
    let sumEven = 0
    let sumOdd = 0

    for(let i = 0; i < numbers.length; i ++){
        if(numbers[i] % 2 == 0){
            sumEven += numbers[i]
        } else {
            sumOdd += numbers[i]
        }
    }
    console.log(sumEven - sumOdd);

}
sumEven([3,5,7,9])

function solve (numbers){
    let sumEven = 0
    let sumOdd = 0

    for (let num of numbers){
        let i = Number(num)
            if (i % 2 == 0){
                sumEven += i
            }else {
                sumOdd += i
            }
        }
        console.log(sumEven - sumOdd);

    
}
solve([3,5,7,9])