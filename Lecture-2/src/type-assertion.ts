let emni: any;
emni = "Next level web development";

//
(emni as string).length;
// Write that another way
<string>emni.length;


///////////////////////
function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value}`;
    }
    else if (typeof param === "number") { 
        const value = param * 1000
        return value
    }
}

// const resultToBeNumber = kgToGram(1000) (It will infer the value when we hover the mouse on the resultToBeNumber)

//When we confirm the type then we use type assertion
const resultToBeNumber = kgToGram(1000) as number
const resultToBeString = kgToGram("1000") as string

type CustomErrorType = {
    message: string
}

try {

} catch (err) {
    console.log((err as CustomErrorType).message);
}


// Another syntax
