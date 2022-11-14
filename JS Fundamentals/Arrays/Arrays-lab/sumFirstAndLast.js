function sumFirstAndLast(array){

     const first = array[0]
     const last = array[array.length - 1]
     let sum = Number(first) + Number(last)
     console.log(sum);
}
sumFirstAndLast([20, 30, 40])
