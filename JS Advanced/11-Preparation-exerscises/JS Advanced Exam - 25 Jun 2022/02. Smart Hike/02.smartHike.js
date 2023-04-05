class SmartHike{
    constructor(username){
        this.username = username;
        this.goals = {}
        this.listOfHikes  = []
        this.resources = 100
    }

    addGoal (peak, altitude){
        if(this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`
        }
        this.goals[peak] = altitude
        return `You have successfully added a new goal - ${peak}`
    }
    hike (peak, time, difficultyLevel){
        if(!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals`)
        }
        if(this.goals.hasOwnProperty(peak)){
            if(this.resources <= 0){
                throw new Error("You don't have enough resources to start the hike")
            }
        }
        let currentResourses = time*10
        let diff = this.resources - currentResourses

        if(diff < 0){
            return "You don't have enough resources to complete the hike"
        }
        this.listOfHikes.push({ peak, time, difficultyLevel })
        this.resources -= currentResourses

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    }
    rest (time){
        let timeForRest = time * 10
        this.resources += timeForRest

        if(this.resources >= 100){
            this.resources = 100
            return `Your resources are fully recharged. Time for hiking!`
        }
        return `You have rested for ${time} hours and gained ${timeForRest}% resources`
    }
    showRecord (criteria){
        if(this.listOfHikes.length == 0){
            return `${this.username} has not done any hiking yet`
        }

        if(criteria == 'hard'){
            let hardFind = this.listOfHikes.filter(h=> h.difficultyLevel == criteria)
            let sorted = hardFind.sort((a,b)=>a.time - b.time)
            if(hardFind.length > 0){
                return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`
            }else{
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        }
        if(criteria == 'easy'){
            let easyFind = this.listOfHikes.filter(h=> h.difficultyLevel == criteria)
            let sorted = easyFind.sort((a,b)=>a.time - b.time)
            if(easyFind.length > 0){
                return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].peak} hours`
            }else{
                return `${this.username} has not done any ${criteria} hiking yet`
            }
        }
        if(criteria == 'all'){
            let result = ["All hiking records:"];
            this.listOfHikes.map(x=> result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`))
            return result.join('\n')
        }
    }
}


// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.addGoal('Musala', 2925));

// You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui 
// Musala has already been added to your goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.addGoal('Rui', 1706));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.hike('Rui', 3, 'easy'));
// console.log(user.hike('Everest', 12, 'hard'));

//You have successfully added a new goal - Musala
// You have successfully added a new goal - Rui
// You hiked Musala peak for 8 hours and you have 20% resources left 
// You don't have enough resources to complete the hike 
// Uncaught Error: Everest is not in your current goals

// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// You have successfully added a new goal - Musala
// You hiked Musala peak for 8 hours and you have 20% resources left 
// You have rested for 4 hours and gained 40% resources 
// Your resources are fully recharged. Time for hiking!

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

// Vili has not done any easy hiking yet
// Vili's best hard hike is Musala peak, for 8 hours
// All hiking records:
// Vili hiked Musala for 8 hours





