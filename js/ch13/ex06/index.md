## 問題 13.6 🖋️

jQuery Deferred について調べ `Promise` との関係性について説明しなさい。

### JQuery Deferred

jQuery.DeferredとはjQueryのバージョン1.5から導入された、非同期処理をうまく扱うための標準モジュール。

- 非同期処理を連結する際、コールバック地獄から解放される（直列処理、並列処理が可能）
- エラー処理をうまく記述できる
- 一連の非同期処理を関数化して再利用しやすくできる

非同期の処理それぞれに Promise と呼ばれるオブジェクトを割り当て、そのオブジェクトの状態を伝播させていくことで処理を進めていく。

- jQuery Deferred　3.x以降では標準のPromiseを使うことが推奨されている。
- Deferedの中のPromiseとDeferedのPromiseの関係ではなくES6との関係性。
