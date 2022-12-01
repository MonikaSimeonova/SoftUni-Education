function solve (num){
    let odd = 1
    let sum = 0
    for (let i = 0; i < num; i++){
        console.log(odd)
        sum += odd
        odd += 2;
    }

    console.log (`Sum: ${sum}`)
}

//Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
