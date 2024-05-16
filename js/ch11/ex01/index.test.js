import { TypeMap } from "./index.js";

describe("ex01", () => {
  it("TypeMap", () => {
    const typeMap = new TypeMap();
    typeMap.set(String, "string");
    typeMap.set(Number, 123);
    expect(typeMap.get(String)).toBe("string");
    expect(typeMap.get(Number)).toBe(123);
  });

  it("TypeMap", () => {
    const typeMap = new TypeMap();
    expect(() => {
      typeMap.set(Date, "not a date");
    }).toThrow("Error");
  });
});
