function printEveryNthNum(arr, step) {

    const newArr = [];
    for (let i = 0; i < arr.length; i += step) {
        newArr.push(arr[i])
    }
    return newArr;

}
printEveryNthNum(['5',
    '20',
    '31',
    '4',
    '20'],
    2)

function printEveryNthNum(arr, step) {

    return arr.filter((element, index) => {
        if(index % step == 0){
            return element;
        }
    })
    //shoter version
    //return arr.filter((element, index) =>index % step == 0);


}
printEveryNthNum(['5',
    '20',
    '31',
    '4',
    '20'],
    2)
