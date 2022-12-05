function palindromeIntegers(arr){

    for(let index = 0; index < arr.length; index++){

        let numberAsString = arr[index].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if(numberAsString == reversedString){
            console.log(true);

        } else {
            console.log(false);
        }
    }

}
palindromeIntegers([123,323,421,121])