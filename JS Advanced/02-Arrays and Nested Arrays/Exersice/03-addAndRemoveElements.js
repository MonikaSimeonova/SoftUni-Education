function addAndRemoveEl(arr){

    const newArr = [];
    let counter = 1;
    for (let i =0; i < arr.length; i++){

        if(arr[i] == 'add'){
            newArr.push(counter++)
        }else if(arr[i] == 'remove'){
            newArr.pop(counter++);
        }
    }
    if(newArr.length <= 0){
        console.log("Empty");
    }else{
        console.log(newArr.join('\n'));
    }
}
addAndRemoveEl(['add',
'add',
'add',
'add'])