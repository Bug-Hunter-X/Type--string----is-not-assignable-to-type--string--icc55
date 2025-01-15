function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Solution 1: Type Assertion
console.log(greeter(user.join(' '))); 
//Solution 2:Change Parameter Type
function greeter2(person: string[]): string {
    return "Hello, " + person.join(' ');
  }
console.log(greeter2(user));