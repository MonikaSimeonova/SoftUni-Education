function townsToJSON(input){
const townsArr = [];
for (let i = 1; i < input.length; i++) {
    const tokens = input[i].split(/\s*\|\s*/g) ;
    const towns = tokens[1];
    const latitude = Number(tokens[2]).toFixed(2)
    const longtitute = Number(tokens[3]).toFixed(2)

    const currObj = {
        Town : towns,
        Latitude: Number(latitude),
        Longitude: Number(longtitute)
    }
    townsArr.push(currObj)

}
console.log(JSON.stringify(townsArr));

}
townsToJSON(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])