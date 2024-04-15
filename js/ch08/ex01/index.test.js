import { sample1, sample2, sample3 } from ".";

describe("ex01", () => {
  test("sample1", () => {
    console.log(sample1(3, "n"));
    expect(sample1(3, "n")).toStrictEqual(["n", "n", "n"]);
  });

  test("sample2", () => {
    expect(sample2(0)).toBe(0);
    expect(sample2(2)).toBe(4);
    expect(sample2(-3)).toBe(9);
  });

  test("sample3", () => {
    expect(sample3()).toHaveProperty("now");
    expect(sample3().now).toBeInstanceOf(Date);
  });
});
