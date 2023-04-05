function sortNums(numsArr){
    let resultArr = [];
    const sortedArr = numsArr.sort((a,b)=> a-b);
    while(sortedArr.length !== 0){
        resultArr.push(sortedArr.shift());
        resultArr.push(sortedArr.pop())
    }
    return resultArr;
}
sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
