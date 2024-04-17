import { TypeMap } from "./index.js";

describe("ex06", () => {
  test("TypeMap", () => {
    const entries = [
      ["key1", 1],
      ["key2", 2],
    ];
    const map = new TypeMap("string", "number", entries);
    map.set("key3", 3);
    expect(map.get("key1")).toBe(1);
    expect(map.get("key2")).toBe(2);
    expect(map.get("key3")).toBe(3);
    expect(() => map.set(4, 4)).toThrow("4 is not of type string");
    expect(() => map.set("key4", "4")).toThrow("4 is not of type number");
  });
});
