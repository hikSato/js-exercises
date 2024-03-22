const obj = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj);

console.log(Object.getPrototypeOf(obj2));
console.log(Object.getPrototypeOf(obj2) === obj);
