function seachForNumber(nums, actions){

    let numbersToTake = actions[0]
    let numbersToDelete = actions[1]
    let specialNum = actions[2]
    let takenNumbers = nums.slice(0,numbersToTake)
    takenNumbers.splice(0,numbersToDelete)

    let counter = 0

    for(let element of takenNumbers){
        if(element === specialNum){
            counter++
        }
    }console.log(`Number ${specialNum} occurs ${counter} times.`);



}
seachForNumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])

/*You will receive two arrays of integers. The second array is containing exactly three numbers.

The first number represents the number of elements you have to take 
from the first array (starting from the first one).

The second number represents the number of elements you have to delete 
from the numbers you took (starting from the first one).

The third number is the number we search in our collection after the manipulations.

As output print how many times that number occurs in our array in the following format:

"Number {number} occurs {count} times." */