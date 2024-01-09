const map = new Map();

export const fib = (value) => {
  if (value === 0) return 0;
  if (value === 1) return 1;
  if (map.has(value)) return map.get(value);
  const result = fib(value - 1) + fib(value - 2);
  map.set(value, result);
  return result;
};
