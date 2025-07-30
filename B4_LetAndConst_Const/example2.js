const firstname = 'Tony';
firstname = 'Anthony'; // error
console.log(firstname);

// the error occurs since we try to change the assignment
// we are trying to force the variable firstname to refer a new memory location
// does not work with const.