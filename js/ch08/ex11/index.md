- 組み込み関数と自作関数の `toString()` の出力内容を確認しなさい

※ 組み込み関数
組み込み関数はnative codeとして表示される。

```
console.log(Math.sqrt.toString());
VM62:1 function sqrt() { [native code] }
```

※ 自作関数

```
function sample() {
  return "This is my function";
}

console.log(sample.toString());
VM92:5 function sample() {
  return "This is my function";
}
```
