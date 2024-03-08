export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    } else if (!Array.isArray(students) && students.every((item) => (typeof item !== 'string'))) {
      throw new Error('Students must be an array of Strings');
    }

    this._name = name; // eslint-disable-line no-underscore-dangle
    this._length = length; // eslint-disable-line no-underscore-dangle
    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = value; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(value) {
    if (!Array.isArray(value) && value.every((item) => (typeof item !== 'string'))) {
      throw new Error('Students must be an array of Strings');
    }
    this._students = value; // eslint-disable-line no-underscore-dangle
  }
}
