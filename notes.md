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