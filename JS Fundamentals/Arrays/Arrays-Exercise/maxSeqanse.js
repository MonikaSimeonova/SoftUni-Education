function solve(arr){

    let count = 1
    let longestCount = 1
    let currentEquals = arr[0]
    let res = ''

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === arr[i-1]){
            count++
        } else {
            count = 1
        }

        if(count > longestCount ){
            currentEquals = arr[i]
            longestCount = count;
        }
    }
    for(let x = 0; x < longestCount; x++){
        res += currentEquals + ' '
    }
    console.log(res);

}