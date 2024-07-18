export class Char {
  constructor(char) {
    if (
      typeof char !== "string" ||
      char.length !== 1 ||
      !/[ぁ-ん]/.test(char)
    ) {
      throw new Error("Invalid input.");
    }
    this.char = char;
    this.utf16 = char.charCodeAt(0);
  }

  [Symbol.toPrimitive](arg) {
    if (arg === "string") return this.char;

    if (arg === "number") return this.utf16;

    return this.char;
  }
}
