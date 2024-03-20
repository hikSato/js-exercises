let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
q.z = 3;
let f = q.toString();
q.x + p.y;

console.log("oはpのプロトタイプ");
console.log(o.isPrototypeOf(p));
console.log("oはqのプロトタイプ");
console.log(o.isPrototypeOf(q));
console.log("pはqのプロトタイプ");
console.log(p.isPrototypeOf(q));

console.log("ObjectはArrayのプロトタイプ");
console.log(Object.prototype.isPrototypeOf(Array.prototype));
console.log("ObjectはDateのプロトタイプ");
console.log(Object.prototype.isPrototypeOf(Date.prototype));
console.log("ObjectはMapのプロトタイプ");
console.log(Object.prototype.isPrototypeOf(Map.prototype));

console.log("ArrayはObjectのプロトタイプ");
console.log(Array.prototype.isPrototypeOf(Object.prototype));
console.log("ArrayはDateのプロトタイプ");
console.log(Array.prototype.isPrototypeOf(Date.prototype));
console.log("ArrayはMapのプロトタイプ");
console.log(Array.prototype.isPrototypeOf(Map.prototype));

console.log("DateはObjectのプロトタイプ");
console.log(Date.prototype.isPrototypeOf(Object.prototype));
console.log("DateはArrayのプロトタイプ");
console.log(Date.prototype.isPrototypeOf(Array.prototype));
console.log("DateはMapのプロトタイプ");
console.log(Date.prototype.isPrototypeOf(Map.prototype));

console.log("MapはObjectのプロトタイプ");
console.log(Map.prototype.isPrototypeOf(Object.prototype));
console.log("MapはArrayのプロトタイプ");
console.log(Map.prototype.isPrototypeOf(Array.prototype));
console.log("MapはDateのプロトタイプ");
console.log(Map.prototype.isPrototypeOf(Date.prototype));
