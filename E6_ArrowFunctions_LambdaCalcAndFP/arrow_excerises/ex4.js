class Button {
  constructor(label) {
    this.label = label;
    this.clickedCount = 0;
  }

  // The click handler is assigned as a regular method
  handleClick() {
    this.clickedCount++; // will be 1 
    console.log(`${this.label} clicked ${this.clickedCount} times`);
  }

  simulateClick() {
    console.log(this) // this refers here the button object 
    // Simulate the click event calling the handler without binding
    setTimeout(
      this.handleClick.bind(this),
      1000);
  }
}

const button = new Button('Submit');
button.simulateClick(); // What will this print after 1 second?
