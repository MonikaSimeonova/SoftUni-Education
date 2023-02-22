function oddCyresnces(words){

    let result = {};
    let allWords = words.split(' ').map(w => w.toLowerCase());

    for(let i =0; i < allWords.length; i++){
        
        if(!result.hasOwnProperty(allWords[i])){
            result[allWords[i]] = [];
        }
        result[allWords[i]].push(i);
    }
    let sorted = Object.entries(result).sort((a,b)=> a[1][0] - b[1][0]);
    let res = '';

    for (const el of sorted) {
        if(el[1].length % 2 !== 0){
            res += `${el[0]} `
        }
    }
    console.log(res);
}
oddCyresnces('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')