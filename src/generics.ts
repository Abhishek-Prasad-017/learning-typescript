function printName<T>(name: T): T {
  console.log(name);
  return name;
}

let p: string = printName("Abhishek");
console.log("Hello");
