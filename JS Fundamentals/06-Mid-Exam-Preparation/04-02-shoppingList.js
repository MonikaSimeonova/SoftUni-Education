function shoppingList(input) {

    let rawList = input.shift()
    let initialShoppingList = rawList.split('!');

    let commands = input.slice(); // kopie

    let currentCommand = commands.shift();

    while (currentCommand !== 'Go Shopping!') {

        let lineArgs = currentCommand.split(' ');
        let command = lineArgs[0]
        let firstArgument = lineArgs[1]
        let secondArgument = lineArgs[2]

        switch (command) {
            case 'Urgent':
                if (!initialShoppingList.includes(firstArgument)) {
                    initialShoppingList.unshift(firstArgument)
                }
                break;
            case 'Unnecessary':
                let itemIndex = initialShoppingList.indexOf(firstArgument);
                if (itemIndex > -1) {
                    initialShoppingList.splice(itemIndex, 1);
                }

                //initialShoppingList = initialShoppingList.filter(x => x != firstArgument)
                break;
            case 'Correct':
                let updateIndex = initialShoppingList.indexOf(firstArgument)
                if (updateIndex > -1) {
                    initialShoppingList[updateIndex] = secondArgument
                }
                break;

            case 'Rearrange':
                let removeIndex = initialShoppingList.indexOf(firstArgument)

                if (removeIndex > -1) {
                    let element = initialShoppingList[removeIndex]
                    initialShoppingList.splice(removeIndex, 1)
                    initialShoppingList.push(element)
                }

                break;
        }

        currentCommand = commands.shift(); // za da se povtarq sus sledvashtata
    }

    console.log(initialShoppingList.join(', '));


}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])


/*You will receive an initial list with groceries separated by an exclamation mark "!".
After that, you will be receiving 4 types of commands until you receive "Go Shopping!".
•	"Urgent {item}" - add the item at the start of the list.  If the item already exists, skip this command.
•	"Unnecessary {item}" - remove the item with the given name, only if it exists in the list. Otherwise, skip this command.
•	"Correct {oldItem} {newItem}" - if the item with the given old name exists, change its name with the new one. Otherwise, skip this command.
•	"Rearrange {item}" - if the grocery exists in the list, remove it from its current position and add it at the end of the list. Otherwise, skip this command.
Constraints
•	There won't be any duplicate items in the initial list
Output
•	Print the list with all the groceries, joined by ", ":
"{firstGrocery}, {secondGrocery}, … {nthGrocery}"
 */