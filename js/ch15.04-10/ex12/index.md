- Active や Completed を選択後にブラウザのリロードを行うとどうなるだろうか。hashchange と pushState それぞれの実装について調べなさい
  (ヒント: 開発者ツールでどのような通信が発生しているか調べてみなさい)。

  - pushState: 404 not foundが表示される。（/ch15.04-10/ex12/active へのリクエストを投げて、そんなページはないため404）
  - hashchange: ページがリロードすると、ページは表示されるが、追加していたtoDo項目がリセットされる。(/ch15.04-10/ex11/index.js へのリクエストが投げられるためページは取得できる。)

- ここまでの例は [serve](https://www.npmjs.com/package/serve) コマンドで HTML や JS といったファイル配信するサーバーを立ち上げてきた。
  サーバー側がどのような挙動をすれば pushState を使った実装が期待通り動作するか考えて答えなさい。
  - /all /active /completedのリクエストが来たときにそれぞれのページを返すように対応する。
