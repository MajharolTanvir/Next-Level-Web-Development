// /**
//  * ? Normal Arrow Functions
//  */

// // const createArray = (params: string) => {
// //     return [params]
// // }

// // const result = createArray("Bangladesh")

// /**
//  * ? Generic arrow function
//  */

// const createArray = <T>(params: T): T[] => {
//     return [params]
// }

// const result = createArray<string>("Bangladesh")
// const result2 = createArray<boolean>(true)

// //  Object constructor
// const result3 = createArray<{name:string}>({
//     name: "Bangladesh",
// })

// // Generic array of object function with interface parameters

// interface AgeType { age: number }

// const result4 = createArray<AgeType>({
//     age: 32,
// })

// /**]
//  * ? We can also use Generic function Tuple
//  */



// Spread operator

// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = "Kate winslet"
//     const newData = { ...myInfo, crush } 
//     return newData
// }

// const myInfo = {
//     name: "Persian",
//     age: 100,
//     salary: 10000000
// }

// const result5 = addMeInMyCrushMind(myInfo)