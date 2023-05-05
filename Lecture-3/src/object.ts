//* OOP programming for typescript
//* class

/**
class Animal {
    name: string;
    species: string;
    sounds: string

    constructor(name: string, species: string, sounds: string) {
        this.name = name;
        this.species = species;
        this.sounds = sounds;
    }
    // When we write a function in the class, that function called method.
    // We don't use arrow functions in the class. Because it doesn't use "this property".

    makeSounds() {
        console.log(`The ${this.name} says ${this.sounds}`)
    }
}

const dog = new Animal("German Shepard", "dog", "ghew ghew");
const cat = new Animal("Persian", "cat", "mew mew");

dog.makeSounds();
cat.makeSounds()

*/


// //? When we write repeated code, then we use Parameter properties.
// //* This code is more clean and organized.
/**
class Animal {
    constructor(public name: string, public species: string, public sounds: string) { }
    
    makeSounds() {
        console.log(`The ${this.name} says ${this.sounds}`)
    }
}

const dog = new Animal("German Shepard", "dog", "ghew ghew");
const cat = new Animal("Persian", "cat", "mew mew");

dog.makeSounds();
cat.makeSounds()

*/

