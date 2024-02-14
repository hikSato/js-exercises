// const obj1 = { x: 1 };
// obj1.y = 2;
// const obj2 = { x: 1, y: 2 };
// console.log(`obj1 === obj2 : ${obj1 === obj2}`);

export const equals = (obj1, obj2) => {
  if (!obj1 || !obj2 || typeof obj1 !== "object" || typeof obj2 !== "object")
    throw new Error("Error: Invalid Input");

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  // キーの存在確認

  // プロパティにオブジェクト
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
