// we define a class with an instance filed firstname
// so all instance of the following class will have the field firtsname='tony'

class Person {
    firstName = 'Tony';
}

// since Person has a property isClassConstructor=True
// we can only invoke it using the keyword new

let me = new Person();

// another instance 
let me2 = new Person();

console.log(me2);

// since the property firstname is a public property
// we can update it to a new value
me2.firstName = 'Anthony';

console.log(me);
console.log(me2);