let person = {firstnames: ['Tony', 'Anthony']};

for (person of person.firstnames) {
    console.log(person);
}


// person will be accessed from the global execution context lexical environment.

console.log(person);
// we get anthony since we assign the values from the array during each iteration.
