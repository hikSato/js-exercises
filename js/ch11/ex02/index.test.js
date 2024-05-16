import { cache } from "./index.js";
import { jest } from "@jest/globals";

describe("ex02", () => {
  it("cachedSlowFn", () => {
    const slowFn = jest.fn().mockReturnValue("result");
    const cachedSlowFn = cache(slowFn);
    const obj = { test: "test" };
    const result = cachedSlowFn(obj);
    expect(result).toBe("result");
    expect(slowFn).toHaveBeenCalledTimes(1);

    const result2 = cachedSlowFn(obj);
    expect(result2).toBe("result");
    expect(slowFn).toHaveBeenCalledTimes(1);
  });
});
