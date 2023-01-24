function dicktuanary(input) {

    let arr =[];
    let books = {};

   for (let name of input) {
    let parsedJson = JSON.parse(name);

        for (let key in parsedJson) {
            books[key] = parsedJson[key];
        }
    
   }
   for(let key in books){
    arr.push(`Term: ${key} => Definition: ${books[key]}`)
   }

   console.log(arr.sort().join('\n'));


}