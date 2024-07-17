export class MyArrayLike {
  constructor(items = []) {
    this.items = items;
  }

  // Add a length property to mimic array behavior
  get length() {
    return this.items.length;
  }

  [Symbol.iterator]() {
    return this.items[Symbol.iterator]();
  }

  push(item) {
    this.items.push(item);
  }

  toArray() {
    return this.items;
  }
}

export class MyArray extends Array {
  static get [Symbol.species]() {
    return MyArray;
  }

  constructor(...items) {
    super(...items);
  }

  // Override map to return MyArrayLike
  map(callback, thisArg) {
    const result = super.map(callback, thisArg);
    return new MyArrayLike(result);
  }

  // Override slice to return MyArrayLike
  slice(...args) {
    const result = super.slice(...args);
    return new MyArrayLike(result);
  }
}
