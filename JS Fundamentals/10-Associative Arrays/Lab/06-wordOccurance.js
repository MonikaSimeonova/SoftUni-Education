function words(input){

    let objectWords = {};

    for (const line of input) {
       

        if(!objectWords.hasOwnProperty(line)){
            objectWords[line] = 0
        }
        objectWords[line]++
    }

    let sortedObj = Object.entries(objectWords).sort((a,b) => b[1] - a[1]);

    for (const [word,num] of sortedObj) {
        console.log(`${word} -> ${num} times`);
    }

}
words(["dog", "bye", "city", "dog", "dad",

"boys", "ginger"])