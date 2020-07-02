class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe() {
    console.log(" Department = " + this.name);
  }
}

let dept1 = new Department("Accounting");
dept1.describe();
