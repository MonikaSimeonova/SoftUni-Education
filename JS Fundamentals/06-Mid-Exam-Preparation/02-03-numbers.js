function numbersChecker (numbers){

    let numArr = numbers.split(' ')
    let counter = 0
    let sum = 0
    let arrFinal = []
    
    for(let i = 0; i < numArr.length; i++){
        let currentEl = Number(numArr[i]);
        sum += currentEl
        counter++
    }
    let avg = sum / counter

    for(let j = 0; j < numArr.length; j++){
        let currentcheck = Number(numArr[j])

        if(avg < currentcheck){
            arrFinal.push(currentcheck)
        }
        
    }
    let sorted = arrFinal.sort(function(a,b){return b-a})
    let newArr = sorted

    if(newArr.length > 5){
        newArr.length = 5
        console.log(newArr.join(" "));
    } else if (newArr.length <= 5 && newArr.length >= 1){
        console.log(newArr.join(' '));
    }else{
        console.log('No');
    }
    
}