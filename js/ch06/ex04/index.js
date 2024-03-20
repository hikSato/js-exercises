const o = {};

Object.defineProperty(o, "x", {
  value: "x",
  writable: true,
});

Object.defineProperty(o, "y", {
  value: "y",
  enumerable: true,
});

Object.defineProperty(o, "z", {
  value: "z",
  configurable: true,
});

console.log("<変更>");
console.log("'x'");
o.x = "a";
console.log(o.x);
console.log("===");
console.log("'y'");
try {
  o.y = "b";
} catch {
  console.log("yは変更不可");
}
console.log(o.y);
console.log("===");
console.log("'z'");
try {
  o.z = "c";
} catch {
  console.log("zは変更不可");
}
console.log(o.z);
console.log("===");

console.log("<hasOwnProperty>");
console.log("'x'");
console.log(o.hasOwnProperty("x"));
console.log("===");
console.log("'y'");
console.log(o.hasOwnProperty("y"));
console.log("===");
console.log("'z'");
console.log(o.hasOwnProperty("z"));
console.log("===");

console.log("<propertyIsEnumerable>");
console.log("'x'");
console.log(o.propertyIsEnumerable("x"));
console.log("===");
console.log("'y'");
console.log(o.propertyIsEnumerable("y"));
console.log("===");
console.log("'z'");
console.log(o.propertyIsEnumerable("z"));
console.log("===");

console.log("<削除>");
console.log("'x'");
try {
  console.log(delete o.x);
} catch {
  console.log("xは削除不可");
}
console.log(o.x);
console.log("===");
console.log("'y'");
try {
  console.log(delete o.y);
} catch {
  console.log("yは削除不可");
}
console.log(o.y);
console.log("===");
console.log("'z'");
console.log(delete o.z);
console.log(o.z);
console.log("===");
