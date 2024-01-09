// Symbol
const str = "symbolName";
const symbol1 = Symbol(str);
const symbol2 = Symbol(str);
const obj = {};
obj[symbol1] = "symbol1 value";
obj[symbol2] = "symbol2 value";
console.log(`symbol1 : ${obj[symbol1]}`);
console.log(`symbol2 : ${obj[symbol2]}`);

// Symbol.for()
const str_2 = "symbolName2";
const symbol1_2 = Symbol.for(str_2);
const symbol2_2 = Symbol.for(str_2);
const obj_2 = {};
obj_2[symbol1_2] = "symbol1 value";
obj_2[symbol2_2] = "symbol2 value";
console.log(`symbol1_2 : ${obj_2[symbol1_2]}`);
console.log(`symbol2_2 : ${obj_2[symbol2_2]}`);
