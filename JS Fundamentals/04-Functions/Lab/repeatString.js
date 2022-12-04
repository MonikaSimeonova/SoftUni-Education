function repeatString (stringInput, timesRepeat){

    console.log(stringInput.repeat(timesRepeat));
}
repeatString("abc", 3)

function repeatReturn (text, count){

    let res = '';
    for(let i = 0; i < count; i++){
        res += text
    }
    return res;
    
}
let finalRes = repeatReturn(3, 3)
console.log(finalRes);