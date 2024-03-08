export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw new Error('code must be a string');
    } else if (typeof name !== 'string') {
      throw new Error('name must be a string');
    }
    this._code = code; // eslint-disable-line no-underscore-dangle
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('code must be a string');
    }
    this._code = value; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('name must be a string');
    }
    this._name = value; // eslint-disable-line no-underscore-dangle
  }

  displayFullCurrency() {
    return (`${this._name} (${this._code})`); // eslint-disable-line no-underscore-dangle
  }
}
