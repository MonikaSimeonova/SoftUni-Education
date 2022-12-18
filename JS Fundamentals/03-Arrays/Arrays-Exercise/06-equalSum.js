function equalSum(arr) {

    let foundIndex = 'no';

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0

        for (let l = 0; l < i; l++) {
            leftSum = leftSum + arr[l];
        }

        for (let r = i + 1; r < arr.length; r++) {
            rightSum = rightSum + arr[r];
        }

        if(leftSum === rightSum){
            foundIndex = i
        }

    }

    console.log(foundIndex)
}
equalSum([1, 2, 3, 3])
/*Write a function that determines if there exists an element in the array of numbers 
such that the sum of the elements on its left is equal to the sum of the elements on its right.
If there are NO elements to the left/right, their sum is 0.

Print the index that satisfies the required condition or "no" if there is no such inde */