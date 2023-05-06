//* Key of guard

type AlphaNumeric= string | number

function add(param1: AlphaNumeric, param2: AlphaNumeric) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else  { 
        return param1.toString() + param2.toString();
    }
}

add("1", "2")
add(1,2)

// In of guard

type NormalUserType ={
    name: string    
}

type AdminUserType = {
    name: string
    role: string
}

function getUser(user: AdminUserType | NormalUserType): string{
    if ("role" in user) {
return `I am an admin and my role in ${user.role}`
    }
    else {
        return `I am not a normal user`
    }
}

const normalUser1 :  NormalUserType = {name: "Mr. Kallu"}
const adminUser1: AdminUserType = { name: "Mr. Gallu", role: "admin" }

// console.log(getUser(normalUser1))
// console.log(getUser(adminUser1))

// Instance of guard

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log('I am making sound')
    }
}

class Dog extends Animal { 
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeBark() {
        console.log("I am barking")
    }
}


class Cat extends Animal { 
    constructor(name: string, species: string) {
        super(name, species)
    }

    makeMew() {
        console.log("I am mewing")
    } 
}

// Example 1

// function getAnimal(animal: Animal) {
//     if (animal instanceof Dog) {
//         animal.makeBark()
//     } else if (animal instanceof Cat) {
//         animal.makeMew()
//     }
//     else (
//         animal.makeSound()
//     )
// }

// const animal1 = new Dog("German bhai", "dog") // instance => Dog
// const animal2 = new Cat("Persian bhai", "cat") // instance => Cat

// getAnimal(animal1)
// getAnimal(animal2)


// Example 2 (Type Narrowing)

// function isDog(animal: Animal):animal is Dog {
//     return animal instanceof Dog
// }
// function isCat(animal: Animal):animal is Cat {
//     return animal instanceof Cat
// }

// function getAnimal(animal: Animal) {
//     if (isDog(animal)) { 
//         animal.makeBark()
//     } else if (isCat(animal)) {
//         animal.makeMew()
//     }
//     else (
//         animal.makeSound()
//     )
// }

// const animal1 = new Dog("German bhai", "dog") // instance => Dog
// const animal2 = new Cat("Persian bhai", "cat") // instance => Cat

// getAnimal(animal1)
// getAnimal(animal2)



