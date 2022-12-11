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

/*Write a function that sorts an array of numbers so that the first element is the biggest one,
 the second is the smallest one, the third is the second biggest one, 
 and the fourth is the second smallest one, and so on.

Print the elements on one row, separated by a single space. */