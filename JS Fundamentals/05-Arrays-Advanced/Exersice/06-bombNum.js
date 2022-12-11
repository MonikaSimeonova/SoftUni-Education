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
    [2, 1]
)