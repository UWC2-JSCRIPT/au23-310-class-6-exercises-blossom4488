/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
  constructor(model) {
    this.model = model;
    this.currentSpeed = 0;
  }

  accelerate() {
    this.currentSpeed++;
  }
  brake() {
    this.currentSpeed--;
  }
  toString() {
    console.log(`${this.model} has a current speed of ${this.currentSpeed}`);
  }
}

const car = new Car("Honda", 100);
car.accelerate();
car.accelerate();
car.brake();

car.toString();

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
  constructor(model) {
    super(model);
    this.motor = "electric";
    this.accelerate();
    this.accelerate();
  }
  toString() {
    console.log(
      `${this.model} has a ${this.motor} motor and a current speed of ${this.currentSpeed}`
    );
  }
}
const eCar = new ElectricCar("Tesla");
eCar.accelerate();
eCar.accelerate();
eCar.brake();
eCar.toString();
