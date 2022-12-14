function firstLast(input){

    let count = input.shift();

    let firstElements = input.slice(0, count);
    let lastElements = input.slice(input.length - count);
 
    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
}
firstLast([2, 7, 8, 9])

/*Write a function that prints the first k and the last k elements from an array of numbers.

The input comes as an array of number elements. The first element represents the number k, 
all other elements are from the array that needs to be processed.

The output is printed on the console on two lines. On the first line, print the first k elements, 
separated by space. 
On the second line, print the last k elements, separated by space */