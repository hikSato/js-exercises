export const bitCount = (bit) => {
  let count = 0;
  let i = 1;
  while (i != 0) {
    if (bit & i) count++;
    i = i << 1;
  }
  return count;
};
