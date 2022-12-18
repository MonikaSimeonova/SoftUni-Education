function sumEvenNum(numbers){

    let sum = 0
    for (let textNumber of numbers){
        let number = Number(textNumber)
        if (number % 2 == 0){
            sum += number

        }
    }
    console.log(sum);
}
sumEvenNum(['1','2','3','4','5','6'])

/*Write a program, which receives an array of strings, 
parse them into numbers, and sum only the even numbers */