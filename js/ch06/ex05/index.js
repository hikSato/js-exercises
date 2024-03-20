const prototypeObj = {
  sample1: "sample1-proto",
  sample2: "sample2-proto",
  sample3: "sample3-proto",
  1: 1,
  2: 2,
};

const obj = Object.create(prototypeObj);
obj["test1"] = "test1";
obj["test2"] = "test2";
obj["sample2"] = "sample2-obj";
obj["11"] = 11;
obj["12"] = 12;
Object.defineProperty(obj, "sample1", {
  value: "sample1-protp",
  enumerable: false,
});

for (const e in obj) {
  console.log(obj[e]);
}
