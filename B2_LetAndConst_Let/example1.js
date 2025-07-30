// we have declared the variable firstname with the keyword 'let'
// that means inside the lexical variable environments of the global execution context
// we store the variable firstname and assigned the value 'tony'

// now we can acess the varaible from the global execution context and 
// from other lexical environments down below the global execution context

let firstname = 'Tony';

console.log(firstname); // not on the global object

// looking at window.firstname = undefined.
// we get 'undefined' as a return meaning even if the variable is declared inside the global execution context
// it is not attached to the global window object the same as variables declared with var keyword.