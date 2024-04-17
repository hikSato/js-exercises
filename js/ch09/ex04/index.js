// クラス
export class Soldier {
  #atk = 0;

  constructor(atk) {
    this.#atk = atk;
  }

  attack() {
    return this.#atk * 2;
  }
}

export class MagicSoldier extends Soldier {
  #mgc = 0;

  constructor(atk, mgc) {
    super(atk);
    this.#mgc = mgc;
  }

  attack() {
    return super.attack() + this.#mgc;
  }
}

// プロトタイプ
export function Soldier2(atk) {
  this.atk = atk;
}

Soldier2.prototype.attack = function () {
  return this.atk * 2;
};

export function MagicSoldier2(atk, mgc) {
  Soldier2.call(this, atk);
  this.mgc = mgc;
}
MagicSoldier2.prototype = Object.create(Soldier2.prototype);
MagicSoldier2.prototype.constructor = MagicSoldier2;

MagicSoldier2.prototype.attack = function () {
  return Soldier2.prototype.attack.call(this) + this.mgc;
};
