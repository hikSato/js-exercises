// 関数本体がreturn文だけの場合はreturnキーワードとセミコロン、中カッコを省略可能。
export const sample1 = (n, c) => {
  console.log(c.repeat(n));
  return new Array(n).fill(c);
};

// 関数本体がreturn文だけの場合はreturnキーワードとセミコロン、中カッコを省略可能。
// 引数が一つだけの時は丸カッコは省略できる。
export const sample2 = x => x * x;

// 引数がないとき丸カッコ記述
// オブジェクトを返すときは丸カッコで囲む
export const sample3 = () => ({ now: new Date() });
