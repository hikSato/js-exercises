## 問題 10.1 🖋️💻

以下のページに対応する sets.cjs、stats.cjs、index.cjs を書き写して作成し、それらを Webpack で mode を none、developemnt、production のそれぞれでバンドルし、各結果が、p.276 の上のコードに対してどの様な差異があるかを、それぞれ 1 行程度で記述しなさい。

- none

`__webpack_require__`モジュール関数を使ってる。

- development

  evalを使っている。

- production

`const t = e(800)`のような形で読み込まれている。
