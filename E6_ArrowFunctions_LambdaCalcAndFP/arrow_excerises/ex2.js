const user = {
  name: 'Alice',
  greetAfterDelay: function() {
    console.log(this) // its is 'user'
      setTimeout(() =>  {
      console.log(this); // window object | now this referes user object 
      console.log(`Hello, ${this.name}`); // no 'name' property on the window object | the name property from the user object 
    }, 1000);
  }
};

user.greetAfterDelay(); // Logs: Hello, undefined


