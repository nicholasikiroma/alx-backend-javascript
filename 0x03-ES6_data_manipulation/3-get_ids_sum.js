export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    const getSum = arr.reduce((acc, obj) => acc + obj.id, 0);
    return getSum;
  }
  return [];
}
