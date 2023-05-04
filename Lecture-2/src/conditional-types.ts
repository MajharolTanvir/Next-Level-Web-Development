// // A type is dependent on another type

// type a1 = null;
// type a2 = undefined;
// type a3 = number;
// type a4 = a1 extends string ? string : a2 extends number ? number : a3 extends string ? string : never;


// //Example 2

// type Sheikh = {
//     wife1: string,
//     wife2: string
// }

// type A = keyof Sheikh;

// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;
// type CheckWife2 = CheckProperty<Sheikh, "wife2">


// // Example 3

// type Friends = "Monika" | "Rachel" | "Pheobe"
// type RemoveFriend<T, K> = T extends K ? never : T
// type CurrentFriends = RemoveFriend<Friends, "Rachel">