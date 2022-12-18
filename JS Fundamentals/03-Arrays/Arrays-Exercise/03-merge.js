function solve(arr1, arr2){

    let res = []
    let sum = 0
    let con = ''


    for(let i = 0; i < arr1.length; i++){
        
            if(i % 2 == 0){
                sum = Number(arr1[i]) + Number(arr2[i])
                res.push(sum)

            } else {
                con = arr1[i] + arr2[i]
                res.push(con)
            }
        

    }
    console.log(res.join(' - '));
}
solve(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])

/*Write a function, which receives two string arrays and merges them into a third array.
· If the index of the element is even, add into the third array the sum of both elements at that index
· If the index of the element is odd, add the concatenation of both elements at that index
As input, you will receive two string arrays (with equal length).

As output, you should print the resulting third array, each element separated by " - ". */