import { counter } from ".";

describe("ex03", () => {
  test("counter", () => {
    const c = counter();
    expect(c.next().value).toBe(1);
    expect(c.next().value).toBe(2);
    expect(c.throw().value).toBe(0);
    expect(c.next().value).toBe(1);
    expect(c.return().value).toBe(1);
  });
});
