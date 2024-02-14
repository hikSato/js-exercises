export const removeOdd = (obj) => {
  const newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    if (value % 2 === 0) newObj[key] = value;
  }
  return newObj;
};
