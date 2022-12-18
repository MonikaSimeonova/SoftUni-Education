function reverseArray(count, numbers){
    let result = [];
    for(let i = 0; i < count; i++){
        result[count - 1 - i] = numbers[i]
    }
    console.log(result.join(' '));
}
reverseArray(3, [10, 20, 30, 40, 50])

/*Write a program, which receives a number n and an array of elements. 
Your task is to create a new array with n numbers from the original array, 
reverse it and print its elements on a single line, space-separated. */