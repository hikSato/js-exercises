// function* fibonacciSequence() {
//   let x = 0,
//     y = 1;
//   for (;;) {
//     yield y;
//     [x, y] = [y, x + y];
//   }
// }

export function fibonacciSequence() {
  let x = 0,
    y = 1;
  let value = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      value = y;
      [x, y] = [y, x + y];
      return { value, done: false };
    },
    return() {
      console.log("return:");
      return { value, done: true };
    },
  };
}

export function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}

console.log(fibonacci(20));

// Q returnやthrowも含めた方がいい？
// A return や throwもイテレータ関数を作るときは含めた方がいいかもしれない。
