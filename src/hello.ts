var name1: string;
name1 = "Hello Abhishek!";
console.log(name1);

var tuple: [string, number, boolean][];
tuple = [["Abhi", 101, true], ["Aman", 201, false]]
console.log(tuple)

class Person {
  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = " ";
    this.lastName = " ";
  }
  getFullName() {
    return this.firstName + this.lastName;
  }
}
 
var p1  = new Person();
p1.firstName = "Abhishek";
console.log(p1.getFullName());