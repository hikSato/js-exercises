- 15.4-10.1 および 15.4-10.2 の ToDo アプリに対してブラウザの開発者ツールから値の変更やプロパティの追加を試してみなさい
- 開発者ツールで CSS に関して実行できる操作を検索エンジンで調べ、便利だと思ったものを 3 つ挙げなさい
  - CSSプロパティをつけたり外したりする
  - CSSプロパティの値の変更
  - 疑似要素の確認
- 15.4-10.2 のアプリの body 要素に対し、元々 HTML および JS 内で利用していなかった Tailwind CSS のクラス (bg-rose-600 など何でも良い) を開発者ツールから追加すると変更が反映されないが、これは何故か調べなさい
  - Tailwind CSSを使用している場合、プロジェクトのCSSはビルドプロセスによって生成されるため、開発者ツールで直接変更を加えても、その変更はビルド後のCSSには含まれません。Tailwind CSSのビルドツール（例: postcss, tailwindcss-cli）は、ビルド時にcontentオプションで指定されたファイルからユーティリティクラスを抽出し、最終的なCSSファイルを生成します。開発者ツールで追加したクラスがこれに含まれていないため、スタイルが反映されないのです。