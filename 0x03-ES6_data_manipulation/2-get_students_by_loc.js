export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    const idLocation = arr.filter((obj) => {
      return obj.location === city;
    });
    return idLocation;
  }
  return [];
}
