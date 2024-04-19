// - 多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース
// - 継承関係にないインスタンスとクラスのコンストラクタを入力するケース

import { instanceOf } from ".";

describe("ex05", () => {
  test("多段に継承したクラスのインスタンスと基底クラスのコンストラクタを入力するケース", () => {
    class SuperSample {}
    class SubSample extends SuperSample {}
    class SubSubSample extends SubSample {}

    const superSample = new SuperSample();
    const subSample = new SubSample();
    const subSubSample = new SubSubSample();

    expect(instanceOf(superSample, SuperSample)).toBe(true);
    expect(instanceOf(subSample, SuperSample)).toBe(true);
    expect(instanceOf(subSubSample, SuperSample)).toBe(true);
  });

  test("継承関係にないインスタンスとクラスのコンストラクタを入力するケース", () => {
    class FirstSample {}
    class SecondSample {}

    const firstSample = new FirstSample();
    const secondSample = new SecondSample();

    expect(instanceOf(secondSample, FirstSample)).toBe(false);
    expect(instanceOf(firstSample, SecondSample)).toBe(false);
  });
});
