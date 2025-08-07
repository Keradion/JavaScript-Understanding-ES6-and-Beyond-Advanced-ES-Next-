class Person {

    // the following 2 properties are on each instance 
    // since we use  #they are being private
    // that means we can not access them using . operator from the instance.
    // so we have to write a class setter and getter methods to access them.

    #firstName;
    #lastName;
    
    constructor(fname, lname) {
        this.#firstName = fname;
        this.#lastName = lname;
    }

    // the func fname help us to red the property firstName in the object 
    // since we can not directly access the property from the instance 
    // rather we call fname from the instance using the . operator to read its value.

    get fname() {
        return this.#firstName;
    }

    // the func set fname help us to set a value for the property firstname of an instance 
    // since we dont have direct access to this property using . operator.
    
    set fname(fn) {
        this.#firstName = fn;
    }

    greet() {
        return `Hello, ${this.#firstName}`;
    }
}

let me = new Person('Tony', 'Alicea');

console.log(me.greet());

me.fname = 'Anthony';

console.log(me.greet());

console.log(me.fname);