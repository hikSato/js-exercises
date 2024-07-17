// 1. nav 要素内のリンク (`<a>`)
const q1 = document.querySelectorAll("nav a");
// 2. 商品リスト (.product-list) 内の最初の商品 (.product-item)
const q2 = document.querySelectorAll(
  ".product-list > .product-item:first-child"
);
// 3. カートアイコンの画像 (`<img>`)
const q3 = document.querySelector(".cart img");
// 4. 商品リスト (.product-list) 内の価格 (.price) を表示する要素
const q4 = document.querySelectorAll(".product-list .price");
// 5. 商品リスト (.product-list) 内の全ての商品 (.product-item) の画像 (`<img>`)
const q5 = document.querySelectorAll(".product-list img");
// 6. 検索バー (.search-bar) 内の検索ボタン (`<button>`)
const q6 = document.querySelector(".search-bar button");
// 7. フッター (footer) 内のパラグラフ (`<p>`) 要素
const q7 = document.querySelector("footer p");
// 8. 商品リスト (.product-list) 内の偶数番目の商品 (.product-item)
const q8 = document.querySelectorAll(
  ".product-list .product-item:nth-child(even)"
);
// 9. ヘッダー (header) 内のアカウントリンク (.account) の画像 (`<img>`)
const q9 = document.querySelector("header .account img");
// 10. ナビゲーションリンクのうち、"会社情報" のリンク
const q10 = document.querySelector("nav a:last-child");

console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);
console.log(q6);
console.log(q7);
console.log(q8);
console.log(q9);
console.log(q10);
