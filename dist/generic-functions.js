"use strict";
function countAndDescribe(element) {
    let description = "No element found";
    if (element.length == 1) {
        description = "Got 1 element";
    }
    else if (element.length > 1) {
        description = "Got " + element.length + " elements";
    }
    return [element, description];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["hello", "there"]));
