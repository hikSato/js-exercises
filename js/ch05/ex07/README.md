## 問題 5.7 🖋️

以下のプログラムの出力を予想し、実際の実行結果を確認しなさい。

```
function f() {
    try {
        return true;
    } finally {
        return false;
    }
}

console.log(f());
```

### 結果

実行結果：false

tryブロックの処理後はからなずfinallyブロックが呼び出される。
tryブロックでreturnが呼ばれた場合でも処理が移動する前にfinallyブロックが実行される。
finallyブロックでreturnが呼び出された場合、処理の移動が行われる(呼出し元に正常に戻る)。
そのため、このreturnで処理が置き換わりfalseがreturnされた。
