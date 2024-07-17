import { typeName } from "./index.js";

describe("ex05", () => {
  test("typeName", () => {
    expect(typeName`${"A"}`).toBe("string");
    expect(typeName`${{ x: 1 }}`).toBe("object");
    expect(typeName`${42}`).toBe("number");
    expect(typeName`${true}`).toBe("boolean");
    expect(typeName`${undefined}`).toBe("undefined");
  });
});
