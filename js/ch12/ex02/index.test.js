import { fibonacci } from ".";

describe("ex02", () => {
  test("fibonacci", () => {
    expect(fibonacci(10)).toBe(89);
    expect(fibonacci(20)).toBe(10946);
  });
});
