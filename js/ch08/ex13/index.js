function f(input) {
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
}

// 無限ループになる。
f(`(()=>{ while(true) {console.log("OK")} })()`);
