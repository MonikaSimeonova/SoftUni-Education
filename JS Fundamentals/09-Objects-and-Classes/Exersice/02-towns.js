function town(list){

    let townInfo = {};

    for (const line of list) {
        //let splitedLIne = line.split(' | ');
        let [townName, latitute, longtude] = line.split(' | ');

        townInfo.town = townName;
        townInfo.latitude = Number(latitute).toFixed(2);
        townInfo.longitude = Number(longtude).toFixed(2);
        console.log(townInfo);
    }
    

}
town(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])