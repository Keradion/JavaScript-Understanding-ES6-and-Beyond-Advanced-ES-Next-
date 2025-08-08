class Person {
    #firstName;
    #lastName;
    
    constructor(fname, lname) {
        this.#lastName = lname;
        this.#firstName = fname;
    }

    get fname() {
        return this.#firstName;
    }

    set fname(fn) {
        this.#firstName = fn;
    }

    // the following filed defined as a private method
    // that means only accessable for other methods inside an object like fname set and fname get
    // and also greet
    // so only by methods from the prototype not by directly through the instance like greet
    #getPersonInfo() {
        // get data from a server
        return {
            id: 1
        }
    }

    greet() {
        return `Hello, ${this.#firstName} ${this.#lastName}: ${this.#getPersonInfo().id}`;
    }
}

let me = new Person('Tony', 'Alicea');
console.log(me.greet());