function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function(){
    console.log(`${this.name} says Hi`);
}
Person.prototype.toString = function(){
    console.log(`${this.name} is a ${this.age} year old person`);
}

function extend(personConstrunctor){
    personConstrunctor.prototype.species = 'Human'
    personConstrunctor.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}` //personConstrunctor.prototype.
    }
}
const person = new Person('Peter', 37)
console.log(person);

extend(Person)
console.log(person.species);

Person.prototype.species = 'homo sapiens'