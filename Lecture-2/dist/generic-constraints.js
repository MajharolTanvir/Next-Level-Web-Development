"use strict";
// Spread operator with generic constraints
const addMeInMyCrushMind = (myInfo) => {
    const crush = "Kate winslet";
    const newData = Object.assign(Object.assign({}, myInfo), { crush });
    return newData;
};
const myInfo = {
    name: "Persian",
    age: 100,
    salary: 10000000,
    other: false,
    other2: null
};
const result5 = addMeInMyCrushMind(myInfo);
