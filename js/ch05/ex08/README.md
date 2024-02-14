## 問題 5.8 🖋️V

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
let x = 0;

for(let i = 1; i <= 5; i++) {
    x = i;
    try {
        throw Error();
    } catch {
        break;
    } finally {
        continue;
    }
}

console.log(x);
```

予想：5
finallyのcontinueによってループが継続されるため、iが6に評価される直前までループが続く。
