"use strict";
function add1(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const res1 = add1("Abhishek", "Prasad");
const res2 = add1(2, 4);
console.log(res1);
console.log(res2);
