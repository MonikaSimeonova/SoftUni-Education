function spiralMatrix(row, col){

    let num =1;
    let finalArr = [];
    for (let i = 0; i < row; i++) {
        let currArr = [];
        currArr.length = col;
        finalArr.push(currArr);
        
    }
    let startRowIndex =0;
    let startColonIndex = 0;

    while(startRowIndex < row && startColonIndex < col){
        for (let i = startColonIndex; i < col; ++i) {
                finalArr[startRowIndex][i] = num++;            
        }
        startRowIndex++;
        for (let i = startRowIndex; i < row; i++) {
            finalArr[i][col - 1] = num++;            
        }
        col--;
        if(startRowIndex < row){
            for (let i = col-1; i >= startColonIndex; --i) {
                finalArr[row-1] [i]  = num++        
            }
            row--;
        }
        if(startColonIndex < col){
            for (let i = row-1; i >= startRowIndex; --i) {
                finalArr[i][startColonIndex] = num++                
            }
            startColonIndex++;
        }
    }
    finalArr.forEach((row)=>console.log(row.join(' ')))
}
spiralMatrix(5, 5)
// 1 2 3 4 5 
//16 17 18 19 6 
//15 24 25 20 7 
//14 23 22 21 8 
//13 12 11 10 9