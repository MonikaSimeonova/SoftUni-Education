function oddCurrences(words){

    let result = {};
    let allWords = words.split(' ').map(w => w.toLowerCase());

    for(let word of allWords){
        
        if(!result[word] == undefined){
            result[word] = 1;
        }else{
            result[word]++
        }
        
    }
    
    let res = '';

    for (const word of allWords) {
        if(result[word] % 2 === 1){
            res += `${word} `
            delete result[word];
        }
    }
    console.log(res);
}
oddCurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')