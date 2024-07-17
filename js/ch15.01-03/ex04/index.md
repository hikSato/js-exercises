## 問題 15.1-3.4 🖋

グローバルオブジェクトを参照する方法を、ブラウザ内、node内、ブラウザnode問わずの３種記しなさい。<br>
また、ブラウザとnodeのグローバルオブジェクトのプロパティやメソッドを比較し、ブラウザ独自のものを10程度記しなさい。<br>
最後に、グローバルオブジェクトにundefinedが定義されていることを確認し、過去のES仕様でどのような問題が発生していたかを記しなさい。
https://developer.mozilla.org/ja/docs/Glossary/Global_object
https://developer.mozilla.org/ja/docs/Web/API/Window

- ブラウザ内
  window
- node内
  global
- ブラウザnode問わず
  globalThis(ECMAScript標準)

- window

  - window.document
  - window.navigator
  - window.sessionStorage
  - window.location
  - window.history
  - window.fetch
  - window.alert

- undefinedが再定義が可能だった。
