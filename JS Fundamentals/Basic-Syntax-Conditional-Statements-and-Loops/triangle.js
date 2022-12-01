function triangle (number){

    for(let i = 1; i <= number; i++){

        let row ='';
        for(let j = 1; j <= i; j++){
            row += `${i} `;
        }
        console.log(row)
    }

}
triangle(3)

//Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the example
