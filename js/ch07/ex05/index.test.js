import { pop, push, shift, sort, unshift } from "./index.js";

test("pop", () => {
  expect(pop([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4]);
});
test("push", () => {
  expect(push([1, 2, 3, 4, 5], 6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
});
test("shift", () => {
  expect(shift([1, 2, 3, 4, 5])).toStrictEqual([2, 3, 4, 5]);
});
test("unshift", () => {
  expect(unshift([1, 2, 3, 4, 5], 0)).toStrictEqual([0, 1, 2, 3, 4, 5]);
});
test("sort", () => {
  expect(sort([1, 2, 3, 4, 5], (a, b) => b - a)).toStrictEqual([5, 4, 3, 2, 1]);
});
