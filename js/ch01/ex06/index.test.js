// TypeScript の場合は以下:
import { fib } from "./index.js";

describe("math", () => {
  describe("fib", () => {
    it("returns the correct value", () => {
      expect(fib(5)).toBe(5);
    });

    it("returns the correct value", () => {
      expect(fib(50)).toBe(12586269025);
    });
  });
});
