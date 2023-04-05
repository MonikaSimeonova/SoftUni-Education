function solution() {
    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    let sotredElement = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    function manager(str) {
        let [command, action, quantity] = str.split(' ');
        quantity = Number(quantity);
        if (command === 'prepare') {
            let recipe = library[action];

            for (let el in recipe) {
                if (recipe[el] * quantity > sotredElement[el]) {
                    return `Error: not enough ${el} in stock`
                }
            }
            for (let el in recipe) {
                sotredElement[el] -= recipe[el] * quantity
            }
            return "Success"
        } else if (command == 'restock') {
            sotredElement[action] += quantity;
            return 'Success'
        } else if (command == 'report') {
            let result = [];
            for (const el in sotredElement) {
                result.push(`${el}=${sotredElement[el]}`)
            }
            return `${result.join(' ')}`
        }
       
    }

    return manager;


}
let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("prepare burger 1 "));
console.log(manager("prepare turkey 1 "));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare burger 1")); 
console.log(manager("report")); 