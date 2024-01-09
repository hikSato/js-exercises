test("Hundred Points Symbol", () => {
  // console.log("Hundred Points Symbol");
  const hundredPointsSymbol = "💯";
  expect(hundredPointsSymbol.length).toBe(2);
  expect(hundredPointsSymbol).toBe("\uD83D\uDCAF");
  expect(hundredPointsSymbol).toBe("\u{0001F4AF}");
});
