let firstname = 'Tony';

switch (firstname) {
    case 'Tony':
        {
            let lastname = 'Alicea';
            break;
        }
    case 'Anthony':
        {
            let lastname = 'P. Alicea';
            break;
        }
}

// now we have 3 lexical environments 

// the first lexical environment which wraps the switch statements
// the second lexcical environment which wraps the firts case statement.
// the third lexical environment which wraps the second case statement.