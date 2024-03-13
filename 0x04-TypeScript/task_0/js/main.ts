interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const ogbeni: Student = {
  firstName: "Abduluhaymin",
  lastName: "Olalekan",
  age: 29,
  location: "Ilorin"
};

const BoBo: Student = {
  firstName: "Nimatu",
  lastName: "Abdulmalik",
  age: 26,
  location: "Ilorin"
};

const studentsList: Array<Student> = [ogbeni, BoBo];

export default function displayStudents(students: Array<Student>): void {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.appendChild(headRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>{student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>{student.location}</td>`);
    tableBody.appendChild(bodyRow);
  }

  table.appendChild(tableHead);
  table.appendChild(tableBody);
  document.body.appendChild(table);

  displayStudents(studentsList);
}