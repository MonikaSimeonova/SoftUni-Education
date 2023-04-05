class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        }
        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }

    completeness(participantName, condition) {

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        }
        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        }

        let completedCount = Math.floor(condition / 30);
        if (completedCount == 1 || completedCount == 2) {
            return `${participantName} could only complete ${completedCount} of the disciplines`
        }

        for (const [name, gender] of Object.entries(this.participants)) {
            if (name === participantName) {
                this.listOfFinalists.push({ name, gender })
                delete this.participants.name
            }
        }


        //console.table(this.participants);
        //console.table(this.participants)
        return `Congratulations, ${participantName} finished the whole competition`
    }
    rewarding(participantName) {
        let isHere = this.listOfFinalists.find(p => p.name == participantName)

        if (!isHere) {
            return `${participantName} is not in the current finalists list`
        }
        return `${participantName} was rewarded with a trophy for his performance`
    }
    showRecord(criteria) {
        if (this.listOfFinalists.length == 0) {
            return `There are no finalists in this competition`
        }
        if (criteria == 'male') {
            let isGender = this.listOfFinalists.find(g => g.gender == criteria)
            if (!isGender) {
                return `There are no ${criteria}'s that finished the competition`
            }
            return `${isGender.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;

        } else if (criteria == 'female') {
            let isGender = this.listOfFinalists.find(g => g.gender == criteria)
            if (!isGender) {
                return `There are no ${criteria}'s that finished the competition`
            }
            return `${isGender.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else {
            let result = [`List of all ${this.competitionName} finalists:`]
            this.listOfFinalists.map(f=> result.push(`${f.name}`))
            return result.join('\n')
        }
    }

}
    



// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline


const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon
