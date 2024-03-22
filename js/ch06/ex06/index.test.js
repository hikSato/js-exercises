import { func } from "./index.js";

test("", () => {
  const obj1 = {};
  obj1["test1"] = "test1";
  obj1["test2"] = "test2";
  Object.defineProperty(obj1, "test3", {
    value: "test3",
    enumerable: false,
  });
  const obj2 = Object.create(obj1);
  obj2["sample1"] = "sample1";

  const expectResults = ["sample1", "test1", "test2", "test3"];
  expect(func(obj2)).toStrictEqual(expectResults);
});
