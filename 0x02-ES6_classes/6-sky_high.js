import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw new Error('floors must be a number');
    }
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    super.evacuationWarningMessage();
    return `Evacuate slowly the ${this._floors} floors`; // eslint-disable-line no-underscore-dangle
  }
}
