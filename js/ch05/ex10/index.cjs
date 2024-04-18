const obj = { a: { b: { c: "abc" } } };

const countTime = (func) => {
  console.time("access property");
  for (let i = 0; i < 10000; i++) func();
  console.timeEnd("access property");
};

console.log("=== with ===");
countTime(() => {
  with (obj) {
    a.b.c;
  }
});

console.log("=== no with ===");
countTime(() => {
  obj["a"]["b"]["c"];
});
