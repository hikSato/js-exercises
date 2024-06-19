//　明示的にイテレータインタフェース のメソッドを呼んだり、間接的に呼んだりする
console.log("======================");
const iter = counterIter(3);
const iterator = iter[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}
console.log("======================");

// const iterator2 = iter[Symbol.iterator]();
// console.log([...counterIter(3)]);

// ジェネレータ関数によって生成されたオブジェクトがイテレータインタフェースを満たしていることを確認する
const generator = counterGen();
// console.log(generator );

// return() や throw() がどのようなときに呼ばれるのか確認する
console.log("======================");
const iterator3 = iter[Symbol.iterator]();
for (let i of iterator3) {
  if (i.next().value === 3) break;
  console.log(i);
}
console.log(iterator3.next().value);
console.log("======================");
const iter2 = counterIter(3);
const iterator2 = iter2[Symbol.iterator]();
const result2 = iterator2.return();
console.log(result2.value);
console.log(result2.done);
console.log("======================");

// ジェネレータ関数の中身がどのタイミングで初めて実行されるか確認する

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
      return { value, done: true };
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
