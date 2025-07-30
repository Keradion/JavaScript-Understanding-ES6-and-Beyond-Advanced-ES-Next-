let person = {firstnames: ['Tony', 'Anthony']};

for (let person of person.firstnames) {
    console.log(person);
}

// we do have the variable person in the outer lexical environment 
// and we do have the same variable person defined with let inside the block defined by the loop


// person.firstname will cause an error
// we think we are accessing the person variable defined in the outer lexical environment
// but since we have person defined inside the same lexical environment
// we get undefined as an output