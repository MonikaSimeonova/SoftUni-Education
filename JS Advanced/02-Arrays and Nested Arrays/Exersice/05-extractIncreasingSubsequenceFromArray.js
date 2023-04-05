function  extractIncrease(numbers){
    let biggestNum = numbers.shift();
    const finalResult = [biggestNum];
    for (const number of numbers) {
        if(number >= biggestNum){
            biggestNum = number;
            finalResult.push(number);
        }
    }
    return finalResult;
}
extractIncrease([1, 2, 3, 4])

function  extractIncreaseModify(numbers){
    
    const finalResult =[];
    let biggestNumber = numbers[0]
    return numbers.reduce((acc,currEle)=>{
        if(biggestNumber <= currEle){
            acc.push(currEle);
            biggestNumber = currEle;
        }
        return acc;
    }, []);

}
extractIncreaseModify([1, 2, 3, 4])