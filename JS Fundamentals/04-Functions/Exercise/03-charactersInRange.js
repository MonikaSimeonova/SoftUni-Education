function characterIntange (firstChar, secondChar){

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt())
    let rangeEnd = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt())
    let resString = '';

    for(let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++){
        let singleChar = (String.fromCharCode(currentChar));
        

        if(currentChar + 1 === rangeEnd){
            resString += `${singleChar}`
        } else {
            resString += `${singleChar} `
        }
    } 
    console.log(resString);

}
characterIntange('#',
':'
)