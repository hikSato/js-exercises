## 問題 13.12 🖋️

問題 13.1 で非同期処理について学んだあなたは「時間のかかる同期関数があるならば、非同期関数に変換して適宜 `await` すればいいのではないか」と思いついた。

それでは以下のコードを実行すると何が出力されるか予想し実際に確認しなさい。
また「[マイクロタスク](https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)」について調査し、この用語を用いて理由を説明しなさい。

- 予測： 何も出力されない。
- 実際： 何も出力されない。

longRunningButAsyncFunctionの無限ループが常に新しいマイクロタスクを生成し続けるため、イベントループはマイクロタスクキューの処理に追われ続け、マイクロタスクの実行されるタイミングがこない。そのため"Hello world！"は実行されない。
