## 問題 10.5 🖋️

問題10.3, 10.4で作成したそれぞれのモジュールで、エクスポート元の関数・クラスをエディタのリファクタ機能で名前変更した際、インポート側で名前変更がどう追随されるか確認しなさい。
また、デフォルトエクスポート、名前変更を伴うインポート、再エクスポートについても名前変更時の挙動を確認すること。

### Nodeモジュール

- `exports.sample =` は以下のように変更された

`const { sample3: sample } = require("./sample.cjs");`

- `module.exports =` は特に変更されなかった。

### ESモジュール

- デフォルトエクスポート
  defaultで読み込んでると、特に変更はなかった。
  ファイル名で読み込んでいると、名前が変更された。

- 名前変更を伴うインポート
  　asの前側が変更され、asの後ろは変更されない。

- 再エクスポート
  　元の名前を変更すると、asの前が変更され、asの後ろは変更されない。
  　asの後ろを変更すると、そのモジュールの読み込み先の名前も変更される。
