function bombNum(numbers, bombNums) {

    let bombNum = bombNums[0]
    let removeNumbers = bombNums[1]

    let sum = 0

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i]

        if (currentNum == bombNum) {
            let index = numbers.indexOf(currentNum);
            let startingIndex = index - removeNumbers;
            let removedNumbers = 0;
            if (startingIndex < 0) {
                index = Math.abs(startingIndex);
                startingIndex = 0;
                removedNumbers = ((removeNumbers * 2) + 1) - index;
                i--;
            } else {
                removedNumbers = removeNumbers * 2 + 1;
                i--;
            }
            numbers.splice(startingIndex, removedNumbers);

        }

    }
    for (let j = 0; j < numbers.length; j++) {
        let current = numbers[j]
        sum += current
    }
    console.log(sum);

}
bombNum([2, 1, 2, 1, 1, 3, 1, 1, 2, 1],
    [2, 1])

/*Write a function that receives two parameters: sequence of numbers and special 
bomb number with a certain power.

Your task is to detonate every occurrence of the special bomb number and according 
to its power his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear.

The input contains two arrays of numbers. The first contains the initial sequence
and the second contains the special bomb number and its power.

The output is the sum of the remaining elements in the sequence. */