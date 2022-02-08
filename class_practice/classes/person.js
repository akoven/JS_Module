class Person{
    constructor(firstname,lastname,age){
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    }

    introduce(){
        console.log(`Hi, I'm ${this.firstname} ${this.lastname}, and I'm ${this.age} years old.`);
    }
    static introducePeople(people){
        if(Array.isArray(people) === false){//or if(!(people instanceof Array))
            return 'introducePeople only takes an array as an argument';
        }
        for (let i = 0; i < people.length; i++){
            let person = people[i];
            if(!(person instanceof Person)){
                console.log('All items in array must be Person class instances.');
                return;
            }
            person.introduce();
        }
    }
}

const john = new Person('John','Doe', 42);
const jeff = new Person('Jeff', 'Granof', 34);


Person.introducePeople([john, jeff]);
// console.log(john.introduce());//use if you're console logging in the static method
// console.log(jeff.introduce());

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
    module.exports = Person;
  } catch {
    module.exports = null;
  }
