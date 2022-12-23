function orders(product, quantity){

    let price = 0
    if(product === 'water'){
        price = 1.00
    } else if (product === 'coffee'){
        price = 1.50
    } else if(product === 'coke'){
        price = 1.40
    } else {
        price = 2.00
    }

    console.log((price * quantity).toFixed(2));
}
orders("water", 5)

/*Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are:
 coffee - 1.50
 water - 1.00
 coke - 1.40
 snacks - 2.00
Print the result formatted to the second decimal place.*/