class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }
}

class Tony extends Person {
    constructor() {
        super('Tony'); // we are invoking the constructor defined inside Person class.
    }

    greet() {
        let greeting = super.greet(); // since we extend person which has the method greet. we call it through super().
        return `${greeting}. I'm Tony`;
    }

    meet() {
        return `Nice to meet you.`;
    }
}

let me = new Tony();
console.log(me.greet());