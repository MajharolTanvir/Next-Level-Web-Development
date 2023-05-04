import { getPriority } from "os"

type PersonType = {
    name: string,
    age: number,
    address: string
}

type newType = "name" | "age" | "address" //Write it manually

type newTypeUsingKeyOf = keyof PersonType //Keyof  using for make union type shortly


// It is use when the generic function need any parameter data(Like object and array) from the other parameters.
function gerProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key]
}

const property = gerProperty({name: "Mr. X", age: 100}, "age")