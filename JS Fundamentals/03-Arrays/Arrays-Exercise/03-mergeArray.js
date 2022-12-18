function mergeArray (firstArray, secondArray){

    let resultArray = [];

    for(let index =0; index < firstArray.length; index ++){

        if (index % 2 === 0){
            resultArray.push(Number(firstArray[index]) + Number(secondArray[index]))
        } else {
            resultArray.push(firstArray[index] + secondArray[index])
        }
    }
    console.log(resultArray.join(' - '))

}
mergeArray(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])
/*Write a function, which receives two string arrays and merges them into a third array.
· If the index of the element is even, add into the third array the sum of both elements at that index
· If the index of the element is odd, add the concatenation of both elements at that index
As input, you will receive two string arrays (with equal length).

As output, you should print the resulting third array, each element separated by " - ". */
