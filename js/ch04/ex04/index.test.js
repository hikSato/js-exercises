import { bitCount } from ".";

test("Counts the number of 1s correctly", () => {
  expect(bitCount(0b111)).toBe(3);
  expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
});
