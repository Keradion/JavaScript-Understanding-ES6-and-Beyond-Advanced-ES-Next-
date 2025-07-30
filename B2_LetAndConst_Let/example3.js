let firstname = 'Tony';

{
    console.log(firstname); 
}

// we have declared the variable firstname in the outer execution context 
// firstname has stored inside the lexical environment with the value tony

// the code inside the currly braces has its own lexical environment 
// the lexical environment which is different from the one where firstname is declared.

// so accessing firstname inside the currly braces may not work.
// since the variable firstname is not inside the lexical environments of the block defined by the {}

// so the Js engine will go up to the next lexical environemnt and grab firtsname there.