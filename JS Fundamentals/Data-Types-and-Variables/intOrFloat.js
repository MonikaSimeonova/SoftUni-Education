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