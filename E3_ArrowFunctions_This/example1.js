/*
  - Demonstrating how this behaves inside an arow functions.
*/

// here we have an object called me.

let me = {
    firstName: 'Tony',

    // the following method inside an object called me
    // has a function expression inside of it 
    // and calling the function again 

    greet: function() {
        // based on the way greet is called
        // the following code refere this as the object calling greet - me.
        console.log(this);

        let logMe = function() {
            console.log(this); // so the output will be the window object.
        }

        // but here logMe is behaving differently.
        // a regular function logMe has this in its execution context which refers window in non strict mode
        // and refers 'undefine' in strict mode 
        logMe();
    },
    greet2: function() {
        console.log(this); // this refers me.

        // here incase of an arrow function 
        // it has no this inside of its execution context 
        // therefore using its reference power 
        // it grabs this from the outer excution contexct lexically.
        // so this in such case will be what is defined inside the outer greet ()
        // the current object me.
        let logMe = () => {
            console.log(this);
        }
        logMe();
    }
}

me.greet();
me.greet2();

// in general use arrow function expression 
// except the use of standard function expression is required.