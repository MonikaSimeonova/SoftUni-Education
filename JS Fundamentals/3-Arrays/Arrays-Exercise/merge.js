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