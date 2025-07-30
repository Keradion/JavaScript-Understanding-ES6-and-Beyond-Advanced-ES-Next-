let person = {firstnames: ['Tony', 'Anthony']};

for (let person of person.firstnames) {
    console.log(person);
}

// we do have the variable person in the outer lexical environment 
// and we do have the same variable person defined with let inside the block defined by the loop


// person.firstname will cause an error
// since we are trying to access person variable
// which is not initalized inside the lexical environment of the loop.
