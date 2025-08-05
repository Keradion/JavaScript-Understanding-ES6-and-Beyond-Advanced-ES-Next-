class Person {
    firstName;
    // help us to assign inital value for the fileds
    // of objects of the person class
    constructor(name) {
        this.firstName = name;
        this.lastname = 'Alicea'; // evenif we dont have the filed specified in the class declaration
        // we can still create the property and assign a value
    }
}

let me = new Person('Tony');
let me2 = new Person('Anthony');

console.log(me);
console.log(me2);
console.log(typeof(me.__proto__));
console.log(Person.prototype);
console.log(me.__proto__ === Person.prototype);
console.log(me2.__proto__ === Person.prototype);