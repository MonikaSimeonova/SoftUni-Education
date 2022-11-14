function solve(arr, rotation){

    for(let i = 0; i < rotation; i++){

        arr.push(arr.shift())
    }
    console.log(arr.join(' '));
}