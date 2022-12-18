function sumFirstAndLast(array){

     const first = array[0]
     const last = array[array.length - 1]
     let sum = Number(first) + Number(last)
     console.log(sum);
}
sumFirstAndLast([20, 30, 40])

/*Write a function that receives an array of numbers and prints 
the sum of the first and last element in that array. */
