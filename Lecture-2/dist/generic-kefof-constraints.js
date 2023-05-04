"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// It is use when the generic function need any parameter data(Like object and array) from the other parameters.
function gerProperty(obj, key) {
    obj[key];
}
const property = gerProperty({ name: "Mr. X", age: 100 }, "age");
