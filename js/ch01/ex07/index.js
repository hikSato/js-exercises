export class Point {
  #x;
  #y;

  constructor(x, y) {
    this.#x = x;
    this.#y = y;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  distance() {
    return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
  }

  add(point) {
    this.#x += point.x;
    this.#y += point.y;
  }
}
