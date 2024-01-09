import { equalArrays } from ".";

test("equalArrays", () => {
  expect(equalArrays(true, false)).toBe(true);
  expect(equalArrays(1, 2)).toBe(true);
  expect(equalArrays({ a: 1 }, { a: 2 })).toBe(true);
});
