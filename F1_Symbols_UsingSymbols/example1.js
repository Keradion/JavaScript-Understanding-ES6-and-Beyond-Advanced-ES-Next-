class Person {
    firstName = 'Tony';

    greet() {
        return `Hi ${this.firstName}`;
    }
}

// Creating an Instance

let tony = new Person();

// Showing the equality of __proto__ on an Instance 
// and prototype object which is on the constructor class of an Instance 

console.log(tony.__proto__);
console.log(Person.prototype);
console.log(tony.__proto__ === Person.prototype); // true.

// Calling greet on the instance 
// greet is not directly on the instance tony 
// rather its stored on the prototype object of Person - so greet will be used from there.

// tony.__proto__.greet === Person.Prototype.greet 
console.log(tony.__proto__.greet === Person.prototype.greet); // true
console.log(tony.greet()); // Hi tony


// lets overwride greet method on the prototype object 
// of the constructor Person

tony.__proto__.greet = function () {
    return `Hello ${this.firstName}`;
}

// greet on the prototype changed 
console.log(tony.greet()); // Hello Tony


// WE OVERWRIDE THE METHOD GREET ON THE PROTOTYPE
// THAT MEANS ALL THE INSTANCES AFTER NOW WILL NOT HAVE ACCESS TO THE OLD GREET METHOD 
// RATHER THE NEW GREET METHOD WHICH HAS OVERWRIDE THE NEW ONE

// HERE WE ARE CREATING A NEW SYMBOL INSTANCE
// WE GET A NEW HASHCODE IN RETURNS
// THE NEWLY CREATED SYMBOL HAS A DESCRIPTION OF TEST

const new1 = Symbol('Test'); // same description with new2
const new2 = Symbol('Test'); // same description with new1
const new3 = Symbol(); // possible to omit the description 
console.log(new1);

// EVENIF TWO SYMBOLS HAS THE SAME DESCRIPTION
// THEIR HASHCODES ARE DIFFERENT OR UNIQUE
// SO THAT COMPARING THEM YIELDS FALSE

console.log(new1 === new2); // false

grade = new1;
welcome = new2;

class Student {
    [grade] = '12';
    [welcome] () {
        return `Hello grade ${this[grade]} Student.`;
    }
}

// [symobl] we have to set a symbol as a property in this way.
// the same way we access the value of the property/

const s1 = new Student();
console.log(s1);
console.log(s1[grade]); // 1st way
console.log(s1[welcome]()); // 2nd way

// assume we accedintly set the value of grade
// since grade is not in the object 
// as [grade] and grade are different 
// we have no access to the real property rather
// we are setting a new property grade and a new value 13.

s1.grade = '13';
s1.welcome = function () {
            return `Hello grade ${this.grade} Student.`;
}

// [grade] and grade are different

console.log(s1.grade);
console.log(s1[grade])

// welcome and [welcome] are different too

console.log(s1.welcome());
console.log(s1[welcome]());

