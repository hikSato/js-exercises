### 予想結果

false true
true false

### 実際

- arrow関数以外はthisの値を継承しない。
  　そのため、nmの関数式では関数を呼び出したオブジェクト（nest）がthisになる。
- アロー関数はthisの値を継承する。
  　そのため、nestではなく、objがthisになる。
