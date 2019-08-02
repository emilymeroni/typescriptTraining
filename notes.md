## Setting up a typescript project
`tsc --init` will tell the project that TypeScript belongs to it. This allows you to just write npm tsc as a command to compile all .ts files.

## Types
### Specifying types
```javascript
let age
```
is of type any because the type hasn't been inferred with initialisation. You can declare a type upfront like this:
```javascript
let age:number
```

### Arrays
```javascript
let hobbies = ["Piano", "Hiking"]
```
If I tried to ovveride the value of hobbies with a number you will get an error as typescript has already inferred the type string. If we want to have mixed types we could explicitly set the type to any:
```javascript
let hobbies: any[] = ["Piano", "Hiking"]
```

### Tuples
```javascript
let address: [string, number] = ["Superstreet", 99]
```
Allowes you to specify the format of the array, mening in which order the items should appear.

### Enums
Make numbers more expressive. You can explicitly set a value or just use the implicit one. When a value is set, the following item will be an incremental of the previous one.
```javascript
enum Color {
  Gray, // 0
  Green = 100,
  Blue // 101
}
let myColor: Color = Color.Green;
```

### Any
```javascript
let car : any = "BMW";
car = { brand: "BMW" }
```
Any is very generic and it is better to avoid it.

### Functions
You can assign a type to the returned value and to the arguments.
```javascript
function returnMyName(): string {
  return myName;
}

// void
function sayHello(): void {
  console.log("Hi!");
}

// argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
```

#### Function types
You can indicate which functions a variable is able to hold.
```javascript
let myMultiply : (val1: number, val2: number) => number;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
```

### Objects
Typescript yet again infers the type. If you try to reassing the userData typescript with new types or new property names will throw an error. The order in object doen't matter so we really need to identify the properties. You need to write the blueprint of the object.
```javascript
let userData: {name: string, age: number} = {
  name: "Ruska",
  age: "1"
}
```

### Custom types
You have a way to store a complex type with a type alias.
```javascript
type Complex = {data: number[], output: (all: boolean) => number[]}; // on the right side we are setting up the type
let complexType: Complex = {
 data: [1,2,3],
 output: function(all: boolean): number[] {
   return this.data;
 }
}
```

### Union types
You can set a variable to be of specific types by chaining them.
```javascript
let myRealAge: number | string;
```

### Never Type
Its never returning anything:
```javascript
function neverReturns():never {
  throw new Error('An error!);
}
 ```

 ### Nullable Type
 If you set in the compile options the property "strictNullChecks" to true it allows you to not assign null accidentally to a variable. It gives you an extra layer of protection. This means that you must explicitly say if a variabl could be null.
 ```javascript
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull; // Undefined
canAlsoBeNull = null;
 ```
When you initialise a variable with null, it will only be of type null with the previous option set to true. It is not of type any:
 ```javascript
let canOnlyBeNull = null;
canBeNull = 12; // Will throw an error
 ```

 ## Namespace
 You can create namespaces for functions to not pollute the global namespace with the keyword `namespace`. The code inside it will then be compiled in an IIFE.
 ```javascript
namespace MyMath {
  const PI = 3.14;

  export function calculateCircumference(diameter: number) {
    return diameter * PI;
  }
}
 ```

 You may also split a namespace in multiple files, as long as you use theh same namespace.

 To bundle multiple files you can use the command `tsc --outFile destinationFile.js fileList`. Rather than having to specify a list of files it is better to use imports. TypeSCript has the following syntax:
  ```javascript
/// <reference path="circleMath.ts" />
 ```

 Using namespaces have some disadvantages compared to ES6 modules, as they are not very declarative and it is not clear which dependencies there are explictly.

## Interfaces

We define a contract to guarantee the code that certain properties or methods are available. Note: when passing object literals directly the check is more strict (for example, if I add an extra argument the compilation will fail).

```javascript
interface NamedPerson {
  firstName: string,
  age?: number; //optional argument
  [propName: string] : any; // flexible keyname when you don't know the name of the property in advance
  greet(lastName: string) : void;
}

const person: NamedPerson = {
  firstName: "Ruska",
  hobbies: ["Barking", "Chasing balls"],
  greet(lastName: string) {
    console.log("Hi `lastName`")
  }
}
 ```

You can also use interfaces in class declarations as so:

```javascript
class Person implements NamedPerson {
  firstName: "Ruska",
  greet(lastName: string) {
    console.log("Hi `lastName`")
  }
}
 ```

 ### Function  Types
 You can use interfaces for function types. it is handier than writing them inline.

 ```javascript
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}
let myDoubleFunction: DoubleValueFunc;
 ```

 ### Interface Inheritance
 You can inherit interfaces to specify that an object must implement both contracts.
 ```javascript
interface AgedPerson extends NamedPerson {
  age: number;
}
 ```
### What happens to interfaces when compiled?
They get totally ignored when the code is compiled to JS. They are only useful at compile time for you to catch errors in advance.
## Generics
You may want a function that handles all type of data but and also helps you to know which operations you can do. It makes the code flexible and managable. 
```javascript
function echo<T>(data: T) {
  return data;
}
 ```
 ### Built in Generics
 The most popular generic type by default is the Array.
```javascript
const testResults: Array<number> = [];
testResults.push(2); // Works
testResults.push('a string'); // Doesn't work
 ```
 ### Generic Types
 Take the following example: we are creating a constant and assigning a generic function type where the input is that generic type and returns the type.
```javascript
const echo2: <T>(data : T) => T = echo;
 ```
 ### Generic Class
```javascript
class SimpleMath<T extends number> {
  baseValue: T;
  multipleValue: T;
  calculate(): number {
    return this.baseValue * this.multiplyValue;
  }
}
 ```
 ### Multiple generic types
 You can also use more than one generic type.