// someone else's code
class Person {
    // public filed firstName which is unique for each instances of Person class
    firstName = 'Tony';

    // public method greet which is stored on the prototype of Person function object 
    // created by the class syntax 
    greet() {
        console.log('inside greet');
        console.log(this);
        return `Hi ${this.firstName}`;
    }
}

// we can see the public method greet is on the prototype of the Person class Object
console.log(Person.prototype);

let orginalGreet = Person.prototype.greet;

let person = new Person();
console.log(person.__proto__); // Inherited from Person function object 
console.log(person.__proto__ === Person.prototype); // true

person.greet = function () {
    console.log(this);
    console.log('Another Greet ' + this.firstName);
}

person.greet();  // the Javascript engine access greet on the object directly 
// so that it will not move on the prototype chain to grab greet from the prototype of person class function object

console.log(orginalGreet.call(person)); // we are calling the orginal method defined inside the class Person

person.__proto__.greet = function () {
    console.log(this);
    console.log('greet overwrideen');
}

person.__proto__.greet(); // we overwrride the public method of the class 

console.log(Person.prototype); // the prototoype object now holds the new method we defined
