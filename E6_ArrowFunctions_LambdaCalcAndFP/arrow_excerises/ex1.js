var firstName = 'Daniel'; // setting firstName in global execution context will force the arrow function to grab this value 

let person = {
  firstName: 'Tony',
  lastName: 'Alicea',

  // we do have a public method logFullName
  // and its an arrow function 
  // since an arrow function has no 'this' in their execution context
  // it will try to bring what this refers from the outer execution context 
  // in this case the global window object from the global execution context 
  // and there is no variable name firstname and lastname there
  // so it will log undefined

  // error - arrow function

  logFullName: () => {
    console.log(this);
    console.log(this.firstName + ' ' + this.lastName);
  },

  // solution - regular function
  
  logfullName: function () {
    console.log(this);
    console.log(this.firstName + ' ' + this.lastName);
  }

  
};

person.logFullName();  // undefined undefined 

person.logfullName(); // Tony alicea