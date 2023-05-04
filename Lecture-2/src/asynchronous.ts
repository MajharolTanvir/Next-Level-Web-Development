// // String promise
// const makePromise = (): Promise<string> => {
//     return new Promise<string>((resolve, reject) => {
//         const data: string = "Data is fetched"
//         if (data) {
//             resolve(data)
//         }
//         else {
//             reject('Failed to fetch data')
//         }
//     })
// }


// const getPromiseData = async (): Promise<string> => {
//     const data = await makePromise();
// return data
// }

// // Boolean promise
// const makePromiseBoolean = (): Promise<boolean> => {
//     return new Promise<boolean>((resolve, reject) => {
//         const data: boolean = true
//         if (data) {
//             resolve(data)
//         }
//         else {
//             reject('Failed to fetch data')
//         }
//     })
// }


// const getPromiseBooleanData = async (): Promise<boolean> => {
//     const data = await makePromiseBoolean();
// return data
// }


// // Object promise

// interface DataType {
//     data: string
// }
// const makePromiseObject = (): Promise<DataType> => {
//     return new Promise<DataType>((resolve, reject) => {
//         const data: DataType = {
//             data: "Fetched successfully"
//         }
//         if (data) {
//             resolve(data)
//         }
//         else {
//             reject('Failed to fetch data')
//         }
//     })
// }


// const getPromiseObjectData = async (): Promise<DataType> => {
//     const data = await makePromiseObject();
// return data
// }



// // Asynchronous
// // Json placeholder data

// interface ITodo {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

// const getTodo = async (): Promise<ITodo> => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     return await res.json()
// }

// const getTodoData = async (): Promise<void> => { 
//     const result = await getTodo()
//     console.log(result)
// }

// getTodoData()