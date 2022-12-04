function matrix (num){
    
    let arr =[]

    for(let i = 1; i <= num;i++){
        let output = '';
        for(let k = 1; k <= num; k++){
            output += `${num} `
        }
        arr.push(output)

        
    }
    console.log(arr.join('\n'));
}
matrix(3)