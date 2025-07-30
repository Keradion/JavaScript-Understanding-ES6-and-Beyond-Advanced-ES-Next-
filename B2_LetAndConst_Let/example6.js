let firstname = 'Tony';

switch (firstname) {
    case 'Tony':
         let lastname = 'Alicea';
        break;
    case 'Anthony':
        let lastname = 'P. Alicea';
        break;
}

// we only have a single lexical environment of the block defined by the {} which wraps the switch statement
// re declaration of the same variable with let inside the same lexical environment is not permitted.
// so we caught a declaration error.