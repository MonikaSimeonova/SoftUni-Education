function ages (input){
    let age = input
    if (age < 0){
        console.log('out of bounds')
    }
    else if (age <= 2){
        console.log('baby')
    } else if (age <= 13){
        console.log('child')
    } else if (age <= 19){
        console.log('teenager')
        
        
    } else if (age <= 65){
        console.log('adult')
    } else if (age >= 66 ){

        console.log('elder')
    } 
}

// Write a function that determines whether based on the given age a person is: baby, child, teenager, adult, elder.

// The input comes as a single number parameter. The bounders are:

// · 0-2 (age) – is a baby;

// · 3-13 (age) – is a child;

// · 14-19 (age) – is a teenager;

// · 20-65 (age) – is an adult;

// · >=66 (age) – is an elder;

// · In all other cases print – "out of bounds";

// The output should be printed to the console
