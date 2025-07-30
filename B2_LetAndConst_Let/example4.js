let firstname = 'Tony';

{
    let firstname = 'Anthony';
    console.log(firstname); // here we access firstname from the lexical environment defined by the currly braces. Anthony.
}

console.log(firstname); // here the code access the exact lexical environemnt where firstname is declared. Tony.