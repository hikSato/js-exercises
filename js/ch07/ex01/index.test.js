/* eslint no-sparse-arrays: 0 */

import { sum, multiple } from "./index.js";

describe("sum", () => {
  test("", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const matrix2 = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    // 期待値
    const expectedResult = [
      [10, 10, 10],
      [10, 10, 10],
      [10, 10, 10],
    ];
    expect(sum(matrix1, matrix2)).toStrictEqual(expectedResult);
  });
});

describe("multiple", () => {
  test("", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const matrix2 = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ];
    const expectedResult = [
      [30, 24, 18],
      [84, 69, 54],
      [138, 114, 90],
    ];
    expect(multiple(matrix1, matrix2)).toStrictEqual(expectedResult);
  });
  test("", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrix2 = [
      [7, 8],
      [9, 10],
      [11, 12],
    ];
    const expectedResult = [
      [58, 64],
      [139, 154],
    ];
    console.log(multiple(matrix1, matrix2));
    expect(multiple(matrix1, matrix2)).toStrictEqual(expectedResult);
  });
});
