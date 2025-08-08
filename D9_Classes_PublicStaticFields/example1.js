class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }

    // The property defined as 'residence' does not have separate copies 
    // on each instances of the Person class
    // rather it sits on the function object class created by the keyword class
    // so that all instances and methods can share it together.

    // public static property 
    static residence = 'Earth';

    // public static method 
    // the following method is public static 
    // so that it will not be stored inside the class's prototype
    // rather its stored on the function object created by the class keyword 
    // so all logics that dont use any specific object property can be encapsulated with public static methods 

    static goodMorning() {
        return 'Good morning.';
    }
}

let me = new Person();

console.log(Person.goodMorning()); // can be accessed from the class with . operator since goodMorning is stored on the function object created by the keyword class so we use . to point the property and () to invoke the code part of the function object.
console.log(Person.residence); // can be accessed from the class

console.log(Person);

console.log(me.__proto__); // no goodMorning - since the public static method is stored in the class function object so not in the prototype object of the class.
console.log(me.goodMorning()); // error - since its a class level method and stored in the function object created by the class keyword as a property.

// If a method reference any of the fileds stored inside an instance, we need to keep it public.
// otherwise the instance will not have an access to that method 
// since the method is stored in the function object of the class
// not inside the prototype of the class 
// so that the instance can not access the method from the protoype object.
