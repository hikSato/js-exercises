//　■ 明示的にイテレータインタフェース のメソッドを呼んだり、間接的に呼んだりする
console.log("======================");
const iter = counterIter(3);
const iterator = iter[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}
console.log("======================");

// ■ ジェネレータ関数によって生成されたオブジェクトがイテレータインタフェースを満たしていることを確認する
console.log("======================");
const generator = counterGen(3);
console.log(typeof generator["next"] === "function"); // true
console.log(typeof generator[Symbol.iterator] === "function"); // true
console.log(generator[Symbol.iterator]() === generator); // true
console.log(generator["next"]()); // { 1, done:false}
for (const elem of generator) {
  console.log(elem); // 2, 3
}
console.log(generator["next"]()); // { done:true}

console.log("======================");

// ■ return() や throw() がどのようなときに呼ばれるのか確認する
console.log("======================");
const iterator3 = counterIter(3);
for (const i of iterator3) {
  if (i === 1) break; // ounterIter: return: undefined
  console.log(i);
}
console.log("======================");
const iter2 = counterIter(3);
const iterator2 = iter2[Symbol.iterator]();
const result2 = iterator2.return(); // returnを直接実行
console.log(result2.value); // -1
console.log(result2.done); // true
console.log("======================");

// ■ ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する
console.log("======================");
const generator2 = counterGen(3);
for (const elem of generator2) {
  if (elem === 2) break; //counterGen: finally
  console.log(elem);
}
console.log("======================");
const generator3 = counterGen(3);
for (const elem of generator3) {
  if (elem === 1) {
    generator3.throw("error"); // counterGen: catch: error
    break;
  }
  console.log(elem);
}
console.log("======================");

function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value: -1, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}

// Q 間接的にthrowを呼ぶ方法はある？
// A 多分ないと思う。
