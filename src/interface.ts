interface Person1 {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let user1: Person1;

user1 = {
  name: "MAX",
  age: 21,
  greet(phrase: string): void {
    console.log(phrase);
  },
};

console.log(user1);