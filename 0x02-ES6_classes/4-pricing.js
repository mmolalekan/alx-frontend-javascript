import Currency from './3-currency'; // eslint-disable-line no-unused-vars

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    } else if (typeof currency !== 'object') {
      throw new Error('currency must be a currency object');
    }
    this._amount = amount; // eslint-disable-line no-underscore-dangle
    this._currency = currency; // eslint-disable-line no-underscore-dangle
  }

  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('amount must be a number');
    }
    this._amount = value; // eslint-disable-line no-underscore-dangle
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(value) {
    if (typeof value !== 'object') {
      throw new Error('currency must be a currency object');
    }
    this._currency = value; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency._name} (${this._currency._code})`); // eslint-disable-line no-underscore-dangle
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new Error('amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new Error('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
