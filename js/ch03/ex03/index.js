export const compairValues = (n1, n2) => {
  const tenG = 10 ** 10;
  const number1 = Math.round(n1 * tenG) / tenG;
  const number2 = Math.round(n2 * tenG) / tenG;
  return number1 === number2;
};

// ↓ やっぱり下のほうがいい

export const compairValues2 = (n1, n2) => {
  const tenG = 10 ** -10;
  Math.abs(n1 - n2) < tenG;
  return number1 === number2;
};

console.log(compairValues(0.3 - 0.2, 0.1));
console.log(compairValues(0.3 - 0.2, 0.1));
