test("destructuring an object array", () => {
  let points = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ];
  // /* 左辺を埋める */ = points;
  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;
  expect(x1).toBe(1);
  expect(y1).toBe(2);
  expect(x2).toBe(3);
  expect(y2).toBe(4);
});
