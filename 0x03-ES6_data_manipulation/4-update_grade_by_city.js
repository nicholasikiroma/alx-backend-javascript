export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (Array.isArray(arr)) {
    const getStudents = arr.filter((student) => student.location === city);
    for (const obj of getStudents) {
      obj.grade = 'N/A';
    }
    const getGrades = getStudents.map((obj) => {
      for (const student of newGrades) {
        if (obj.id === student.studentId) {
          obj.grade = student.grade;
        }
      }
      return obj;
    });
    return getGrades;
  }
  return [];
}
