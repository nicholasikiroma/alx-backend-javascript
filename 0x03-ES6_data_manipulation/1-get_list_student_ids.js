export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    const idArray = arr.map((obj) => {
      return obj.id;
    });
    return idArray;
  }
  return [];
}
