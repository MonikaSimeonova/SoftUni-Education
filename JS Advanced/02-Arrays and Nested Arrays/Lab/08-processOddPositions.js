function processOddPositions(arr) {

    const filtred = arr.filter((x, i) => i % 2 == 1);
    const doubled = filtred.map(x => x * 2);
    const reversed = doubled.reverse();
    const res = reversed.join(' ');

    //return res; 

    //shorter solve

    return arr
        .filter((x, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');


}
processOddPositions([10, 15, 20, 25])

/*You are given an array of numbers. Write a JS function that returns the elements 
at odd positions from the array, 
doubled and in reverse order.
The input comes as an array of number elements.
The output is the return on the console on a single line, separated by space. */