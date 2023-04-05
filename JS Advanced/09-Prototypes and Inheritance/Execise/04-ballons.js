function ballons(){
    class Balloon {
        constructor(balloonColor, gasWeight){
            this.color = balloonColor;
            this.gasWeight = gasWeight
        }
    }
    class PartyBallon extends Balloon {
        constructor(balloonColor, gasWeight, ribbonColor, ribbonLenght){
            super(balloonColor, gasWeight)
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLenght,
            }
        }
        get ribbon(){
            return this._ribbon
        }
    }
    class BirthdayBallon extends PartyBallon {
        constructor(balloonColor, gasWeight, ribbonColor, ribbonLenght, text){
            super(balloonColor, gasWeight, ribbonColor, ribbonLenght)
            this._text = text;
        }
        get text(){
            return this._text;
        }
    }
    return{
        Balloon,
        PartyBallon,
        BirthdayBallon
    }
}
let ballonss = ballons();
let testBalloon = new ballons('pink', 20.5)
console.log(testBalloon);
let testPartyBallon = new ballons.PartyBallon('red', 55.5,'blue', 5)
console.table(testPartyBallon);
let testBirthdayBallon = new ballons.BirthdayBallon('Gold', 35.55, 'white', 5, 'hello')
console.log(testBirthdayBallon);