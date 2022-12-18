function arrayRotation (arrayToRotate, rotations){

    for(let index = 0 ; index < rotations; index ++){
        let numberToMove = arrayToRotate.shift();
        arrayToRotate.push(numberToMove);
    }
    console.log(arrayToRotate.join(' '))
}
arrayRotation([51, 47, 32, 61, 21], 2)

/*Write a function that receives an array and the number of rotations you have to perform.
Note: Depending on the number of rotations, the first element goes to the end.
Output
Print the resulting array elements separated by a single space */

// оther way

for(let index = 0 ; index < rotations; index ++){

    let firstElement = arrayToRotate[0];

    for(let innerIndex = 0; innerIndex < arrayToRotate.length; innerIndex++){
        arrayToRotate[innerIndex] = arrayToRotate[innerIndex + 1];

    }
    arrayToRotate[arrayToRotate.length-1] = firstElement
}