import { add, div, mul, sub } from ".";

class complex {
  constructor(re, im) {
    this.realPart = re;
    this.imaginaryPart = im;
  }
}

describe("", () => {
  test("add", () => {
    expect(add(new complex(2, 3), new complex(1, 4))).toStrictEqual(
      new complex(3, 7)
    );
  });
  test("sub", () => {
    expect(sub(new complex(2, 3), new complex(1, 4))).toStrictEqual(
      new complex(1, -1)
    );
  });
  test("mul", () => {
    expect(mul(new complex(2, 3), new complex(1, 4))).toStrictEqual(
      new complex(-10, 11)
    );
  });
  test("div", () => {
    expect(div(new complex(2, 9), new complex(1, 2))).toStrictEqual(
      new complex(4, 1)
    );
  });
});
