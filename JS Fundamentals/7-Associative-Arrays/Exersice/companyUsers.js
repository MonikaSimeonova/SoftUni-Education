function comanyUsers(input){

    let result = {};

    input.forEach(line => {
        let [companyName, personID] = line.split(' -> ');
        if(!result.hasOwnProperty(companyName)){
            result[companyName] = [];
        }
        result[companyName].push(personID);
    });

    let sortedComapnies = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]))

    sortedComapnies.forEach(el => {
        let companyName = el[0]
        let allIds = el[1]

        console.log(companyName);
        let uniqueIDs = new Set(allIds);

        for (const id of uniqueIDs) {
            console.log(`-- ${id}`);
        }
    });
}
comanyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 
'Microsoft -> CC12345', 'HP -> BB12345' ])