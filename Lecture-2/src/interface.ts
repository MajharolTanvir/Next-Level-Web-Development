// This was use for primitive type of data
// type User = {
//     name: string;
//     age: number;
// }

// const userWithTypeAlias: User = {
//     name: "Type alias",
//     age: 100
// }

//////////////////////

// This was use for only object type of data

// interface IUser {
//     name: string;
//     age: number;
// }

// const userWithInterface: IUser = {
//     name: "Interface",
//     age:200
// }


// Extend user like this

// interface IUser {
//     name: string;
//     age: number;
// }

// interface IExtendedUser extends IUser {
//     roll: number;
// }

// const userWithInterface: IExtendedUser = {
//     name: "War faze",
//     age: 200,
//     roll: 32
// }


///////////
// We cn use type alias or interface

// type addNumbersType = (num1: number, num2: number) => number

// const addNumbers:addNumbersType = (num1, num2) => num1 + num2;

// interface IAddNumbers {
//     (num1: number, num2: number): number
// }
// const addNumber: IAddNumbers = (num1, num2) => num1 + num2;

// // Type Alias
// type rollNumbersType = number[]
// const rollNumbers: rollNumbersType = [1, 4, 5]

// // Interface
// interface IRollNumbers {
// [index:number]: number
// }
// const rollNumber: IRollNumbers = [1,4,5]