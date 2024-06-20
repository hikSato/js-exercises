import { primenumbers } from ".";

describe("ex04", () => {
  test("counter", () => {
    const prime = primenumbers(1000);
    const primes = [];
    const expectValues = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67,
      71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
    ];
    for (let i = 0; i < expectValues.length; i++) {
      primes.push(prime.next().value);
    }

    expect(primes).toStrictEqual(expectValues);
  });
});
