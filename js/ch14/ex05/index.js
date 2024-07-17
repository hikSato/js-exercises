export function typeName(strings, ...values) {
  const typeValues = values.map((value) => typeof value);
  let result = strings[0];
  for (let i = 0; i < typeValues.length; i++) {
    result += typeValues[i] + strings[i + 1];
  }
  return result;
}
