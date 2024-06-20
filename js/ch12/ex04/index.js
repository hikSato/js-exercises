export function* primenumbers(max) {
  const arr = new Array(max).fill(true);
  arr[0] = false;
  for (const [index, elem] of arr.entries()) {
    if (elem) {
      const primeNum = index + 1;
      let start = primeNum ^ 2;
      while (start <= max) {
        if (start % primeNum === 0) {
          arr[start - 1] = false;
        }
        start++;
      }
      yield primeNum;
    }
  }
}

const primeNum = primenumbers(120);
for (const elem of primeNum) {
  console.log(elem);
}
