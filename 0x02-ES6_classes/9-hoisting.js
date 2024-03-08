// Define the HolbertonClass class first
export class HolbertonClass {
  constructor(year, location) {
    this._year = year; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  get year() {
    return this._year; // eslint-disable-line no-underscore-dangle
  }

  get location() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }
}

// Define the StudentHolberton class
export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // eslint-disable-line no-underscore-dangle
    this._lastName = lastName; // eslint-disable-line no-underscore-dangle
    this._holbertonClass = holbertonClass; // eslint-disable-line no-underscore-dangle
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`; // eslint-disable-line no-underscore-dangle
  }

  get holbertonClass() {
    return this._holbertonClass; // eslint-disable-line no-underscore-dangle
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // eslint-disable-line no-underscore-dangle
  }
}

// Create instances of HolbertonClass
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

// Create instances of StudentHolberton
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

// Export the list of students
export const listOfStudents = [student1, student2, student3, student4, student5];
