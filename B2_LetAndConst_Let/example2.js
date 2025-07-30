// not an error with 'var'
let firstname = 'Tony';
let firstname = 'Dani';
console.log(firstname);

// we declared the variable firstname with let and assigned a value 'tony'
// so in the global execution context the variable firstname has stored in the lexical environment

// now we try to re declare  firstname again with let 
// since we have already declared firstname with let and stored it in the lexical environment

// it is not possible to re declare the same variable with let 