export const sample1 = (x, n) => {
  if (n === 0) return 1;
  if (n < 0) {
    return 1 / sample1(x, -n);
  }
  if (n % 2 === 0) {
    return sample1(x, n / 2) * sample1(x, n / 2);
  } else {
    return sample1(x, n - 1) * x;
  }
};

export const sample2 = (x, n) => {
  let result = 1;
  b = x;
  exp = Math.abs(n);
  for (let i = exp; i > 0; i--) {
    result *= x;
    if (exp % 2 === 0) {
      b *= b;
      result *= b;
      exp /= 2;
      return;
    }
    result *= b;
  }
  if (n < 0) {
    return 1 / result;
  }
  return result;
};
