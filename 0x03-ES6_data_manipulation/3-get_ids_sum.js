export default function getStudentIdsSum(studentList) {
  const sum = studentList.reduce((acc, item) => acc + item.id, 0);
  return sum;
}
