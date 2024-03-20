// function displayUsers(users) {
//   const sorted = users.sort((a, b) => a.name.localeCompare(b.name));
//   for (const u of sorted) {
//     console.log(`${u.name}`);
//   }
// }

// const users = [{ name: "hoge" }, { name: "fuga" }, { name: "piyo" }];
// displayUsers(users);

// // 注意: 以下の行は hoge ではなく fuga を表示する！
// // (displayUsers 内の sort で引数の users が変更されるため)
// console.log(users[0].name);

export const pop = (arr) => {
  return arr.filter((_, i) => i !== arr.length - 1);
};
export const push = (arr, element) => {
  return [...arr, element];
};

export const shift = (arr) => {
  return arr.slice(1, arr.length);
};

export const unshift = (arr, element) => {
  return [element, ...arr];
};
export const sort = (arr, compareFn) => {
  return [...arr].sort(compareFn);
};

// 動作確認
const seq = [1, 2, 3, 4, 5];
console.log(pop(seq)); // [1, 2, 3, 4]
console.log(push(seq, 6)); // [1, 2, 3, 4, 5, 6]
console.log(shift(seq)); // [2, 3, 4, 5]
console.log(unshift(seq, 0)); // [0, 1, 2, 3, 4, 5]
console.log(sort(seq, (a, b) => b - a)); // [5, 4, 3, 2, 1]

// 元の配列は変更されていない
console.log(seq); // [1, 2, 3, 4, 5]
