// 問題 3.2 💻
console.log("最大値 :" + Number.MAX_SAFE_INTEGER);
console.log("最小値 :" + Number.MIN_SAFE_INTEGER);
const m1 = Number.MAX_SAFE_INTEGER + 1;
const m2 = Number.MAX_SAFE_INTEGER + 2;

console.log("最大値 + 1 :" + m1);
console.log("最大値 + 1 === 最大値 + 2 :" + `${m1 === m2}`);
// Number.MAX_SAFE_INTEGER + 1 と Number.MAX_SAFE_INTEGER + 2 は同じ浮動小数点数として表現されるため、比較すると true になります。
