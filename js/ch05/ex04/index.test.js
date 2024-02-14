import { getFib, getFib1, getFib2 } from ".";

describe("Check fibonacci sequence.", () => {
  test("getFib", () => {
    expect(getFib()).toBe("1, 1, 2, 3, 5, 8, 13, 21, 34, 55");
  });

  test("getFib1", () => {
    expect(getFib1()).toBe("1, 1, 2, 3, 5, 8, 13, 21, 34, 55");
  });

  test("getFib2", () => {
    expect(getFib2()).toBe("1, 1, 2, 3, 5, 8, 13, 21, 34, 55");
  });
});
