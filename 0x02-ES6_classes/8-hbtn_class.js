export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  get location() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }

  set location(newLocation) {
    if (typeof newLocation !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = newLocation; // eslint-disable-line no-underscore-dangle
  }

  get size() {
    return this._size; // eslint-disable-line no-underscore-dangle
  }

  set size(newSize) {
    if (typeof newSize !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = newSize; // eslint-disable-line no-underscore-dangle
  }

  toString() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }

  valueOf() {
    return this._size; // eslint-disable-line no-underscore-dangle
  }
}
