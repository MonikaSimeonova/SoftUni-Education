function solve (dayType, age){
    let ticketPrice = 0
    switch(dayType){
        case 'Weekday':
            if ( 0 <= age && age <= 18){
            ticketPrice = 12
            }else if (18 < age && age <= 64){
            ticketPrice = 18
            }else if (64 < age && age <= 122){
                ticketPrice = 12
            }
            break;
        case 'Weekend':
            if ( 0 <= age && age <= 18){
                ticketPrice = 15
                }else if (18 < age && age <= 64){
                ticketPrice = 20
                }else if (64 < age && age <= 122){
                    ticketPrice = 15
                }
                break


        case 'Holiday':
            if ( 0 <= age && age <= 18){
                ticketPrice = 5
                }else if (18 < age && age <= 64){
                ticketPrice = 12
                }else if (64 < age && age <= 122){
                    ticketPrice = 10
                }

    }
    if (ticketPrice > 0){
    console.log (ticketPrice + '$')
    } else {
        console.log('Error')
    }
}

// A theatre is doing a ticket sale, but they need a program to calculate the price of a single ticket. 
//If the given age does not fit one of the categories, you should print "Error!". You can see the prices in the table below:

// Day / Age 0 <= age <= 18 18 < age <= 64 64 < age <= 122

// Weekday 12$ 18$ 12$

// Weekend 15$ 20$ 15$

// Holiday 5$ 12$ 10$
