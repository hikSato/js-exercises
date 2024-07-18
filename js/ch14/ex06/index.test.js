import { loggingProxy } from "./index.js";

describe("ex05", () => {
  test("loggingProxy", () => {
    const obj = {
      a: () => "aa",
      b: () => "bb",
      c: () => "cc",
      d: "dd",
    };
    const { proxy, callHistory } = loggingProxy(obj);
    expect(proxy.a()).toBe("aa");
    expect(proxy.b()).toBe("bb");
    expect(proxy.c()).toBe("cc");
    expect(proxy.d).toBe("dd");
    expect(callHistory.length).toBe(3);
    expect(callHistory[0].methodName).toBe("a");
    expect(callHistory[1].methodName).toBe("b");
    expect(callHistory[2].methodName).toBe("c");
  });
});
