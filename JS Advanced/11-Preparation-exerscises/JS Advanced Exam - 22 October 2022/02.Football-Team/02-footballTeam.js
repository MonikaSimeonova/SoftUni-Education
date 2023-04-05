class footballTeam{
    constructor(clubName,country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
        this.nameArr = [];
    }
    newAdditions(footballPlayers){
        for (const line of footballPlayers) {
            let [name, age, playerValue] = line.split('/');
            playerValue = Number(playerValue)
            age = Number(age)

            const nameOfPlayer = this.invitedPlayers.findIndex(p=>p.name == name)

            if(nameOfPlayer !== -1){
                let index = nameOfPlayer;
                if(this.invitedPlayers[index].playerValue < playerValue){
                    this.invitedPlayers[index].playerValue = playerValue
                }
            }else{
                this.invitedPlayers.push({name,age,playerValue})
                if(!this.nameArr.includes(name)){
                    this.nameArr.push(name)
                }
            }
        }
        //console.table(this.invitedPlayers);
        return `You successfully invite ${this.nameArr.join(', ')}.`
        
    }
    signContract(selectedPlayer){
        let [name, playerOffer] = selectedPlayer.split('/');

        const nameOfPlayerIsPresent = this.invitedPlayers.find(p=>p.name === name);
        let index = this.invitedPlayers.findIndex(p=>p.name === name);

        if(!nameOfPlayerIsPresent){
            throw new Error(`${name} is not invited to the selection list!`);
        }else{
            if(this.invitedPlayers[index].playerValue > playerOffer){
                let priceDifference = this.invitedPlayers[index].playerValue - playerOffer;
                throw new Error(`"The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
            }
        }
        this.invitedPlayers[index].playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age){
        const nameCheck = this.invitedPlayers.find(p=>p.name == name)
        let index = this.invitedPlayers.findIndex(p=>p.name == name)
        if(!nameCheck){
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if(this.invitedPlayers[index].age < age){
            let diff = age - this.invitedPlayers[index].age;
            if(diff < 5){
                return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`
            }else if(diff > 5 ){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }else{
            return `${name} is above age limit!`
        }
    }
    transferWindowResult(){
        
        let result = ["Players list:"];
        this.invitedPlayers.map(p=> result.push(`Player ${p.name}-${p.playerValue}`))
        return result.join('\n')

    }
}

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

//You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Uncaught Error: Barbukov is not invited to the selection list!

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
//Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52


