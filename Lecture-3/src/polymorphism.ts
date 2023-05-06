// Example 1 
class Person {
    takeNape():void {
        console.log('Iam sleeping 8 hours per day')
    }
}


class Student extends Person {
    takeNape(): void {
        console.log('Iam sleeping 10 hours per day')
    }
}

class Developer extends Person {
    takeNape(): void {
        console.log('Iam sleeping 5 hours per day')
    }
}

function getNap(param:Person) {
    param.takeNape()
}

const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();

// getNap(person1)
// getNap(person2)
// getNap(person3)

// Example 2

class Shape {
    getArea(): number {
        return 0
    }
}


//! Area -> pi *r *r
class Circle extends Shape { 
    radius: number
    constructor(radius: number) {
        super();
        this.radius = radius
    }

    getArea():number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape { 
    height: number;
    width: number;
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}

function getAreaOfShape(param: Shape) {
    console.log(param.getArea())
}

getAreaOfShape(new Circle(10))
getAreaOfShape(new Rectangle(12, 10))

