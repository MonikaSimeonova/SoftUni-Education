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