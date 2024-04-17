import { C, C2 } from "./index.js"; // ts でも可

describe("ex03", () => {
  test("test", () => {
    const c = new C();
    expect(c.getX()).toBe(42);
  });

  test("test2", () => {
    const c = new C2();
    expect(c.getX()).toBe(42);
  });
});
