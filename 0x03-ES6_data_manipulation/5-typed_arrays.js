export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  const int8view = new Int8Array(buffer);

  try {
    int8view[position] = value;
  } catch (error) {
    if (error instanceof RangeError) {
      throw new Error('Position outside range');
    }
  }
  return view;
}
