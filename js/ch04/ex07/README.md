## 問題 4.7 🖋️

`set42` に意図せぬ動作 (例: システムに負荷を与える、セキュリティの問題となる挙動を取る) を行わさせるにはどのような引数を与えればいいか答えなさい。
ただし実行時エラーが発生しない引数としなさい。

- keyにループ処理を入れて負荷をかける。

```
const roop = () => {
  while (true) {}
};
set42(roop());
```

```
set42("const roop = () => { while(true){} }; roop(); test");
```