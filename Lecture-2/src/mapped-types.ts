// // Normal mappings
// const arrayOfNumbers = [1, 2, 3];
// const arrayOfStrings = arrayOfNumbers.map(number => number.toString())
// console.log(arrayOfStrings)

// type AreaNumber = {
//     height: number 
//     width: number
// }

// const rectangularArea: AreaNumber = {
//     height: 10,
//     width: 10
// }

// type A = AreaNumber["height"]; // Look up types
// type B = keyof AreaNumber; // Union type like "height" | "width

// //Type mapping (Use one type and make a new type)
// type Area<T>= {
//     // [key in keyof AreaNumber]: AreaNumber[key] // Dynamic value
//    readonly [key in keyof T]: T[key] // Dynamic and Generic type value
// }

// const area1: Area<{ height: number, width: number }> = { height: 200, width: 100 }


interface Person {
  firstName: string
  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}

const user = {
    firstName: 'John',
    lastName: 'Doe',
}

const result = fullName(user)
console.log(result)