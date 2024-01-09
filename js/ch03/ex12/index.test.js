import { equals } from ".";

test("object comparison", () => {
  const obj1 = {
    x: 1,
    y: 2,
    z: 3,
  };
  const obj2 = {
    x: 1,
    y: 2,
    z: 3,
  };
  expect(equals(obj1, obj2)).toBe(true);
});
