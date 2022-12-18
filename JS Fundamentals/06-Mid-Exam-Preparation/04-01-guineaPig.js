function guineaPig(arr){

    let food = Number(arr.shift())*1000
    let hay = Number(arr.shift())*1000
    let cover = Number(arr.shift())*1000
    let weigthPig = Number(arr.shift())*1000
    let eatPerday = 300
    let counter = 0
    let percent = 0
    let coverCorection = 0

    for(let i = 1; i <= 30; i++){
        counter++
        food -= eatPerday
        if(counter % 2 == 0){
            percent = food * 0.05
            hay -= percent
        }
        if(counter % 3 == 0){
            coverCorection = (weigthPig * 1/3).toFixed(2)
            cover -= coverCorection
        }
        if(food <= 0 || cover <= 0 || hay <= 0){
            console.log('Merry must go to the pet store!');
            break;
        }


    }
    if(food > 0 && cover > 0 && hay > 0){
        console.log(`Everything is fine! Puppy is happy! Food: ${(food/1000).toFixed(2)}, Hay: ${(hay/1000).toFixed(2)}, Cover: ${(cover/1000).toFixed(2)}.`);
    }



}
guineaPig(["1", 
"1.5", 
"3", 
"1.5"
])

