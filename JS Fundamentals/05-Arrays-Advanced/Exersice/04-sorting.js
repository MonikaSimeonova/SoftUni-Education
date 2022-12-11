function sorting(arr){

    let sortedArray = arr.sort((a, b) => a - b);
    let res = []
    //let copyArr = sortedArray.slice(0) // kopirame masiva
    for(let i = 0; i < sortedArray.length; i++){
        let lastElement = sortedArray.pop()
        let firstArr = sortedArray.shift()
        
        res.push(lastElement)
        res.push(firstArr)
    }
    res.push(sortedArray.pop())
    res.push(sortedArray.shift())

    console.log(res.join(' '))

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])