import { obj } from "./index.js";

describe("obj", () => {
  test("Getter methods return correct values", () => {
    const x = obj.x;
    const y = obj.y;
    const expectedX = Math.sqrt(2) / 2;
    const expectedY = Math.sqrt(2) / 2;
    expect(x).toBeCloseTo(expectedX);
    expect(y).toBeCloseTo(expectedY);
  });

  test("Setter methods correctly update coordinates", () => {
    obj.x = 1;
    obj.y = 1;
    const expectedR = Math.sqrt(2);
    const expectedTheta = Math.PI / 4;
    expect(obj.r).toBeCloseTo(expectedR);
    expect(obj.theta).toBeCloseTo(expectedTheta);
  });

  test("Setter methods throw error for non-numeric values", () => {
    expect(() => {
      obj.x = NaN;
    }).toThrow();
    expect(() => {
      obj.y = NaN;
    }).toThrow();
  });
});
