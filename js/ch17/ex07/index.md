## 問題 17.7 🖋

TypeScriptのトランスパイルは`@babel/preset-typescript`や`tsc`によって可能だが、それぞれの違いを調べなさい。

- @babel/preset-typescript
  - トランスパイルのみを行う。
  - TypeScriptをJavascriptに変換は可能。
  - 型チェックはしない。
- tsc
  - トランスパイルと、完全な型チェックを提供する。
