function newComp (input){

    let totalPrice = 0
    let taxPrice = 0
    let isSpecial = false

    for(let i = 0; i < input.length; i++){
        let curretItem = (input[i])

        if(curretItem >= 0){
            curretItem = Number(input[i])
        }
        if(curretItem == 'special'){
            isSpecial = true
            continue;
        }
        if (curretItem == 'regular'){
            isSpecial = false;
            continue;
        }
        if(curretItem < 0){
            console.log('Invalid price!')
            continue;
        }
        totalPrice += curretItem

        
    }

    taxPrice = totalPrice * 0.20
    

    let finaltaxedPrice = totalPrice + taxPrice

    
    if(isSpecial){
        finaltaxedPrice *= 0.9
    }
    if(totalPrice == 0){
        console.log('Invalid order!');
    }else {

    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalPrice.toFixed(2)}$
    Taxes: ${taxPrice.toFixed(2)}$
    -----------
    Total price: ${finaltaxedPrice.toFixed(2)}$`);
    }


}