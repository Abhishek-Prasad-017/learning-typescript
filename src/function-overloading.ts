type Combinable = string | number;
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const res1 = add1("Abhishek", "Prasad");
const res2 = add1(2, 4);
console.log(res1);
console.log(res2);
