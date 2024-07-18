import { typeName } from "./index.js";

describe("ex05", () => {
  test("typeName", () => {
    expect(typeName`${"A"}`).toBe("string");
    expect(typeName`${{ x: 1 }}`).toBe("object");
    expect(typeName`${42}`).toBe("number");
    expect(typeName`${true}`).toBe("boolean");
    expect(typeName`${undefined}`).toBe("undefined");
    expect(typeName`<${"A"}>`).toBe("<string>");
    expect(typeName`object:${{ x: 1 }}`).toBe("object:object");
    expect(typeName`${42} type`).toBe("number type");
    expect(typeName`type: ${true} ;`).toBe("type: boolean ;");
  });
});
