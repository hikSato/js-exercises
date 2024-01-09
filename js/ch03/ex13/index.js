class Example {
  constructor(value) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }

  toString() {
    return `Example Value: ${this.value}`;
  }
}

let obj = new Example(20);
console.log(+obj);
console.log(String(obj));
