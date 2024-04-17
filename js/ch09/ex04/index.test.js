import { MagicSoldier, MagicSoldier2, Soldier, Soldier2 } from "./index.js"; // ts でも可

describe("ex04", () => {
  test("class", () => {
    const soldier = new Soldier(2);
    const magicSoldier = new MagicSoldier(2, 4);
    expect(soldier.attack()).toBe(4);
    expect(magicSoldier.attack(4)).toBe(8);
  });

  test("prototype", () => {
    const soldier2 = new Soldier2(2);
    const magicSoldier2 = new MagicSoldier2(2, 4);
    expect(soldier2.attack()).toBe(4);
    expect(magicSoldier2.attack(4)).toBe(8);
  });
});
