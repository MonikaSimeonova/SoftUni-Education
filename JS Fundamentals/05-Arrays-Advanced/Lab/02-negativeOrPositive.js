function numberSign(arrayOfNums){

    let finalNums = [];

    for (const element of arrayOfNums) {
        let firstNum = Number(element);

        if(firstNum < 0){
            finalNums.unshift(firstNum);
        } else {
            finalNums.push(firstNum);
        }
    }

    for (const number of finalNums) {
        let logNumber = Number(number)
        console.log(logNumber);
    }
}

numberSign(['3', '-2', '0', '-1'])