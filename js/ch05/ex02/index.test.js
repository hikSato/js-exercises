import { escapeStr, escapeStr2 } from ".";

describe("Convert to escape character", () => {
  test("escapeStr", () => {
    expect(escapeStr(`0btnvfr'"\\`)).toBe(`\0\b\t\n\v\f\r\'\"\\`);
    expect(escapeStr(`abcdefghijklmnopqrstuvwxyz1234567890'"\\`)).toBe(
      `a\bcde\fghijklm\nopq\rs\tu\vwxyz123456789\0\'\"\\`
    );
  });

  test("escapeStr2", () => {
    expect(escapeStr2(`0btnvfr'"\\`)).toBe(`\0\b\t\n\v\f\r\'\"\\`);
    expect(escapeStr2(`abcdefghijklmnopqrstuvwxyz1234567890'"\\`)).toBe(
      `a\bcde\fghijklm\nopq\rs\tu\vwxyz123456789\0\'\"\\`
    );
  });
});
