import { add, div, mul, sub } from ".";

const complex = (re, im) => {
  return { realPart: re, imaginaryPart: im };
};

describe("", () => {
  test("add", () => {
    expect(add(complex(2, 3), complex(1, 4))).toStrictEqual(complex(3, 7));
  });
  test("sub", () => {
    expect(sub(complex(2, 3), complex(1, 4))).toStrictEqual(complex(1, -1));
  });
  test("mul", () => {
    expect(mul(complex(2, 3), complex(1, 4))).toStrictEqual(complex(-10, 11));
  });
  test("div", () => {
    expect(div(complex(2, 9), complex(1, 2))).toStrictEqual(complex(4, 1));
  });
});
