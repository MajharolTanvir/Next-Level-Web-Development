// Generic Interface
// interface CrushInterface<T> {
//     name: string,
//     husband: T
// }

/**
const crush1: CrushInterface<boolean> = {
    name: "Kate",
    husband: true
}

const crush2: CrushInterface<string> = {
    name: "Kate",
    husband: "Parsian"
}
 */

/** 
const crush3: CrushInterface<object> = {
    name: "Kate",
    husband: {
        name: "Parsian",
        salary: 100000
    }
}


const crush3: CrushInterface<{name: string, salary: number}> = {
    name: "Kate",
    husband: {
        name: "Parsian",
        salary: 100000
    }
}


interface HusbandInterface{name: string, salary: number}

const crush3: CrushInterface<HusbandInterface> = {
    name: "Kate",
    husband: {
        name: "Parsian",
        salary: 100000
    }
}

*/

/**
// Solution (We can also use Undefined)
interface CrushInterface<T,U = null> {
    name: string,
    husband: T,
    wife?: U
}

interface HusbandInterface{ name: string, salary: number }

const crush3: CrushInterface<HusbandInterface> = {
    name: "Kate",
    husband: {
        name: "Parsian",
        salary: 100000
    }
}
*/


// When we use all parameters
interface CrushInterface<T,U = null> {
    name: string,
    husband: T,
    wife?: U
}

interface CommonInterface{ name: string, age: number }

const crush3: CrushInterface<CommonInterface, CommonInterface> = {
    name: "Kate",
    husband: {
        name: "Parsian",
        age: 43
    },
    wife: {
        name: "Courier",
        age:  34
    }
}