import { readLines } from ".";

describe("ex05", () => {
  test("readLines", () => {
    const lines = readLines("./ch12/ex05/sample.txt");
    expect(lines.next().value).toStrictEqual("abcde");
    expect(lines.next().value).toStrictEqual("fghij");
    expect(lines.next().value).toStrictEqual("klmno");
    expect(lines.next().value).toStrictEqual("pqrst");
    expect(lines.next().value).toStrictEqual("uvwxy");
    expect(lines.next().value).toStrictEqual("z");
  });
});
