function magicMatrix(matrix) {
    let sumRows = 0;
    let sumCol = 0;

    for (let i = 0; i < matrix.length; i++) {
        let currentArr = matrix[i].join(''); 
        for (let j = 0; j < currentArr.length; j++) {
            sumRows += Number(currentArr[j]);
            sumCol += Number(currentArr[0])
            
        }      
    }
    if(sumRows === sumCol){
        console.log('true');
    }else{
        console.log('false');
    }


}
magicMatrix([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])