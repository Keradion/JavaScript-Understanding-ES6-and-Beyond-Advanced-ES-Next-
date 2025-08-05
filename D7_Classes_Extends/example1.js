class Person {
    firstName;

    // class constructor to set inital values for instances 
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return 'hello ' + this.firstName;
    }
}

// Instance of Person
let me = new Person('Daniel');

// lets call greet 
console.log(me.greet());

// do we have the method greet on the me instance ?
console.log(me);

// we dont have that method 
console.log(me.__proto__);

// __proto__ is a reference to prototype object on the class Person
console.log(Person.prototype);
console.log(me.__proto__ === Person.prototype);

class Student extends Person { // extends extend the prototypal chain 
    sayHi() {
        return 'hi';
    }
}

// since we have use extend over Person
// evenif we dont have a constructore defined in our class
// we can still use the constructor inside Person

let student = new Student('Abebe');
console.log(student);

// lets call greet 
console.log(student.greet());

// we can call greet even if we dont have that method inside Student 
// since we extend person class we have an access to its prototype object
// the prototype object is where the greet method exists (on the prototype chain down the road).

// .__proto__ here referce to the prototype object on the Student class
console.log(student.__proto__);

// referce the prototype of Person from student
console.log(student.__proto__.__proto__);
console.log(student.__proto__.__proto__ === Person.prototype);

// the prototype of student
console.log(Student.prototype);

// to see what it extends
console.log(Student.prototype.__proto__);
console.log(Student.prototype.__proto__ === Person.prototype);

// referce the class extended 
console.log(Student.__proto__);


// we can extend built in class's

class myNumber extends Number {
    add () {
        return this + 1;
    }
}

let my = new myNumber();

// the instance my has an access to prototype object of the built in class Number
console.log(my.__proto__.__proto__);

// so we can access the methods from that class
console.log(my.toFixed(5.55));

console.log(my.add())