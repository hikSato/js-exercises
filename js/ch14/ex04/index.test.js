import { Char } from "./index.js";

describe("ex04", () => {
  test("Char", () => {
    const a = new Char("あ");
    const i = new Char("い");
    const u = new Char("う");
    const e = new Char("え");
    const o = new Char("お");

    expect(`${a}か`).toBe("あか");
    expect(i - 10).toBe(12346);
    expect(a + o + "色").toBe("あお色");
    expect(a > i).toBe(false);
    expect(o > u).toBe(true);
    expect(
      [i, e, u, a, o].sort((a, b) => a - b).map((e) => `${e}`)
    ).toStrictEqual(["あ", "い", "う", "え", "お"]);
  });
});
