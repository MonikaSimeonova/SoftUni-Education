function bonuses(arr){

    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let additionalBonuses = Number(arr.shift());
    let bonus = 0
    let best = 0
    let bestCurrentAtendent = 0

    for(let i = 0; i < arr.length; i++){
        let currentAtendent = Number(arr[i]);

        if(bestCurrentAtendent < currentAtendent){
            bestCurrentAtendent = currentAtendent
        }

        bonus = currentAtendent / lectures * (5 + additionalBonuses)
        if(best < bonus){
            best = bonus
        }
    }
    console.log(`Max Bonus: ${Math.ceil(best)}.`);
    console.log(`The student has attended ${bestCurrentAtendent} lectures.`);
}