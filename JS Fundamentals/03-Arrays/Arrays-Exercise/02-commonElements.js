function commonElements (firstArray, secondArray){

    for(let firstIndex = 0; firstIndex < firstArray.length; firstIndex++){
        for(let secondIndex = 0; secondIndex < secondArray.length; secondIndex++){
            if(firstArray[firstIndex] === secondArray[secondIndex]){
                console.log(firstArray[firstIndex]);
            }
        }
    }

}

for (const element of firstArray){

    if (secondArray.includes(element)){
        console.log(element);
    }
}
// shorter 
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])

/*Write a function, which prints common elements in two string arrays. 
Print all matches on separate lines. 
Compare the first array with the second array */