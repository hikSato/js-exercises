import { sortJapanese, toJapaneseDateString } from "./index.js";

describe("ex14", () => {
  test("sortJapanese", () => {
    expect(
      sortJapanese(["つ", "ち", "っ", "が", "ゅ", "て", "ぶ", "ゆ"])
    ).toStrictEqual(["が", "ち", "っ", "つ", "て", "ぶ", "ゅ", "ゆ"]);
    expect(sortJapanese(["ぴ", "ぺ", "ぷ", "は", "べ", "ぶ"])).toStrictEqual([
      "は",
      "ぴ",
      "ぶ",
      "ぷ",
      "べ",
      "ぺ",
    ]);
    expect(
      sortJapanese(["つばき", "つばめ", "つる", "つっかけ", "はな", "ばな"])
    ).toStrictEqual(["つっかけ", "つばき", "つばめ", "つる", "はな", "ばな"]);
  });

  test("toJapaneseDateString", () => {
    expect(toJapaneseDateString(new Date("1900-01-01"))).toBe("明治33年1月1日");
    expect(toJapaneseDateString(new Date("1922-01-01"))).toBe("大正11年1月1日");
    expect(toJapaneseDateString(new Date("1989-01-01"))).toBe("昭和64年1月1日");
    expect(toJapaneseDateString(new Date("1989-04-01"))).toBe("平成元年4月1日");
    expect(toJapaneseDateString(new Date("2010-01-01"))).toBe("平成22年1月1日");
    expect(toJapaneseDateString(new Date("2019-03-31"))).toBe(
      "平成31年3月31日"
    );
    expect(toJapaneseDateString(new Date("2019-05-01"))).toBe("令和元年5月1日");
    expect(toJapaneseDateString(new Date("2024-05-04"))).toBe("令和6年5月4日");
  });
});
