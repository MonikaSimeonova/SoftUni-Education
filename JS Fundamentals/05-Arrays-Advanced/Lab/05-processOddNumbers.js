function oddNumbers(numbers) {

    let result = numbers.filter((x, i) => (i + 1) % 2 === 0).map(x => x * 2).reverse();
    console.log(result.join(' '));
}

oddNumbers([10, 15, 20, 25])

/*You are given an array of numbers. 
Write a function that prints the elements at odd positions from the array,
doubled and in reverse order.

The input comes as an array of number elements.

The output is printed on the console on a single line, separated by space. */