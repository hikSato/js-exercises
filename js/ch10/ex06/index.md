## 問題 10.6 🖋️💻

エクスポートしないjsファイルを複数回importする場合、import文の前後やimport先のコードの実行順序はどうなりますか。実証コードを作成し、予想してから実行結果を確認しなさい。

#### 予想

- importの順番で（上から）順に実行される。

#### 結果

- 上から順で、同じファイルを複数回importしても一度しか実行されない。