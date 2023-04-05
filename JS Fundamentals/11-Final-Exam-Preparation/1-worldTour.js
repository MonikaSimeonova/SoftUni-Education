function worldTour(input){

    let travelStr = input.shift();
    let nextLine = input.shift();
 
    while(nextLine != 'Travel'){
         nextLine = nextLine.split(':');
         let command = nextLine[0];
         
         if(command == 'Add Stop'){
             let index = Number(nextLine[1]);
             if(travelStr[index] !== undefined){
                 let addDestination = nextLine[2];
                 travelStr = travelStr.substring(0,index) + addDestination + travelStr.substring(index);
                 console.log(travelStr);
             }else{
                 console.log(travelStr);
             }
        
         }else if(command == 'Remove Stop'){
             let startIndex = Number(nextLine[1]);
             let endIndex = Number(nextLine[2]);
             if(travelStr[startIndex] !== undefined && travelStr[endIndex] !== undefined){
                 travelStr = travelStr.slice(0,startIndex) + travelStr.slice(endIndex+1);
                 console.log(travelStr);
             }else{
                 console.log(travelStr);
             }
         }else if (command == 'Switch'){
             let oldString = nextLine[1];
             let newString = nextLine[2];
             if(travelStr.includes(oldString)){
                 travelStr = travelStr.replace(oldString,newString);
                 console.log(travelStr);
             }else{
                 console.log(travelStr);
             }
         }
         nextLine = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${travelStr}`);
     
 
 }
 worldTour((["Hawai::Cyprys-Greece",
 "Add Stop:7:Rome",
 "Remove Stop:11:16",
 "Switch:Hawai:Bulgaria",
 "Travel"])
 )