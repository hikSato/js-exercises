// 1. 残余パラメータとして任意の数の関数を受け取り、
// いずれかの関数が true を返せば true を返す新たな関数を返す
// `any` 関数
export const any = (...functions) => {
  return function (n) {
    return functions.some((e) => e(n));
  };
};

// 2.  引数として 2 つの関数を受け取り、
// 1 つ目の関数で発生した例外を 2 つ目の関数の引数として処理し
// 結果を返す新たな関数を返す`catching` 関数
export const catching = (f1, f2) => {
  return function (value) {
    try {
      return f1(value);
    } catch (e) {
      return f2(e);
    }
  };
};

const safeJsonParse = catching(JSON.parse, (e) => {
  return { error: e.toString() };
});

console.log(safeJsonParse('{"a": 1}')); // => {a: 1}
console.log(safeJsonParse("{Invalid Json}")); // => {error: "SyntaxError: ..."}
