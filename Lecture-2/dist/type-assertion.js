"use strict";
let emni;
emni = "Next level web development";
//
emni.length;
// Write that another way
emni.length;
///////////////////////
function kgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value}`;
    }
    else if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
// const resultToBeNumber = kgToGram(1000) (It will infer the value when we hover the mouse on the resultToBeNumber)
//When we confirm the type then we use type assertion
const resultToBeNumber = kgToGram(1000);
const resultToBeString = kgToGram("1000");
try {
}
catch (err) {
    console.log(err.message);
}
// Another syntax
