class Person {
    // the following code is a class declaration
    // the keyword class is used to define or declare the class Person
}

let person = class {
    // the following code is a class expression
    // we have an anymous class with reference person
};

typeof(person); 

// returns 'function' 
// so that we conclude person refers to a function object
// that means what we get after running a function expression is a function object.

// the Javascript engine will add a special property
// isClassConstructor=True on the function object
// so that the function object can be considered as a class constructor.