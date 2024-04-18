// このような関数は絶対に書いてはならない。
function set42(key) {
  eval(`${key} = 42;`);
}

// 例:
set42("hello");
console.log(hello); // 42
const roop = () => {
  while (true) {}
};
set42(roop()); // 無限ループ

// その他の例
// process終了
// set42そのものを書き換える。
// 自分自身を呼び出す（再起）
