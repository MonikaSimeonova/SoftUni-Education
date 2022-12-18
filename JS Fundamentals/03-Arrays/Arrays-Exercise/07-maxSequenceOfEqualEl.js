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
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])

/*Write a function that finds the longest sequence of equal elements in an array of numbers.

If several longest sequences exist, print the leftmost one */