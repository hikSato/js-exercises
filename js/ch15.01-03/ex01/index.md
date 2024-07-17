## 問題 15.1-3.1 💻🖋️🧪

1. index.js を変更し ToDo アプリケーションを完成させなさい。仕様に関してはテストコードを参照しなさい。ただし index.html ファイルは編集してはいけません。
2. index.html ファイル内の script タグから `type="module"` 属性を削除した場合、期待通り動作させるにはどうすべきか答えなさい。

- 2回答
  type="module"を使わない場合、DOMが読み込まれる前にaddEventListener属性を使われるためエラーになる。回避するためにdeferを使うか、'DOMContentLoaded'イベントを使う。scriptタグをhtmlのbodyタグの最下部に記述します。
