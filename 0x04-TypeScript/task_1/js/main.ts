// task 1
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: any;
}

// task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

//task 3
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return (`${firstName.slice(0, 1)}. ${lastName}`);
}


// task 4
interface StudentClassConstructor {
  new(firstName: string, lastName: string): Student;
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}