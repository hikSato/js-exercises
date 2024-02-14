obj = { a: "a", b: "b" };
eval = { a: "a", b: "b" };

function test(a, a, b) {
  console.log(a + b);
}

with (obj) {
  console.log(a);
  console.log(b);
}

with (eval) {
  console.log(a);
  console.log(b);
}
