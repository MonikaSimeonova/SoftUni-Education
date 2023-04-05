function townPopulation(arr) {

    let res = {};

    for (let line of arr) {
        const [town, population] = line.split('<->');

        if(!res[town]){
            res[town]= 0;
        }
        res[town] += Number(population);
    }
    for (const [town,population] of Object.entries(res)) {
        console.log(`${town}: ${population}`);
    }

}
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
