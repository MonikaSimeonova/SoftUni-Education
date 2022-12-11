function districy (arr){

    let uniqueNumbersArray = [];

    for(let i = 0; i < arr.length; i++){
        if(!uniqueNumbersArray.includes(arr[i])){
            uniqueNumbersArray.push(arr[i])
        }
    }
    console.log(uniqueNumbersArray.join(' '));

}
districy([7, 8, 9, 7, 2, 3,

    4, 1, 2])

    function setTry (arr){

        let uniqueNumbers = new Set(arr);
    
        let result
        console.log([...uniqueNumbers]);
    
    }
    setTry([7, 8, 9, 7, 2, 3,
    
        4, 1, 2])