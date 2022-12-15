function inventory(arr){

    let items = arr.shift().split(', ');
    let commadns = arr.shift();

    while(commadns != 'Craft!'){
        let full = commadns.split(' - ');
        let word = full[0]
        let item = full[1]
        let combineItems = full[1].split(':')
        let oldItem = combineItems[0]
        let newItem = combineItems[1]
        
        

        if(word == 'Collect'){
            if(!items.includes(item)){
                items.push(item)
            }
        } else if (word == 'Drop'){
            if(items.includes(item)){
                let index = items.indexOf(item)
                items.splice(index,1)
            }
        }else if (word == 'Combine Items'){
                if(items.includes(oldItem)){
                let index = items.indexOf(oldItem)
                items.splice(index+1,0,newItem)
                //items.splice(index,0,removedItem)
            }
            
        } else if (word == 'Renew'){
            if(items.includes(item)){
                let index = items.indexOf(item)
                let removed = items.splice(index,1)
                items.push(removed)
            }
        }


        commadns = arr.shift();
    }
    console.log(items.join(', '));

}