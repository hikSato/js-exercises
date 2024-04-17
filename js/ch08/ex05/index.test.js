import { sequenceToObject } from ".";

describe("ex05", () => {
  test("normal", () => {
    expect(sequenceToObject(...["a", 1, "b", 2])).toStrictEqual({ a: 1, b: 2 });
    expect(sequenceToObject(...["c", 3, "d", 4, "f", 5])).toStrictEqual({
      c: 3,
      d: 4,
      f: 5,
    });
    expect(sequenceToObject(...["g", 0, "h", -1, "i", -2])).toStrictEqual({
      g: 0,
      h: -1,
      i: -2,
    });
  });
  test("error", () => {
    expect(() => sequenceToObject(...["a", 1, "b"])).toThrow("invalid input");
    expect(() => sequenceToObject(...[1, 1, "b", 2])).toThrow("invalid input");
    expect(() => sequenceToObject(...["a", 1, 2, 2])).toThrow("invalid input");
  });
});
