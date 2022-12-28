function solve (arr){

    let numberAnswerd = Number(arr[0]) + Number(arr[1]) + Number(arr[2])//15
    let students = Number(arr[3])//20
    let left = 0
    let hour = 0
    let test = 0

    for (let i = 0; 0 < students; i++ ){
        hour += 1

        left = students - numberAnswerd 

        if(left <= 0){
            students = 0
        }
        students = left

        test += numberAnswerd
           

        
        if (hour % 4 == 0 ){
            hour += 1
        }
    }
    console.log(`Time needed: ${hour}h.`);
}