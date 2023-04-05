function barcode(input){
    let numberOfBarcods = Number(input.shift());
    let pattern = /([@{1}]#{1,})(?<name>[A-Z]{1}[A-Za-z\d]{4,}[A-Z]{1})([@{1}]#{1,})/g;
    let digits = /\d/g;

    for(let i = 0; i < numberOfBarcods; i++ ){
        if(input[i].match(pattern)){
            if(!input[i].match(digits)){
                console.log(`Product group: 00`);
            }else if(input[i].match(digits)){
                let digitsToConcat = input[i].match(digits)
                let sum = '';
                for (const digit of digitsToConcat) {
                    sum += digit;
                }
                console.log(`Product group: ${sum}`);
            }
        }else{
            console.log(`Invalid barcode`);
        }
    }

}
barcode(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
