function solve (first, second, third){
    let sum = first + second + third
    let type = ''

    if (Number.isInteger(sum)){
        type = 'Integer'
    } else {
        type = 'Float'
    }

    console.log(`${sum} - ${type}`)
}
solve(9, 100, 1.1)

/*You will receive 3 numbers. Your task is to find their sum and print result to the console in the following format: `{sum} - {type of the number (Integer or Float)}` */