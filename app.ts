interface NamedPerson {
  firstName: string,
  age?: number; //optional argument
  [propName: string] : any; // flexible keyname when you don't know the name of the property in advance
  greet(lastName: string) : void;
}

const person1: NamedPerson = {
  firstName: "Ruska",
  hobbies: ["Barking", "Chasing balls"],
  greet(lastName: string) {
    console.log(`Hi ${lastName}`);
  }
}

person1.greet("Whoopie");