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

/*Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times). */