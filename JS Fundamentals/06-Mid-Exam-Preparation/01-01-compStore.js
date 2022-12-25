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
newComp([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
newComp([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
newComp([
    'regular'
    ])
      
/*Write a program that prints you a receipt for your new computer. You will receive the parts' prices (without tax) until you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
The taxes are 20% of each part's price you receive. 
If the customer is special, he has a 10% discount on the total price with taxes.
If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
If the total price is equal to zero, you should print "Invalid order!" on the console.
Input
•	You will receive numbers representing prices (without tax) until command "special" or "regular":
Output
•	The receipt should be in the following format: 
"Congratulations you've just bought a new computer!
Price without taxes: {total price without taxes}$
Taxes: {total amount of taxes}$
-----------
Total price: {total price with taxes}$"
Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price. Discount is only applicable to the final price!
 */