// undefined => undefined
// null => object
// object => object
// NaN => number
// 数値 => number
// 関数 => function

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof { a: "a", b: "b" });
console.log(typeof NaN);
console.log(typeof 3);
const sample = (e) => {
  console.log(e);
};
console.log(sample);
