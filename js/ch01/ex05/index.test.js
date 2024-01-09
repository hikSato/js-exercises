// TypeScript の場合は以下:
import { abs, sum, factorial } from "./index.js";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns sum", () => {
      expect(sum([1, 2, 3])).toBe(6);
    });

    it("returns zero value when empty array given", () => {
      expect(sum([])).toBe(0);
    });

    it("returns sum", () => {
      expect(sum([0, -1, 2, -3])).toBe(-2);
    });
  });

  describe("factorial", () => {
    it("returns the correct value", () => {
      expect(factorial(5)).toBe(120);
    });

    it("returns the correct value", () => {
      expect(factorial(10)).toBe(3628800);
    });

    it("returns the correct value", () => {
      expect(factorial(0)).toBe(1);
    });
  });
});
