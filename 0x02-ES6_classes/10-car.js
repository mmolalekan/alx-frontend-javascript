export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand; // eslint-disable-line no-underscore-dangle
  }

  set brand(newBrand) {
    this._brand = newBrand; // eslint-disable-line no-underscore-dangle
  }

  get color() {
    return this._color; // eslint-disable-line no-underscore-dangle
  }

  set color(newColor) {
    this._color = newColor; // eslint-disable-line no-underscore-dangle
  }

  get motor() {
    return this._motor; // eslint-disable-line no-underscore-dangle
  }

  set motor(newMotor) {
    this._motor = newMotor; // eslint-disable-line no-underscore-dangle
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
