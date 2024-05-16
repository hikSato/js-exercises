let littleEndian = new Int8Array(new Int32Array([1]).buffer)[0] === 1;
console.log(littleEndian); // true

export function littleToBig(array) {
  const dataView = new DataView(array.buffer);
  array.forEach((value, index) => {
    dataView.setUint32(index * 4, value, true);
  });
  const array2 = new Uint32Array(array.length);
  for (let i = 0; i < array.length; i++) {
    array2[i] = dataView.getUint32(i * 4, false);
  }
  return array2;
}

export const bigToLittle = (array) => {
  const dataView = new DataView(array.buffer);
  array.forEach((value, index) => {
    dataView.setUint32(index * 4, value, false);
  });
  const array2 = new Uint32Array(array.length);
  for (let i = 0; i < array.length; i++) {
    array2[i] = dataView.getUint32(i * 4, true);
  }
  return array2;
};

console.log(bigToLittle(new Uint32Array([0x12345678])));
console.log(littleToBig(new Uint32Array([0x12345678])));
