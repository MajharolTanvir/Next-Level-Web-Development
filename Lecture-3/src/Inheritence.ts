//* Not clean and well structured code.
// class Student {
//     name: string
//     age: number
//     address: string

//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     // First method
//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours}`
//     }
   
// }

// class Teacher {
//     name: string;
//     age: number;
//     address: string;
//     designation: string

//     constructor(name: string, age: number, address: string, designation: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.designation = designation;
//     }

//      // First method
//     makeSleep(hours: number): string {
//         return `This ${this.name} will sleep for ${hours}`
//     }
//      // Second method
//     takeClass(numberOfClass: number): string {
//     return `This ${this.name} will take ${numberOfClass} classes`
//     }
// }


//* We can make a class when we write common properties in many class. That's called inheritance

/**
class Person {
     name: string
    age: number
    address: string
    
      constructor(name: string, age: number, address: string) { 
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // First method
    makeSleep(hours: number): string {
        return `This ${this.name} will sleep for ${hours}`
    }
}
class Student extends Person{

    constructor(name: string, age: number, address: string) { 
        super(name, age, address);
    }
   
}

const student1 = new Student("MR. X", 23 , "Uganda" );

class Teacher extends Person{
    designation : string;
    
    constructor(name: string, age: number, address: string, designation: string) {
        super(name, age, address)
        this.designation = designation;
    }

     // Second method
    takeClass(numberOfClass: number): string { 
    return `This ${this.name} will take ${numberOfClass} classes`
    }
}

const teacher1 = new Teacher("Mr. Y", 64, "USA", "Professor")
console.log(teacher1)

*/