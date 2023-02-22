function minorTask(input) {

    let collection = {};

    for(let index = 0; index < input.length; index+=2){
        let resource = input[index];
        let quantity = Number(input[index+1]);

        if(!collection.hasOwnProperty(resource)){
            collection[resource] = 0;
        }
        collection[resource] += quantity;
    }
    for (const item in collection) {
        console.log(`${item} -> ${collection[item]}`);
    }
}
minorTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])