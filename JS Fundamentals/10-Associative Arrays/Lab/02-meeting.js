function meeting(input){

    let meetings = {};

    for (const entry of input) {
        let [day, name] = entry.split(' ');

        if(meeting[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            meeting[day] = name;

            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, name]  of Object.entries(meeting)) {
        console.log(`${day} -> ${name}`);
    }

    // for(let day in meeting){
    //     console.log(`${day} -> ${meeting[day]}`);
    // }

}
meeting(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])