function sortByTwoCriteria(input){

    const sorted = input.sort((a,b)=>a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\n'));
}
sortByTwoCriteria(['alpha',
'beta','gamma'])