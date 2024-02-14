const obj = { a: "a", b: "b", c: "c" };
const eval1 = { a: "a", b: "b", c: "c" };

function test(a, b) {
  console.log(a + b);
}

console.log(obj.a);
console.log(obj.b);
test(obj.a, obj.b);

console.log(obj.a);
console.log(obj.b);
test(obj.a, obj.b);
