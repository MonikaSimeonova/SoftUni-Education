function evenPositionEl (arr){

    res = [];
    
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            res.push(arr[i])
        }
    }
    console.log(res.join(' '));

}
evenPositionEl(['20', '30', '40','50', '60'])

/*Write a function that finds the elements at even positions in an array.
The input comes as an array of string elements.
The output is printed on the console. Collect all elements in a string, separated by space. */