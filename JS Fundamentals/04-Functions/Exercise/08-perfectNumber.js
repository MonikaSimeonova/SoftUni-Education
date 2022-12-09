function perfectNumAccordingToWiki(number){

    let divisorSum = 1

    for(let i = 2; i <= number/2; i++){
        if(number % i == 0){
            divisorSum += i
        }
    }
    if(divisorSum === number){
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNumAccordingToWiki(6)