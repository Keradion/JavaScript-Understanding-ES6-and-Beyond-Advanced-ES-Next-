class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }
}

let me = new Person('Tony');
let me2 = new Person('Anthony');

console.log(me.greet());
console.log(me2.greet());

// .__proto__ is the prototype of the instance me
// we have a separate prototype object of the class Person
// and .__proto__ refers to that prototype object 
// the prototype object of the class holds all the methods 
// and instances refers or access the methods from the prototype object 

console.log(Person.prototype);
console.log(me.__proto__);

console.log(me);