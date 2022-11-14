function rounding (number, precision){

    if(precision > 15){
        precision = 15;
    }

    let finalNUm = number.toFixed(precision)

    console.log(parseFloat(finalNUm));
}