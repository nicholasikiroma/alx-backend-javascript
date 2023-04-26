export default function cleanSet(set, startString) {
  const stringList = [];
  if (startString.length === 0) return '';
  for (const element of set) {
    if (element.startsWith(startString) && typeof element === 'string') {
      stringList.push(element.slice(startString.length));
    }
  }
  return stringList.join('-');
}
