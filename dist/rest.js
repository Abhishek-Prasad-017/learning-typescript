"use strict";
const addAll = (...numbers) => {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    return result;
};
console.log(addAll(5, 3, 6));
