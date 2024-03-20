import { assign } from ".";

describe("assign", () => {
  test("", () => {
    const obj1 = {};
    obj1["test1"] = "test1";
    obj1["test2"] = "test2";
    obj1[1] = 1;
    Object.defineProperty(obj1, "test1", {
      value: "test1",
      enumerable: false,
    });
    const resultObj = assign({}, obj1);
    const expectObj = Object.assign({}, obj1);
    expect(resultObj).toStrictEqual(expectObj);
  });

  test("", () => {
    const obj1 = {};
    obj1[Symbol()] = "Symbol1";
    obj1[Symbol()] = "Symbol2";
    Object.defineProperty(obj1, Symbol(), {
      value: "test1",
      enumerable: false,
    });
    obj1[1] = 1;
    const resultObj = assign({}, obj1);
    const expectObj = Object.assign({}, obj1);
    expect(resultObj).toStrictEqual(expectObj);
  });

  test("", () => {
    const obj1 = {};
    const obj2 = {};
    obj1["test1"] = "obj1_test1";
    obj1["test2"] = "obj1_test2";
    obj2["test2"] = "obj2_test2";
    obj2["test3"] = "obj2_test3";
    const resultObj = assign({}, obj1, obj2);
    const expectObj = Object.assign({}, obj1, obj2);
    expect(resultObj).toStrictEqual(expectObj);
  });
});
