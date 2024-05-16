import { littleToBig, bigToLittle } from "./index.js";

describe("ex03", () => {
  it("littleToBig", () => {
    expect(
      littleToBig(new Uint32Array([0x12345678, 0x90abcdef]))
    ).toStrictEqual(new Uint32Array([0x78563412, 0xefcdab90]));
  });

  it("bigToLittle", () => {
    expect(
      littleToBig(new Uint32Array([0x78563412, 0xefcdab90]))
    ).toStrictEqual(new Uint32Array([0x12345678, 0x90abcdef]));
  });
});
