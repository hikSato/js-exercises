// TypeScript の場合は以下:
import { Point } from "./index.js";

describe("math", () => {
  it("point", () => {
    const point1 = new Point(1, 3);
    const point2 = new Point(2, 1);
    point1.add(point2);
    expect(point1).toBeInstanceOf(Point);
    expect(point1.x).toBe(3);
    expect(point2.y).toBe(4);
    expect(point1.distance()).toBe(5);
  });
});
