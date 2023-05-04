// Noob can use like this:
// const rollNumber: Array<number> = [3, 45, 6, 2] //Array<number> | number[]
// const rollNumber2: Array<string> = ["32", "34", "23", "42"] //Array<number> | string[]
// const rollNumber3: Array<boolean> = [true, false, true, false] //Array<number> | boolean[]

// const userNameAndRollNumber: Array<{ name: string, roll: number }> = [{
//     name: 'John',
//     roll: 1
// },
//     {
//         name: 'Jain',
//         roll: 2
//     }]

// But Pro can write using "GenericArray" like this.
// type GenericArray<T> = Array<T>

// const rollNumber: GenericArray<number> = [3, 45, 6, 2] //Array<number> | number[]
// const rollNumber2: GenericArray<string> = ["32", "34", "23", "42"] //Array<number> | string[]
// const rollNumber3: GenericArray<boolean> = [true, false, true, false] //Array<number> | boolean[]

// We can also use type with Generic type. Like this:
// type NameAndRollType = {name:string, roll: number}
// const userNameAndRollNumber: GenericArray<string> =

// const userNameAndRollNumber: GenericArray<NameAndRollType> = [{
//     name: 'John',
//     roll: 1
// },
//     {
//         name: 'Jain',
//         roll: 2
//     }]


// We can use Tuple like this:
// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Persian", "Kate winslet"]

//  We can also use type and tuple
// const relationWithSalery: GenericTuple<object, string> = [{
//     name: "persian",
//     salary: 1000000,
// },
//     "Kate winslet"
// ]


// But it is not best practice to write the object directly (It will change their value).Best practice is :

// const relationWithSalery: GenericTuple<{name: string, salary: number}, string> = [{
//     name: "persian",
//     salary: 1000000,
// },
//     "Kate winslet"
// ]

// We can write this using Type:
// type RelationWithSalaryType = {
//     name: string,
//     salary: number
// }

// const relationWithSalery: GenericTuple<RelationWithSalaryType, string> = [{
//     name: "persian",
//     salary: 1000000,
// },
//     "Kate winslet"
// ]

// We can write this using Interface:
// interface IRelationWithSalary {
//     name: string,
//     salary: number
// }

// const relationWithSalery: GenericTuple<IRelationWithSalary, string> = [{
//     name: "persian",
//     salary: 1000000,
// },
//     "Kate winslet"
// ]