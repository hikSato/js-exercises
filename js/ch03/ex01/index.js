// 問題 3.1 💻
const params = [Infinity, -Infinity, NaN];
params.forEach((_, i) => {
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
});
