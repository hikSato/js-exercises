import { crlfToLf, lfToCrlf } from ".";

const lf = "sample\nsample\n";
const crlf = "sample\r\nsample\r\n";

test("replace lf to crlf", () => {
  expect(crlfToLf(crlf)).toBe(lf);
});

test("replace crlf to lf", () => {
  expect(lfToCrlf(lf)).toBe(crlf);
});
