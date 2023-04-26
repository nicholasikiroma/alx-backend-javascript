export default function updateUniqueItems(map) {
  const updatedMap = map;
  if (!(updatedMap instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    for (const [k, v] of updatedMap) {
      if (v === 1) {
        updatedMap.set(k, 100);
      }
    }
  }
  return updatedMap;
}
