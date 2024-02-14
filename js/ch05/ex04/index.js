const map = new Map();

const fib = (value) => {
  if (value === 0) return 0;
  if (value === 1) return 1;
  if (map.has(value)) return map.get(value);
  const result = fib(value - 1) + fib(value - 2);
  map.set(value, result);
  return result;
};

export const getFib = () => {
  let i = 0;
  const arr = [];
  while (i < 10) {
    arr[i] = fib(i + 1);
    i++;
  }
  return arr.join(", ");
};

export const getFib1 = () => {
  let i = 0;
  const arr = [];
  do {
    arr[i] = fib(i + 1);
    i++;
  } while (i < 10);
  return arr.join(", ");
};

export const getFib2 = () => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = fib(i + 1);
  }
  return arr.join(", ");
};
