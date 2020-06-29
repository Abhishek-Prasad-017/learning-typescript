"use strict";
var name1;
name1 = "Hello Abhishek!";
console.log(name1);
var tuple;
tuple = [["Abhi", 101, true], ["Aman", 201, false]];
console.log(tuple);
var Person = /** @class */ (function () {
    function Person() {
        this.firstName = " ";
        this.lastName = " ";
    }
    Person.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    return Person;
}());
var p1 = new Person();
p1.firstName = "Abhishek";
console.log(p1.getFullName());
