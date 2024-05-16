## 問題 10.7 🖋️

JavaScript/TypeScript の有名な日付操作の OSS リポジトリである[date-fns](https://github.com/date-fns/date-fns)、[Luxon](https://github.com/moment/luxon)、[Day.js](https://github.com/iamkun/dayjs)のそれぞれが、src ディレクトリ以下がどのようなまとまりでモジュール分割されているか分析して、それぞれ 2、3 段落程度で記述しなさい。

- date-fns
  date-fns のモジュールは、各機能が独立したディレクトリとファイルに分割されている。そのため、個別にインポートして使用できそう。必要な機能をだけを選んで効率的に利用しやすそう。内部の共通ライブラリは \_lib ディレクトリにまとめられている。

- Luxon
  implとzoneに分けられている。
  timezoneに関する似た情報については　zone部分にまとめられてそうで、把握しやすくされている。
  implにまとめられている部分が実装・変更されやすい箇所についてディレクトリにまとめた分割方法のように感じた。

- Day.js
  localeとpluginに分けられている。
  　Day.jsは、コア機能、プラグイン、ロケール、ユーティリティに分かれていて、必要な機能についてはプラグインとして追加することで拡張できそう。locale関連はディレクトリにまとめられており、整理されている。
