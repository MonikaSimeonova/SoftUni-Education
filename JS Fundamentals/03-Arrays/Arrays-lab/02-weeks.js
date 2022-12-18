function weeks (days){
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if (days >= 1 && days <= 7){
        console.log(day[days - 1])
    } else {
        console.log("Invalid day!")
    }
}
weeks([3])

/*Write a program, which receives a number and prints the corresponding 
name of the day of the week (in English).

If the number is NOT a valid day, print: "Invalid day!". */