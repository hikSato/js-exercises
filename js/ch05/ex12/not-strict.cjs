obj = { a: "a", b: "b", c: "c" };
eval = { a: "a", b: "b", c: "c" };

function test(a, a, b) {
  console.log(a + b);
}

with (obj) {
  console.log(a);
  console.log(b);
  test(a, b, c);
}

with (eval) {
  console.log(a);
  console.log(b);
  test(a, b, c);
}
