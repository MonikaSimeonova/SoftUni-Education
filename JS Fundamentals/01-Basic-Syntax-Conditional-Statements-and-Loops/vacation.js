function vacation(people, groupType, dayOfWeek) {

    let totalPrice = 0

    switch (groupType) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                totalPrice = people * 8.45;
            } else if (dayOfWeek === 'Saturday') {
                totalPrice = people * 9.80
            } else if (dayOfWeek === 'Sunday') {
                totalPrice = people * 10.46
            }
            if (people >= 30) {
                totalPrice = totalPrice * 0.85
            }
            break;
        case 'Business':
            if (people >= 100) {
                people -= 10;
            }
            if (dayOfWeek === 'Friday') {
                totalPrice = people * 10.90;
            } else if (dayOfWeek === 'Saturday') {
                totalPrice = people * 15.60
            } else if (dayOfWeek === 'Sunday') {
                totalPrice = people * 16
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                totalPrice = people * 15;
            } else if (dayOfWeek === 'Saturday') {
                totalPrice = people * 20
            } else if (dayOfWeek === 'Sunday') {
                totalPrice = people * 22.50
            }
            if (people >= 10 && people <= 20) {
                totalPrice = totalPrice * 0.95
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

// You are given a group of people, the type of the group, and the day of the week they are going to stay. 
// Based on that information calculate how much they have to pay and print that price on the console. 
// Use the table below. In each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.
