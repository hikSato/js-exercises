const obj1 = {};
const extension = Symbol();
obj1["test1"] = "test1";
obj1["test2"] = "test2";
obj1[extension] = "Symbol";
Object.defineProperty(obj1, "test3", {
  value: "test3",
  enumerable: false,
});

const obj2 = Object.create(obj1);
obj2["sample1"] = "sample1";

console.log(func(obj2));
