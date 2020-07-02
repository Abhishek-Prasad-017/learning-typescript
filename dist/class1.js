"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(" Department = " + this.name);
    }
}
let dept1 = new Department("Accounting");
dept1.describe();
