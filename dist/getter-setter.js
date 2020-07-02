"use strict";
class Professional {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        if (!newName) {
            throw new Error("Please pass a valid value!!");
        }
        this.name = newName;
    }
}
let pro1 = new Professional("Abhishek Prasad", 23, "Software Engineer");
console.log(pro1.getName);
pro1.setName = "";
console.log("New Name = " + pro1.getName);
