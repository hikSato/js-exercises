// export class TypeMap {
//   #map;
//   constructor() {
//     this.#map = new Map();
//   }

//   set(key, value) {
//     if (typeof key === "function" && value instanceof key) {
//       this.#map.set(key, value);
//       return;
//     }
//     if (
//       (typeof value === "string" ||
//         typeof value === "number" ||
//         typeof value === "boolean") &&
//       typeof value === typeof key()
//     ) {
//       this.#map.set(key, value);
//       return;
//     }
//     throw new Error("Error: Invalid input");
//   }

//   get(key) {
//     if (typeof key !== "function") {
//       throw new Error("Error: Invalid input");
//     }
//     return this.#map.get(key);
//   }
// }

export class TypeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    let v = value;
    if (typeof value === "string") {
      v = new String(value);
    }
    if (typeof value === "number") {
      v = new Number(value);
    }
    if (typeof value === "boolean") {
      v = new Boolean(value);
    }
    if (typeof key !== "function" || !(v instanceof key)) {
      throw Error("Error");
    }
    this.map.set(key, value);
  }

  get(key) {
    if (typeof key !== "function") {
      throw Error("Error");
    }
    return this.map.get(key);
  }
}
