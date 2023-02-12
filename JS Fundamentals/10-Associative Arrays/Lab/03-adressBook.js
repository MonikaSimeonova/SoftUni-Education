function adresBook(input){

    let adressObject = {};

    for (const line of input) {
        let [name, adreses] = line.split(':');

        adressObject[name] = adreses
    }

    let adressBokkEntries  = Object.entries(adressObject);

    adressBokkEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0])); //[0] za key, [1] za stoinostta

    for (const entry of adressBokkEntries) {
        let name = entry[0];
        let adreses = entry[1]

        console.log(`${name} -> ${adreses}`);
    }

}
adresBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])