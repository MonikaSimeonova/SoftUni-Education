function destinationMapper(str){

    const pattern =/([=\/])(?<name>[A-Z][A-Za-z]{2,})\1/g;
    let newStr = [];
    let validLocation = str.matchAll(pattern);
    
 

    for (const match of validLocation) {
        let destination = match.groups.name;
        newStr.push(destination)
        
    }
    let sum = newStr.join('').length
    if(sum <= 0){
        console.log('Destinations: ')
    }else{
        console.log(`Destinations: ${newStr.join(', ')}`);
    }
    console.log(`Travel Points: ${sum}`);   
    
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")