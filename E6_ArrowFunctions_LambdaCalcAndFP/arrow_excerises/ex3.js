class Counter {
  count = 0;

  increment = () => {
    this.count++;
    console.log(this); 
    console.log(this.count);
  }
}

// we do have a function object called Counter
// it has a method on its prototype called increment 

// we get instance of Counter
const counter = new Counter();

// we call the increment on counter object
// so that this refers cuurent objects and we get count here  
const inc = counter.increment;
inc();  

// we get the same object count property again and ++
counter.increment(); 

