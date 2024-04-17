export function sequenceToObject(...values) {
  if (values.length % 2 !== 0) throw new Error("invalid input");
  const obj = {};
  for (let i = 0; i < values.length; i += 2) {
    if (typeof values[i] !== "string") throw new Error("invalid input");
    obj[values[i]] = values[i + 1];
  }
  return obj;
}
