// arrays
let names = [
    'Tony', 
    'Anthony', 
    'Alicea'
];

// of gives values
for (const name of names) {
    console.log(name); // values
}

// in gives indexes
for (const name in names) {
    console.log(name); // keys
}

// objects
class Animal {
    name = 'dog';
}

class Dog extends Animal {
    sound = 'bark';
}

let dog = new Dog();

for (const prop in dog) {
    console.log(prop);
}

for (const prop of dog) {
    console.log(prop); // error!
}