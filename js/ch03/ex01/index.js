// 問題 3.1 💻
const params = [Infinity, -Infinity, NaN];
for (let i = 0; i < params.length; i++) {
  for (let j = 0; j < params.length; j++) {
    const p = params[i];
    const p2 = params[j];
    console.log("========================");
    console.log(`${p} + ${p2} = ${p + p2}`);
    console.log(`${p} - ${p2} = ${p - p2}`);
    console.log(`${p} * ${p2} = ${p * p2}`);
    console.log(`${p} / ${p2} = ${p / p2}`);
    console.log("========================");
  }
}
// ========================
// Infinity + Infinity = Infinity
// Infinity - Infinity = NaN
// Infinity * Infinity = Infinity
// Infinity / Infinity = NaN
// ========================
// ========================
// Infinity + -Infinity = NaN
// Infinity - -Infinity = Infinity
// Infinity * -Infinity = -Infinity
// Infinity / -Infinity = NaN
// ========================
// ========================
// Infinity + NaN = NaN
// Infinity - NaN = NaN
// Infinity * NaN = NaN
// Infinity / NaN = NaN
// ========================
// ========================
// -Infinity + Infinity = NaN
// -Infinity - Infinity = -Infinity
// -Infinity * Infinity = -Infinity
// -Infinity / Infinity = NaN
// ========================
// ========================
// -Infinity + -Infinity = -Infinity
// -Infinity - -Infinity = NaN
// -Infinity * -Infinity = Infinity
// -Infinity / -Infinity = NaN
// ========================
// ========================
// -Infinity + NaN = NaN
// -Infinity - NaN = NaN
// -Infinity * NaN = NaN
// -Infinity / NaN = NaN
// ========================
// ========================
// NaN + Infinity = NaN
// NaN - Infinity = NaN
// NaN * Infinity = NaN
// NaN / Infinity = NaN
// ========================
// ========================
// NaN + -Infinity = NaN
// NaN - -Infinity = NaN
// NaN * -Infinity = NaN
// NaN / -Infinity = NaN
// ========================
// ========================
// NaN + NaN = NaN
// NaN - NaN = NaN
// NaN * NaN = NaN
// NaN / NaN = NaN
// ========================
