export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const newList = studentList.filter((item) => item.location === city);

  return newList.map((item) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === item.id);
    if (foundGrade) {
      item.grade = foundGrade.grade; // eslint-disable-line no-param-reassign
    } else {
      item.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return item;
  });
}
