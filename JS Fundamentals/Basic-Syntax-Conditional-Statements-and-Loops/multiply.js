//Write a function that receives a number and prints as result that number multiplied by two.
function solve (input){
    console.log(input * 2)
}
solve (2);

//Write a function that receives a single number and checks if the grade is excellent or not. If it is, print "Excellent", otherwise print "Not excellent"
function solve (number){
    if (number >= 5.50){
        console.log("Excellent")
    } else {
        console.log("Not excellent")
    }
}
solve (4.5)

// Write a program, which prints the language, that a given country speaks. You can receive only the following combinations:

// · English is spoken in England and USA;

// · Spanish is spoken in Spain, Argentina, and Mexico;

// · For the others, we should print "unknown";

function solve (country){
    if (country === 'USA'){
        console.log('English');
    } else if (country == 'England'){
        console.log('English')
    } else if (country == 'Spain'){
        console.log('Spanish')
    } else if (country == 'Mexico'){
        console.log('Spanish')
    } else if (country === "Argentina"){
        console.log('Spanish')
    } else {
        console.log('unknown')
    }
}
solve('USA')

