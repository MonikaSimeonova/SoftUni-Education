function numbersChecker (numbers){

    let numArr = numbers.split(' ')
    let counter = 0
    let sum = 0
    let arrFinal = []
    
    for(let i = 0; i < numArr.length; i++){
        let currentEl = Number(numArr[i]);
        sum += currentEl
        counter++
    }
    let avg = sum / counter

    for(let j = 0; j < numArr.length; j++){
        let currentcheck = Number(numArr[j])

        if(avg < currentcheck){
            arrFinal.push(currentcheck)
        }
        
    }
    let sorted = arrFinal.sort(function(a,b){return b-a})
    let newArr = sorted

    if(newArr.length > 5){
        newArr.length = 5
        console.log(newArr.join(" "));
    } else if (newArr.length <= 5 && newArr.length >= 1){
        console.log(newArr.join(' '));
    }else{
        console.log('No');
    }
    
}
numbersChecker('10 20 30 40 50')

/* Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
Input
•	Read from the console a single line holding space-separated integers.
Output
•	Print the above-described numbers on a single line, space-separated. 
•	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
•	Print "No" if no numbers hold the above property.
Constraints
•	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
•	The count of numbers is in the range [1…10 000].
*/
