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
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ])
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])

/*Input / Constraints
You will receive a journal with some collecting items, separated with a comma and a space (", "). After that, until receiving "Craft!" you will be receiving different commands split by " - ":
•	"Collect - {item}" - you should add the given item to your inventory. If the item already exists, you should skip this line.
•	"Drop - {item}" - you should remove the item from your inventory if it exists.
•	"Combine Items - {old_item}:{new_item}" - you should check if the old item exists. If so, add the new item after the old one. Otherwise, ignore the command.
•	"Renew – {item}" – if the given item exists, you should change its position and put it last in your inventory.
Output
After receiving "Craft!" print the items in your inventory, separated by ", ".
 */