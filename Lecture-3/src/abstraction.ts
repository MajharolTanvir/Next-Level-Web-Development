//* We can use abstraction 2 ways
//? interface abstraction declare

// interface IVehicle{
//     startEngine(): void;
//     stopEngine(): void;
//     move(): void;
// }

// class Vehicle implements IVehicle{

//     constructor(
//         public name: string,
//         public brand: string,
//         public model: number) {}

//     startEngine(): void {
//         console.log("I am starting Engine");
//     }
//     stopEngine(): void {
//         console.log("I am stopping engine")
//     }
//     move(): void {
//         console.log("I am moving engine");
//     }

//     // we can use extra method also.
//     test(){
//         console.log("I am for testing purpose")
//     }
// }

// const vehicle1 = new Vehicle("can", "Toyota", 2032)


//? abstract class

abstract class Vehicle {
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ) { }
   abstract startEngine(): void
    abstract stopEngine(): void
    move(): void {
        console.log("I am syopping engine");
    }

} 

class Car extends Vehicle {
    startEngine(): void{
            console.log("I am starting engine");
        }
    stopEngine(): void{
         console.log("I am stopping engine");
     }
}

// ? Cannot create an instance of an abstract class
// const car1 = new Vehicle("car", "Yamaha", 2132)