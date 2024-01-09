import { compairValues } from ".";

test("compair values", () => {
  expect(compairValues(0.3 - 0.2, 0.1)).toBe(true);
  expect(compairValues(0.2 - 0.1, 0.1)).toBe(true);
});
