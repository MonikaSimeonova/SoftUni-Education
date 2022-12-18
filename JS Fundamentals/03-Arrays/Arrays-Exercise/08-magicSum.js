function solve(arr, number){

    for (let i = 0; i < arr.length - 1; i ++){
        let currentNum = arr[i];

        for(let j = i + 1; j < arr.length; j++){
            let nextNum = arr[j];
            if(currentNum + nextNum === number){
                console.log(`${currentNum} ${nextNum}`)
            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23], 8)

/*Write a function, 
which prints all unique pairs in an array of integers whose sum is equal to a given numbe */