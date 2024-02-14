#### `if (foo === void 0) { ... }` でなく `if (foo === undefined) { ... }` が使われる理由。

- undefinedはただのグローバル変数だったため、undefinedの値が書き換えられる可能性があり、undefinedの保証がなかった。
- 最近のブラウザー (JavaScript 1.8.5 / Firefox 4 以降) での undefined は、 ECMAScript 5 仕様により、設定不可、書込不可のプロパティとなったためundefinedを使って問題ないため。
