import { removeOdd } from ".";

describe("Exclude odd numbers correctly.", () => {
  test("removeOdd", () => {
    expect(removeOdd({ a: 1, b: 2, c: 3 })).toStrictEqual({ b: 2 });
    expect(
      removeOdd({
        a: 3,
        b: 6,
        c: 9,
        d: 4,
        e: 2,
      })
    ).toStrictEqual({ b: 6, d: 4, e: 2 });
    expect(removeOdd({ a: 2, b: 4, c: 6 })).toStrictEqual({ a: 2, b: 4, c: 6 });
    expect(removeOdd({ a: 1, b: 3, c: 5 })).toStrictEqual({});
  });
});
