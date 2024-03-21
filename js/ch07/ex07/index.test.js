import { bubbleSort } from "./index.js";

test("bubbleSort", () => {
  const arr = [3, 4, 1, 2, 6, 5, 8, 7];
  const expectResult = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(bubbleSort(arr)).toStrictEqual(expectResult);
});
