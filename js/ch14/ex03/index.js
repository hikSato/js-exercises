export class IgnoreAccentPattern {
  constructor(pattern) {
    this.pattern = pattern;
  }

  removeDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  get patternString() {
    if (typeof this.pattern === "string") {
      return this.removeDiacritics(this.pattern);
    }
    if (this.pattern instanceof RegExp) {
      return this.removeDiacritics(this.pattern.source);
    }
    return "";
  }

  get regex() {
    if (typeof this.pattern === "string") {
      return new RegExp(this.patternString);
    }
    return new RegExp(this.patternString, "g");
  }

  toString() {
    return this.regex.toString();
  }

  [Symbol.match](str) {
    const normalizedStr = this.removeDiacritics(str);
    return normalizedStr.match(this.regex);
  }

  [Symbol.search](str) {
    const normalizedStr = this.removeDiacritics(str);
    return normalizedStr.search(this.regex);
  }
}
