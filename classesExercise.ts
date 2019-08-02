// Exercise 1 - How was your TypeScript Class?

class Car {

  name: string;
  _acceleration : number = 0;

  constructor(name: string) {
    this.name = name;
  }

  get acceleration() : number {
    return this._acceleration;
  }

  honk () : void {
    console.log("Toooooooooot!");
  }

  accelerate (speed : number) : void {
    this._acceleration = this._acceleration + speed;
  }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
  protected width : number = 0;
  protected height : number = 0;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  abstract calcSize () : number;
}

class Rectangle extends BaseObject  {
  calcSize () : number {
     return this.width * this.height;
  }
}

const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Persona {
  private _firstName: string = "";

  get firstName() : string {
    return this._firstName;
  }

  set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
  }
}
const person = new Persona();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);