function solve(input) {

    let objectPlayers = {};
    for (const line of input) {
        let [name, cards] = line.split(': ');
        cards = cards.split(', ');

        if (!objectPlayers.hasOwnProperty(name)) {
            objectPlayers[name] = []
        }
        for (let i = 0; i < cards.length; i++) {

            if (!objectPlayers[name].includes(cards[i])) {
                objectPlayers[name].push(cards[i])
            }
        }

    }
    let kvp = Object.entries(objectPlayers);
    

    for (const line of kvp) {
        let sum = 0
        let name = line[0]
        let card = line[1]

        for(let i =0; i < card.length; i++){
            
            let hand = card[i];
            let power = hand[0];
            let color = hand[1];
           if(hand.length == 3){
                power = hand[0] + hand[1]
                color = hand[2]
           }
            
           

            if(isNaN(power)){
                switch(power){
                    case 'J': power = 11
                    break;
                    case 'Q': power = 12
                    break;
                    case 'K': power = 13
                    break;
                    case 'A': power = 14
                    break;

                }
            }else{
                power = Number(power);
            }

            switch(color){
                case 'S': color = 4
                break;
                case 'H': color = 3
                break;
                case 'D': color = 2
                break;
                case 'C': color = 1
                break;
            }

            sum += power * color
        }

        console.log(`${name}: ${sum}`);
    }

    

}