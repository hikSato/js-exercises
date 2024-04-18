import { sample1, sample2 } from ".";

describe("ex02", () => {
  test("sample1", () => {
    expect(sample1(2, 2)).toBe(4);
    expect(sample1(3, 3)).toBe(27);
    expect(sample1(4, 4)).toBe(256);
    expect(sample1(-2, 2)).toBe(4);
    expect(sample1(-3, 3)).toBe(-27);
    expect(sample1(-4, 4)).toBe(256);
    expect(sample1(2, -2)).toBe(1 / 4);
    expect(sample1(3, -3)).toBe(1 / 27);
    expect(sample1(4, -4)).toBe(1 / 256);
    expect(sample1(-2, -2)).toBe(1 / 4);
    expect(sample1(-3, -3)).toBe(1 / -27);
    expect(sample1(-4, -4)).toBe(1 / 256);
  });

  test("sample2", () => {
    expect(sample1(2, 2)).toBe(4);
    expect(sample1(3, 3)).toBe(27);
    expect(sample1(4, 4)).toBe(256);
    expect(sample1(-2, 2)).toBe(4);
    expect(sample1(-3, 3)).toBe(-27);
    expect(sample1(-4, 4)).toBe(256);
    expect(sample1(2, -2)).toBe(1 / 4);
    expect(sample1(3, -3)).toBe(1 / 27);
    expect(sample1(4, -4)).toBe(1 / 256);
    expect(sample1(-2, -2)).toBe(1 / 4);
    expect(sample1(-3, -3)).toBe(1 / -27);
    expect(sample1(-4, -4)).toBe(1 / 256);
  });
});
